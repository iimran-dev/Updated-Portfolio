export function Badge({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-wider border-4 border-border-primary px-3 py-1 inline-block ${className}`}
    >
      {children}
    </span>
  );
}
