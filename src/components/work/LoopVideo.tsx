"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A muted screen recording that plays only while it is on screen.
 *
 * It never autoplays under reduced motion, and it always carries its own
 * pause / play control, because anything moving for longer than five seconds
 * has to be stoppable.
 */
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
  controlClassName = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  controlClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce || userPaused) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload !== "auto") v.preload = "auto";
          v.play().catch(() => {});
        } else v.pause();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce, userPaused]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        className={`line-link meta ${controlClassName}`}
        aria-label={`${playing ? "Pause" : "Play"} recording: ${label}`}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}
