const STEPS = [
  {
    number: "01",
    heading: "Your experience, structured",
    text: "Bring your routes, skills and training together in one credible mountain profile.",
  },
  {
    number: "02",
    heading: "Readiness you can understand",
    text: "See the evidence behind each assessment, not a mysterious AI score.",
  },
  {
    number: "03",
    heading: "Better next decisions",
    text: "Explore suitable objectives and identify the gaps to work on before committing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
        A clearer path upward
      </p>
      <div className="mt-10 grid divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {STEPS.map((s) => (
          <article key={s.number} className="py-10 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0">
            <p className="text-[13px] tabular-nums text-muted-foreground">{s.number}</p>
            <h3 className="mt-4 text-[20px] font-medium tracking-tight">{s.heading}</h3>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-muted-foreground">
              {s.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
