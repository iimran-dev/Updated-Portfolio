export function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "font-display font-bold inline-flex items-center gap-2 px-6 py-3 border-4 border-border-primary neo-shadow-sm";
  const variants = {
    primary: "bg-accent-primary text-text-inverse",
    light: "bg-bg-input text-text-primary",
    lime: "bg-accent-secondary text-text-primary",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
