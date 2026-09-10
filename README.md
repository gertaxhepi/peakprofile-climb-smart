# Peak Profile

Create a responsive one-page marketing website for an AI-powered mountaineering product called PeakProfile.

PeakProfile helps mountaineers turn their real mountain experience into a structured and trusted climbing profile. It assesses their readiness, shows where they need to improve, recommends suitable next objectives, and can eventually support guide-client matching.

The website should feel calm, credible, precise, premium, and safety-conscious.

DESIGN DIRECTION

Use a very minimal Apple-inspired design:

Clean and spacious layout

Strong typography

Large amounts of whitespace

Black, grey, warm white, and off-white only

No bright colours

No gradients

No stock mountain photography

No glassmorphism

No excessive shadows

No generic AI visuals

No blue or purple AI branding

No animations that distract from the content

Use this colour palette:

Primary text: #11110F

Background: #F7F7F4

White surfaces: #FFFFFF

Secondary text: #686864

Borders: #DDDDDA

Soft background: #ECECE8

Use a system font stack inspired by Apple:

-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Helvetica, Arial, sans-serif

Typography should have:

Tight letter spacing on large headings

Large but balanced hero typography

Medium font weights rather than heavy bold

Clear hierarchy

Comfortable reading width

Strong mobile responsiveness

LOGO

Create a simple code-based PeakProfile logo using SVG.

The logo should combine:

A minimal mountain outline

A subtle second peak or profile line

The word “PeakProfile”

Use only black lines. Keep it geometric, lightweight, and recognisable at small sizes.

Do not use a badge, circle, shield, compass, climber illustration, or detailed mountain drawing.

The logo should be implemented as an inline SVG so it remains sharp at every size.

HEADER

Create a clean navigation bar with:

Left:

PeakProfile logo and wordmark

Centre:

How it works

Why PeakProfile

Right:

An outlined pill button saying “Join early access”

The navigation should have a subtle bottom border.

On mobile:

Keep the logo visible

Keep the “Join early access” button

Hide the centre navigation links

Do not add a hamburger menu yet

HERO SECTION

Add a small eyebrow label above the main heading:

“Decision support for mountaineers”

Place a small grey circular indicator before the label.

Use this main heading:

“Know your readiness.
Choose your next mountain.”

Keep it on two lines on desktop where space allows.

Supporting text:

“PeakProfile turns your real mountain experience into a trusted climbing profile, helping you understand what you’re ready for and where to grow next.”

Add two calls to action:

Primary black pill button:
“Build your profile”

Add a simple right-arrow icon inside the button.

Secondary text link:
“See how it works”

The secondary link should have a subtle underline.

For now, clicking “Build your profile” can open an early-access email using a mailto link. Put the email address in one clearly named constant so it is easy to replace later.

PRODUCT PREVIEW

Below the hero, create a large white product preview card.

The card should look like a clean product interface, not a marketing illustration.

Use:

White background

Thin grey border

Large rounded top corners

Very subtle shadow

Three-column desktop layout

One-column mobile layout

At the top of the card include:

Small label:
“Your PeakProfile”

Title:
“Alpine readiness”

Status pill:
“Profile verified”

Below this, show three areas.

AREA 1: READINESS SCORE

Display:

“78 / 100”

Label:
“Strong foundation”

AREA 2: READINESS DIMENSIONS

Show three minimal horizontal progress indicators:

Technical: 74%

Endurance: 86%

Alpine experience: 68%

Use black progress lines on soft grey tracks.

AREA 3: RECOMMENDATION

Small label:
“Recommended next”

Title:
“Introductory 4,000 m peaks”

Supporting text:
“With an acclimatisation plan and a qualified guide.”

The product card should demonstrate how PeakProfile works without pretending that the product is already fully operational.

HOW IT WORKS SECTION

After the product preview, create a section with the eyebrow:

“A clearer path upward”

Add three equal columns separated by thin grey lines.

Column 1:

Number:
“01”

Heading:
“Your experience, structured”

Text:
“Bring your routes, skills and training together in one credible mountain profile.”

Column 2:

Number:
“02”

Heading:
“Readiness you can understand”

Text:
“See the evidence behind each assessment, not a mysterious AI score.”

Column 3:

Number:
“03”

Heading:
“Better next decisions”

Text:
“Explore suitable objectives and identify the gaps to work on before committing.”

On mobile, stack the three items vertically and separate them with horizontal lines.

INTERACTIONS

Add only subtle interactions:

Smooth scrolling for internal navigation

Buttons can move upward by 1 or 2 pixels on hover

Header button changes from outlined to black on hover

Links gently reduce opacity on hover

Respect prefers-reduced-motion

All interactive elements must work with keyboard navigation

Include clear focus states

RESPONSIVENESS

The website must work properly on:

Large desktop

Laptop

Tablet

Mobile

On mobile:

Reduce the hero heading size without making it small

Stack the CTA buttons vertically

Stack the readiness card sections

Stack the three “How it works” columns

Keep at least 16px horizontal page padding

Avoid horizontal scrolling

Maintain the clean visual hierarchy

TECHNICAL REQUIREMENTS

Use React and TypeScript

Use reusable components

Keep the component structure simple

Use semantic HTML

Use accessible labels

Use inline SVG for the logo and arrow icon

Do not install unnecessary libraries

Do not use external images

Do not use icon emojis

Do not add authentication or a database yet

Do not add fake testimonials, customer logos, statistics, pricing, or invented claims

Do not add additional sections without asking me

Keep all visible content easy to edit

Make sure the project runs without errors

SEO FOUNDATION

Set the page title to:

“PeakProfile | Readiness for Your Next Mountain”

Set the meta description to:

“PeakProfile helps mountaineers understand their readiness, build a trusted climbing profile, and make better decisions about their next mountain objective.”

Add suitable Open Graph metadata using the same title and description.

FINAL RESULT

The final website should feel like a serious early-stage mountain technology product built around trust and better decisions.

It should not feel like:

An outdoor travel agency

A climbing equipment store

A social network

An extreme-sports brand

A generic AI startup

A dashboard template

Before finishing, check:

Desktop layout

Mobile layout

Navigation links

CTA behaviour

Accessibility

Text consistency

No visual overflow

No unnecessary colours or sections

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://peakprofile-climb-smart.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/843ac95e-bc18-48c8-9874-2cf942607cf3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
