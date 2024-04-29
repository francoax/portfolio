export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-bold bg-gradient-to-r from-[#e35454] via-[#e35454] to-slate-300 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}