'use client';

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

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
