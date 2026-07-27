const DIMENSIONS = [
  { label: "Technical", value: 74 },
  { label: "Endurance", value: 86 },
  { label: "Alpine experience", value: 68 },
];

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-[13px]">
        <span className="text-foreground">{label}</span>
        <span className="text-muted-foreground tabular-nums">{value}%</span>
      </div>
      <div
        className="mt-2 h-[3px] w-full rounded-full bg-soft"
        role="img"
        aria-label={`${label}: ${value} percent`}
      >
        <div
          className="h-full rounded-full bg-foreground"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <div className="rounded-t-[24px] border border-b-0 border-border bg-card px-5 py-8 shadow-[0_1px_2px_rgba(17,17,15,0.04)] sm:rounded-t-[32px] sm:px-10 sm:py-10">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border pb-6 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Your PeakProfile
          </p>
          <h3 className="mt-1 truncate text-[20px] font-medium tracking-tight">
            Alpine readiness
          </h3>
        </div>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground">
          Profile verified
        </span>
      </div>

      <div className="grid gap-8 pt-8 md:grid-cols-3 md:gap-10">
        <section aria-label="Readiness score">
          <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Readiness score
          </p>
          <p className="mt-3 text-[44px] font-medium leading-none tracking-tight tabular-nums">
            78 <span className="text-muted-foreground">/ 100</span>
          </p>
          <p className="mt-3 text-[14px] text-muted-foreground">Strong foundation</p>
        </section>

        <section aria-label="Readiness dimensions" className="space-y-5 md:border-x md:border-border md:px-10">
          {DIMENSIONS.map((d) => (
            <Meter key={d.label} {...d} />
          ))}
        </section>

        <section aria-label="Recommendation">
          <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Recommended next
          </p>
          <h4 className="mt-3 text-[18px] font-medium tracking-tight">
            Introductory 4,000 m peaks
          </h4>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            With an acclimatisation plan and a qualified guide.
          </p>
        </section>
      </div>
    </div>
  );
}
