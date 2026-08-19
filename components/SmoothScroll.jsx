'use client';

import dynamic from "next/dynamic";
import "lenis/dist/lenis.css";

const ReactLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  { ssr: false }
);

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
        syncTouch: true,
        autoRaf: true,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

