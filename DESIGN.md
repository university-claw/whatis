# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-06-03
- Primary product surfaces: GitHub Pages static mobile landing page in `whatis/`
- Evidence reviewed: `README.md`, `index.html`, `styles.css`, `script.js`, `assets/`

## Brand
- Personality: calm, helpful, campus-native, lightweight
- Trust signals: Myongji campus photography, MJUCLAW naming, uniclaw team section, GitHub-linked members
- Avoid: liquid glass in body content, excessive translucent cards, decorative effects that compete with text

## Product goals
- Goals: explain MJUCLAW quickly, show what it helps with, drive Discord server entry
- Non-goals: desktop-first marketing page, long feature documentation, heavy animation showcase
- Success signals: readable first-scroll mobile experience, clear Discord CTA, team credibility

## Personas and jobs
- Primary personas: Myongji students using Discord
- User jobs: understand the service, scan supported tasks, join the Discord server
- Key contexts of use: mobile browser, GitHub Pages, likely short attention span

## Information architecture
- Primary navigation: fixed MJUCLAW header with Discord CTA
- Core routes/screens: hero, service intro, help features, Discord entry, team
- Content hierarchy: short heading first, one supporting paragraph, one focused visual or panel

## Design principles
- Principle 1: Body sections use a campus or team background image with a dark readability overlay.
- Principle 2: Foreground content floats through spacing, contrast, and shadow, not glass blur.
- Tradeoffs: large solid panels are avoided on mobile; use short overlays, separators, and compact CTAs instead.

## Visual language
- Color: dark navy overlays, white text, MJUCLAW blue accents, Discord purple for server entry
- Typography: Apple system stack with heavy Korean display headings
- Spacing/layout rhythm: mobile-first full-viewport chapters that feel like staged scenes, not a long stacked page
- Shape/radius/elevation: transparent liquid-glass header only; compact rounded CTAs, transparent foreground content, simple shadows, no body glass effects
- Motion: scroll-driven fade-in/fade-out scene transitions, one hero mascot reveal, and feature card switching
- Imagery/iconography: campus photos for chapter backgrounds, MJUCLAW character as supporting mascot

## Components
- Existing components to reuse: fixed liquid-glass header, hero mascot, chat preview, feature switcher, Discord join actions, team member list
- New/changed components: no-glass floating text, compact Discord CTA, repositioned mascot support visuals
- Variants and states: active feature card controlled by scroll progress
- Token/component ownership: CSS custom properties in `styles.css`

## Accessibility
- Target standard: practical WCAG AA contrast for text over imagery
- Keyboard/focus behavior: visible outlines on links and CTAs
- Contrast/readability: dark overlays behind white section text; solid panels for dense text
- Screen-reader semantics: headings and section labels remain in HTML
- Reduced motion and sensory considerations: reduced motion disables transform-heavy effects; opacity changes remain simple and functional

## Responsive behavior
- Supported breakpoints/devices: mobile-first; desktop is acceptable but not the primary target
- Layout adaptations: single-column mobile, two-column enhancement above 760px
- Touch/hover differences: hover effects are decorative only

## Interaction states
- Loading: static image loading with preserved text
- Empty: not applicable
- Error: not applicable
- Success: Discord link navigates externally
- Disabled: not applicable
- Offline/slow network, if applicable: text remains useful if remote GitHub avatars fail

## Content voice
- Tone: concise, Korean, student-facing
- Terminology: MJUCLAW, 명지클로, Discord
- Microcopy rules: avoid long descriptions; use direct verbs and concrete student tasks

## Implementation constraints
- Framework/styling system: static HTML, CSS, vanilla JavaScript
- Design-token constraints: CSS variables only; no additional dependencies
- Performance constraints: no heavy runtime effects, no body backdrop filters
- Compatibility constraints: GitHub Pages static hosting; iOS browser chrome is guided through dark `theme-color` and page background
- Test/screenshot expectations: mobile Chrome smoke test after visual changes

## Open questions
- [ ] Final production Discord CTA wording / team / low impact
