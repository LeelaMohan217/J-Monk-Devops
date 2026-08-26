const GlazeSweep = ({ className = "bg-white/30" }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] -skew-x-12 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden ${className}`}
  />
);

export default GlazeSweep;
