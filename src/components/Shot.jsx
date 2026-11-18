import { useState } from 'react';

/**
 * A website screenshot with a graceful fallback.
 * If the image is missing (e.g. a site couldn't be captured yet),
 * an elegant placeholder is shown instead — just drop the real
 * screenshot into /public/projects/ to replace it.
 */
export default function Shot({ src, alt, ratio = '16 / 10', eager = false, className = '' }) {
  const [failed, setFailed] = useState(!src);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-sand ${className}`} style={{ aspectRatio: ratio }}>
      {failed ? (
        <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#f1ece4,#ede6fb)]">
          <div className="text-center">
            <p className="serif-italic text-3xl text-violet">B.</p>
            <p className="eyebrow mt-2">Preview coming soon</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={eager ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-left-top transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
