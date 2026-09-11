import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Logo } from "@/components/peak/Logo";
import { Photo, PHOTOS } from "@/components/peak/Photo";
import { WaitlistForm } from "@/components/peak/WaitlistForm";

const TITLE = "PeakProfile | Prepare for Your Next Expedition";
const DESCRIPTION =
  "PeakProfile will help mountaineers understand their expedition readiness and connect with the guides and participants preparing for the same mountain objective.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const READINESS_POINTS = [
  "Build a structured mountain profile",
  "See relevant strengths and experience gaps",
  "Understand what to prepare before departure",
];

const TEAM_POINTS = [
  "Meet your guide and expedition participants",
  "Understand the team's relevant experience",
  "Prepare and communicate before the expedition",
];

const STEPS = [
  {
    number: "01",
    heading: "Build your profile",
    text: "Add your mountain experience, training and technical skills.",
  },
  {
    number: "02",
    heading: "Check an expedition",
    text: "Compare your background with the demands of a real objective.",
  },
  {
    number: "03",
    heading: "Meet your team",
    text: "Connect with the verified guide and participants preparing with you.",
  },
];

function PointList({ points, tone }: { points: string[]; tone: "light" | "dark" }) {
  return (
    <ul
      className={`mt-10 divide-y border-t ${
        tone === "dark" ? "divide-white/15 border-white/15" : "divide-border border-border"
      }`}
    >
      {points.map((point) => (
        <li
          key={point}
          className={`py-4 text-[16px] leading-relaxed ${
            tone === "dark" ? "text-white/85" : "text-secondary-foreground"
          }`}
        >
          {point}
        </li>
      ))}
    </ul>
  );
}

function Index() {
  useEffect(() => {
    if (window.location.hash === "#top") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <Photo
        src={PHOTOS.hero.src}
        alt={PHOTOS.hero.alt}
        position="50% 62%"
        overlayClassName="bg-charcoal/45"
        className="min-h-[92svh] p-3 sm:p-6 lg:p-8"
      >
        <div className="flex min-h-[calc(92svh-1.5rem)] flex-col rounded-[22px] border border-white/30 px-5 py-6 sm:min-h-[calc(92svh-3rem)] sm:rounded-[32px] sm:px-8 sm:py-8 lg:min-h-[calc(92svh-4rem)]">
          <header className="grid grid-cols-[1fr_auto] items-center gap-4 text-white sm:grid-cols-3">
            <nav aria-label="Primary" className="hidden sm:block">
              <a
                href="#what-it-is"
                className="text-[14px] text-white/85 transition-opacity hover:opacity-60"
              >
                What it is
              </a>
            </nav>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="justify-self-start text-white sm:justify-self-center"
            >
              <span className="sr-only">PeakProfile home</span>
              <Logo />
            </a>
            <a
              href="#waitlist"
              className="justify-self-end rounded-full border border-white/70 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Notify me
            </a>
          </header>

          <div id="top" className="flex flex-1 flex-col justify-center py-16 text-white sm:py-24">
            <p className="text-[13px] uppercase tracking-[0.16em] text-white/75">
              A better way to prepare for the mountain
            </p>
            <h1 className="mt-6 max-w-[18ch] text-[36px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[54px] lg:text-[66px]">
              Know your readiness.
              <br className="hidden sm:block" /> Meet your expedition team.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[16px] leading-relaxed text-white/85 sm:text-[18px]">
              PeakProfile will help mountaineers understand whether they are ready for an
              expedition and connect with the people preparing for the same objective.
            </p>
            <div className="mt-10">
              <a
                href="#waitlist"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-charcoal transition-transform hover:-translate-y-[2px] sm:w-auto"
              >
                Notify me when it&rsquo;s ready
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/25 pt-5 text-[13px] text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <p>Currently in development</p>
            <p>Built for mountaineers, guides and expedition teams</p>
          </div>
        </div>
      </Photo>

      <main>
        {/* WHAT PEAKPROFILE IS */}
        <section id="what-it-is" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-36">
          <p className="text-[13px] uppercase tracking-[0.16em] text-muted-foreground">
            What PeakProfile is
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.05fr_1fr] md:gap-16">
            <h2 className="max-w-[16ch] text-[32px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
              Preparation should start with understanding.
            </h2>
            <div className="space-y-6 text-[17px] leading-relaxed text-secondary-foreground md:pt-2">
              <p>
                Choosing an expedition is not only about ambition. It requires an honest
                understanding of your technical skills, endurance, altitude experience and previous
                mountain objectives.
              </p>
              <p>
                PeakProfile brings this information together so you can better understand your
                readiness before committing to your next expedition.
              </p>
            </div>
          </div>
        </section>

        {/* 01 UNDERSTAND YOUR READINESS */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 sm:pb-36">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Photo
              src={PHOTOS.readiness.src}
              alt={PHOTOS.readiness.alt}
              position="50% 45%"
              className="aspect-[4/5] w-full rounded-[24px] border border-border"
            />
            <div>
              <p className="text-[13px] tabular-nums text-muted-foreground">01</p>
              <h2 className="mt-4 max-w-[16ch] text-[30px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[38px]">
                Understand your readiness
              </h2>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-secondary-foreground">
                Add the routes you completed, the conditions you experienced, your training and
                your technical skills. PeakProfile will compare your background with the demands of
                an expedition.
              </p>
              <PointList points={READINESS_POINTS} tone="light" />
            </div>
          </div>
        </section>

        {/* 02 KNOW YOUR EXPEDITION TEAM */}
        <section className="bg-plum text-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-36">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <p className="text-[13px] tabular-nums text-white/60">02</p>
                <h2 className="mt-4 max-w-[16ch] text-[30px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[38px]">
                  Know who you&rsquo;re climbing with
                </h2>
                <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-white/80">
                  An expedition starts long before the group meets at the mountain. PeakProfile will
                  connect verified participants and guides preparing for the same objective.
                </p>
                <PointList points={TEAM_POINTS} tone="dark" />
              </div>
              <Photo
                src={PHOTOS.team.src}
                alt={PHOTOS.team.alt}
                position="50% 55%"
                className="aspect-[4/5] w-full rounded-[24px] border border-white/20 md:order-last"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WILL WORK */}
        <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-36">
          <p className="text-[13px] uppercase tracking-[0.16em] text-muted-foreground">
            How it will work
          </p>
          <div className="mt-10 grid divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {STEPS.map((step) => (
              <article key={step.number} className="py-10 md:px-10 md:py-12 md:first:pl-0 md:last:pr-0">
                <p className="text-[13px] tabular-nums text-muted-foreground">{step.number}</p>
                <h3 className="mt-4 text-[21px] font-medium tracking-tight">{step.heading}</h3>
                <p className="mt-3 max-w-[34ch] text-[16px] leading-relaxed text-secondary-foreground">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="px-3 pb-3 sm:px-6 sm:pb-6">
          <Photo
            src={PHOTOS.waitlist.src}
            alt={PHOTOS.waitlist.alt}
            position="50% 68%"
            overlayClassName="bg-charcoal/50"
            className="rounded-[24px] p-3 sm:rounded-[36px] sm:p-6"
          >
            <div className="flex flex-col items-center rounded-[18px] border border-white/30 px-5 py-20 text-center text-white sm:rounded-[28px] sm:px-10 sm:py-32">
              <p className="text-[13px] uppercase tracking-[0.16em] text-white/75">
                PeakProfile is in development
              </p>
              <h2 className="mt-6 max-w-[18ch] text-[32px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[46px]">
                Be the first to know when it&rsquo;s ready.
              </h2>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-white/85">
                Leave your email and I&rsquo;ll notify you when you can create your mountain profile
                and explore expeditions.
              </p>
              <WaitlistForm />
            </div>
          </Photo>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
          <Logo className="text-muted-foreground" />
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} PeakProfile — in development
          </p>
        </div>
      </footer>
    </div>
  );
}
