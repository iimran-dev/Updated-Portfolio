'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35,
  reducedMotion = false,
}) => {
  const elements = useMemo(() =>
    animateBy === 'words' ? text.split(' ') : text.split(''),
    [text, animateBy]
  );

  const [inView, setInView] = useState(() => reducedMotion);
  const ref = useRef(null);

  const defaultFrom = useMemo(() =>
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -50 }
      : { filter: 'blur(10px)', opacity: 0, y: 50 },
  [direction]);

  const defaultTo = useMemo(() => [
    { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
    { filter: 'blur(0px)', opacity: 1, y: 0 }
  ], [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = useMemo(() =>
    Array.from({ length: stepCount }, (_, i) => stepCount === 1 ? 0 : i / (stepCount - 1)),
  [stepCount]);

  const animateKeyframes = useMemo(() =>
    buildKeyframes(fromSnapshot, toSnapshots),
  [fromSnapshot, toSnapshots]);

  useEffect(() => {
    if (!ref.current || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref.current);
      }
    }, { threshold, rootMargin });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, reducedMotion]);

  const spanTransition = useMemo(() => ({
    duration: totalDuration,
    times,
    ease: easing,
  }), [totalDuration, times, easing]);

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap`}
      style={{ willChange: reducedMotion ? 'auto' : 'transform, filter, opacity' }}
      aria-hidden={reducedMotion ? undefined : !inView}
    >
      {elements.map((segment, index) => {
        const segmentDelay = inView ? (index * delay) / 1000 : 0;

        return (
          <motion.span
            key={index}
            className="inline-block will-change-[transform,filter,opacity]"
            initial={reducedMotion ? undefined : fromSnapshot}
            animate={reducedMotion ? undefined : (inView ? animateKeyframes : fromSnapshot)}
            transition={{ ...spanTransition, delay: segmentDelay }}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{ willChange: reducedMotion ? 'auto' : 'transform, filter, opacity' }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
