/** Fine-line icons drawn for BETTY EMPIRE services (24×24, 1.25 stroke). */
const paths = {
  web: (
    <>
      <rect x="2.5" y="4" width="19" height="14" rx="1.5" />
      <path d="M2.5 8h19M5 6h.01M7 6h.01M9 6h.01M8 21h8M12 18v3" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
    </>
  ),
  brand: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  logo: (
    <>
      <path d="M4.5 20 12 4l7.5 16M7.3 14h9.4" />
      <path d="M3 20h4M17 20h4" />
    </>
  ),
  graphics: (
    <>
      <path d="m12 19 7-7 3 3-7 7-3-3Z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
      <path d="m2 2 7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  redesign: (
    <>
      <path d="M20 11A8 8 0 0 0 5.6 6.2L3.5 8.5" />
      <path d="M3.5 4v4.5H8M4 13a8 8 0 0 0 14.4 4.8l2.1-2.3" />
      <path d="M20.5 20v-4.5H16" />
    </>
  ),
};

export default function ServiceIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
