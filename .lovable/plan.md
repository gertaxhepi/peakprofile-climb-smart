# Single-page, URL-safe PeakProfile flow

## Changes
- Keep the current homepage design, wording, photography, colours, typography, spacing, borders, and section order.
- Move the existing early-access form into the hero, preserving its validation, storage, duplicate handling, success state, and error behavior.
- Replace all homepage hash links and hash cleanup logic with real buttons that scroll by element reference without changing the URL.
- Keep “What it is” as a scroll button, and keep the top-right “Notify me” action as a button that returns to and focuses the hero email field.
- Remove the separate lower signup panel after moving its form into the hero, while preserving the remaining continuous section order and content.
- Add a subtle, keyboard-accessible downward-arrow button at the bottom center of the hero that scrolls to the next section.

## Accessibility and motion
- Add visible focus states and descriptive labels to every scroll control.
- Respect reduced-motion preferences by switching smooth scrolling to immediate scrolling.
- Keep the hero form readable over the photograph and stacked on smaller screens.

## Validation
- Confirm no hash fragments remain in homepage links or scroll actions.
- Test direct loading, refresh, each scroll control, and a non-destructive form validation path on desktop and mobile.
- Confirm the URL remains `/`, all sections remain on one page, no layout overflow appears, and the app builds cleanly.

## Technical details
- Use React refs and `scrollIntoView({ behavior })`; focus the email field through an optional form prop/ref after scrolling.
- Keep the sitemap and email-preview utility route because they are required infrastructure, not separate content pages.
- Lovable manages source-control commits automatically; the requested commit wording will be reflected in the completed change summary.
