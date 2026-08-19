'use client';

import { useRef, useEffect, useState, useMemo, useId, useCallback } from 'react';

const CurvedLoop = ({
  marqueeText = '',
  speed = 2,
  className,
  curveAmount = 0,
  direction = 'left',
  interactive = true,
  reducedMotion = false
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);
  const rafRef = useRef(0);
  const speedRef = useRef(speed);
  const directionRef = useRef(direction);

  useEffect(() => {
    speedRef.current = speed;
    directionRef.current = direction;
  }, [speed, direction]);

  const textLength = spacing;
  const repeatCount = textLength ? Math.ceil(1800 / textLength) + 2 : 1;
  const totalText = useMemo(() => text.repeat(repeatCount), [text, repeatCount]);

  useEffect(() => {
    if (measureRef.current) {
      const length = measureRef.current.getComputedTextLength();
      setSpacing(length);
      setReady(true);
    }
  }, [text]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    const initial = -spacing;
    textPathRef.current.setAttribute('startOffset', `${initial}px`);
    setOffset(initial);
  }, [spacing]);

  const animate = useCallback(function animate() {
    if (reducedMotion || !spacing || !textPathRef.current || dragRef.current) return;

    const delta = directionRef.current === 'right' ? speedRef.current : -speedRef.current;
    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + delta;
    const wrapPoint = spacing;

    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;

    textPathRef.current.setAttribute('startOffset', `${newOffset}px`);
    setOffset(newOffset);
    rafRef.current = requestAnimationFrame(animate);
  }, [reducedMotion, spacing]);

  useEffect(() => {
    if (reducedMotion) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, reducedMotion]);

  const onPointerDown = useCallback((e) => {
    if (!interactive || reducedMotion) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture?.(e.pointerId);
  }, [interactive, reducedMotion]);

  const onPointerMove = useCallback((e) => {
    if (!interactive || reducedMotion || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + dx;
    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    textPathRef.current.setAttribute('startOffset', `${newOffset}px`);
    setOffset(newOffset);
  }, [interactive, reducedMotion, spacing]);

  const endDrag = useCallback(() => {
    if (!interactive || reducedMotion) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  }, [interactive, reducedMotion]);

  const cursorStyle = interactive && !reducedMotion ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

  return (
    <div
      className="w-full flex items-center justify-center py-4"
      style={{
        visibility: ready ? 'visible' : 'hidden',
        cursor: cursorStyle,
        contain: 'layout style paint'
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-[100/12] text-[2rem] md:text-[2.5rem] font-semibold uppercase leading-none"
        viewBox="0 0 1440 120"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'strict'
        }}
        aria-hidden="true"
        role="img"
        aria-label="Decorative looping text animation"
      >
        <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          {text}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={`fill-black ${className ?? ''}`} style={{ willChange: 'transform' }}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={`${offset}px`}
              xmlSpace="preserve"
              style={{ willChange: 'transform' }}
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
      {!ready && (
        <div className="sr-only" aria-live="polite">Loading animation...</div>
      )}
    </div>
  );
};

export default CurvedLoop;
