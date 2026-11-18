/**
 * Captures real screenshots of every project in src/data/projects.js
 * using the locally installed Google Chrome, and writes optimised WebP
 * images to public/projects/<slug>.webp (+ <slug>-mobile.webp).
 *
 * Usage:  npm run screenshots            (all projects)
 *         npm run screenshots -- slaywjoy (only matching slugs)
 *
 * Also writes scripts/site-info.json with each site's title, meta
 * description, headings and detected tech — useful when writing copy.
 */
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { projects } from '../src/data/projects.js';

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const executablePath = CHROME_PATHS.find((p) => fs.existsSync(p));
if (!executablePath) throw new Error('No Chrome/Edge found — edit CHROME_PATHS.');

const outDir = path.resolve('public/projects');
fs.mkdirSync(outDir, { recursive: true });
const only = process.argv.slice(2);
const list = only.length ? projects.filter((p) => only.some((o) => p.slug.includes(o))) : projects;

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath, headless: 'new' });
const infoPath = path.resolve('scripts/site-info.json');
const info = fs.existsSync(infoPath) ? JSON.parse(fs.readFileSync(infoPath, 'utf8')) : {};
const withTimeout = (p, ms, label) =>
  Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(label + ' timed out')), ms))]);

async function shoot(project, { width, height, mobile, suffix, outWidth }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile });
  try {
    await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 });
  } catch (e) {
    console.warn(`  ! ${project.slug}${suffix}: ${e.message.split('\n')[0]} — capturing anyway`);
  }
  await wait(Number(process.env.SETTLE || 3500)); // let hero animations settle
  // Nudge lazy/scroll-reveal content, then return to top.
  await page.evaluate(() => window.scrollTo(0, 400));
  await wait(600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(1200);

  if (!mobile) {
    info[project.slug] = await page.evaluate(() => {
      const txt = (s) => [...document.querySelectorAll(s)].map((n) => n.innerText.trim()).filter(Boolean).slice(0, 12);
      const html = document.documentElement.outerHTML;
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        h1: txt('h1'), h2: txt('h2'), h3: txt('h3').slice(0, 8),
        nav: txt('nav a').slice(0, 12),
        tech: {
          react: !!document.querySelector('#root') || /react/i.test(html.slice(0, 5000)),
          vite: /\/assets\/index-[\w-]+\.js/.test(html),
          next: !!document.querySelector('#__next') || /_next\//.test(html),
          tailwind: /class="[^"]*\b(flex|grid)\b[^"]*\b(px|py|mt|mb|text)-\d/.test(html),
        },
      };
    });
  }
  const buf = await page.screenshot({ type: 'png' });
  await sharp(buf).resize({ width: outWidth }).webp({ quality: 80 }).toFile(path.join(outDir, `${project.slug}${suffix}.webp`));
  await page.close();
}

for (const p of list) {
  console.log(`→ ${p.slug}  ${p.url}`);
  try {
    await withTimeout(shoot(p, { width: 1440, height: 900, mobile: false, suffix: '', outWidth: 1440 }), 120000, 'desktop');
    fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
    await withTimeout(shoot(p, { width: 390, height: 844, mobile: true, suffix: '-mobile', outWidth: 390 }), 120000, 'mobile');
  } catch (e) {
    console.error(`  ✗ ${p.slug} failed: ${e.message}`);
  }
}
await browser.close();
fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
console.log('Done.');
