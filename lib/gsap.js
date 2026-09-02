'use client';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RoughEase } from "gsap/EasePack";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    useGSAP,
    MotionPathPlugin,
    ScrambleTextPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    TextPlugin,
    RoughEase
  );
}

export {
  gsap,
  useGSAP,
  MotionPathPlugin,
  ScrambleTextPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  TextPlugin,
  RoughEase,
};

export default gsap;
