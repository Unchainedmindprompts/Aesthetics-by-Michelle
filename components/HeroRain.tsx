"use client";

import { useEffect, useRef, useState } from "react";

/** Decorative rain only; the original hero remains the foreground and fallback. */
export default function HeroRain() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;
    const update = () => {
      if (paused || document.hidden || video.getBoundingClientRect().bottom < 0) video.pause();
      else void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
      else update();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [enabled, paused]);

  if (!enabled) return null;

  return (
    <>
      <div className={`hero-rain ${ready ? "hero-rain--ready" : ""}`} aria-hidden="true">
        <video ref={videoRef} muted loop playsInline autoPlay preload="metadata"
          onCanPlay={() => setReady(true)} onError={() => setReady(false)}>
          <source src="/videos/hero-rain.mp4" type="video/mp4" />
        </video>
      </div>
      {ready && <button type="button" className="hero-rain__toggle"
        aria-label={paused ? "Play rain animation" : "Pause rain animation"}
        aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? "Play rain" : "Pause rain"}
      </button>}
    </>
  );
}
