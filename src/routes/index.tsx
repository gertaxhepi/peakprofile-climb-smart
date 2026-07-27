import { createFileRoute } from "@tanstack/react-router";
import { Logo, ArrowRight } from "@/components/peak/Logo";
import { ProductPreview } from "@/components/peak/ProductPreview";
import { HowItWorks } from "@/components/peak/HowItWorks";

const EARLY_ACCESS_EMAIL = "hello@peakprofile.app";
const MAILTO = `mailto:${EARLY_ACCESS_EMAIL}?subject=PeakProfile%20early%20access`;

const TITLE = "PeakProfile | Readiness for Your Next Mountain";
const DESCRIPTION =
  "PeakProfile helps mountaineers understand their readiness, build a trusted climbing profile, and make better decisions about their next mountain objective.";

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

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:grid-cols-3 sm:px-6">
          <a href="#top" className="min-w-0 justify-self-start transition-opacity hover:opacity-70">
            <span className="sr-only">PeakProfile home</span>
            <Logo />
          </a>
          <nav aria-label="Primary" className="hidden justify-self-center sm:flex sm:gap-8">
            <a href="#how-it-works" className="text-[14px] text-secondary-foreground transition-opacity hover:opacity-60">
              How it works
            </a>
            <a href="#why" className="text-[14px] text-secondary-foreground transition-opacity hover:opacity-60">
              Why PeakProfile
            </a>
          </nav>
          <a
            href={MAILTO}
            className="justify-self-end rounded-full border border-foreground px-4 py-2 text-[13px] font-medium transition-all hover:-translate-y-[1px] hover:bg-foreground hover:text-background"
          >
            Join early access
          </a>
        </div>
      </header>

      <main id="top">
        <section id="why" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-32">
          <p className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-muted-foreground/60" />
            Decision support for mountaineers
          </p>
          <h1 className="mt-6 max-w-[18ch] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[58px] md:text-[68px]">
            Know your readiness.
            <br className="hidden sm:block" /> Choose your next mountain.
          </h1>
          <p className="mt-7 max-w-[58ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
            PeakProfile turns your real mountain experience into a trusted climbing profile,
            helping you understand what you’re ready for and where to grow next.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={MAILTO}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[15px] font-medium text-background transition-transform hover:-translate-y-[2px] sm:w-auto"
            >
              Build your profile
              <ArrowRight />
            </a>
            <a
              href="#how-it-works"
              className="text-[15px] underline decoration-border underline-offset-4 transition-opacity hover:opacity-60"
            >
              See how it works
            </a>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ProductPreview />
        </div>

        <HowItWorks />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
          <Logo className="text-muted-foreground" />
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} PeakProfile
          </p>
        </div>
      </footer>
    </div>
  );
}
