# Introduce the new PeakProfile brand mark

## Scope
- Extract the mountain-and-human-profile symbol from the uploaded transparent logo without redrawing or changing its geometry.
- Replace the current generic two-mountain symbol in the shared PeakProfile logo while keeping the existing wordmark text, type styling, and page design unchanged.
- Use a white symbol in the photographic header and a black symbol in the light footer, with balanced sizing and spacing at desktop and mobile widths.
- Add the requested descriptive alternative text to visible logo images while retaining an accessible home-link label.

## Brand assets
- Store the exact transparent symbol as a project image asset for the website.
- Generate a real, tightly framed square favicon from that same symbol, sized so the human-profile detail remains legible without stretching or cropping the mark.
- Create a 1200×630 social-sharing image using the supplied mark and PeakProfile’s existing muted mountain palette, then reference it in Open Graph and X/Twitter metadata with the public `peakprofile.app` URL.
- Remove the previous favicon and all source references to the old inline mountain drawing.

## Verification
- Check the header and footer visually on desktop and mobile.
- Confirm the symbol’s aspect ratio, contrast, alignment, accessible text, favicon response, and social metadata.
- Confirm the homepage has no layout overflow, browser errors, or remaining references to the previous logo.
- Preserve all existing content, navigation, waitlist behavior, and styling outside the logo integration.

## Technical details
- Keep one reusable logo component with explicit light/dark variants.
- Use the uploaded transparent pixels as the source of truth; color adaptation will not alter its geometry.
- Set absolute Open Graph and Twitter image URLs on the homepage metadata.
- The requested commit title is `feat: introduce new PeakProfile brand mark`; Lovable manages repository commits automatically.
