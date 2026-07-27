export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1 16.2L10.4 2.2L19.8 16.2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6 16.2L21.6 7.3L29 16.2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
      </svg>
      <span className="text-[15px] font-medium tracking-tight">PeakProfile</span>
    </span>
  );
}
