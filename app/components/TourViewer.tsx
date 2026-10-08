"use client";

import { useEffect, useState } from "react";

type TourViewerProps = {
  src: string;
  title: string;
  subtitle?: string;
};

// Keep the loader up briefly after the iframe loads so the 3DVista player
// has time to render the first panorama instead of flashing a blank frame.
const LOADER_GRACE_MS = 1200;

export default function TourViewer({ src, title, subtitle }: TourViewerProps) {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => setHidden(true), LOADER_GRACE_MS);
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <main className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        src={src}
        title={title}
        onLoad={() => setLoaded(true)}
        allow="fullscreen; autoplay; gyroscope; accelerometer; xr-spatial-tracking"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />

      <div
        aria-hidden={hidden}
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-neutral-950 px-4 text-center transition-opacity duration-700 ${
          hidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-emerald-400" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-emerald-400">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-sm text-white/60">Loading virtual tour. Please wait...</p>
      </div>
    </main>
  );
}
