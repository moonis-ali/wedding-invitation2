Moonis & Samra — True Curved Shoulder SVG Arch

The arch now uses a visibly curved shoulder on both sides:
the vertical side transitions through a generous cubic curve into
the diagonal roof. The SVG itself supplies both the ivory fill and
the gold outline, so the CSS cannot hide the curved section.

Mobile width and scrolling behavior are preserved.

## Music

Drop your file in at `assets/music.mp3` (create the `assets` folder if it's
not there) — the filename and path must match exactly, since that's what
`index.html`'s `<audio>` tag already points to. Once it's in place, music
starts automatically the instant a guest taps the seal (that tap is what
lets the browser allow audio to play). The ♫ button top-right still lets
guests pause it or start it again manually if their browser blocks the
autoplay.

## Premium pass

This version also adds, purely through `styles.css` (and a small
`script.js` touch-up) — no layout or content was changed:

- A richer, animated geometric backdrop on the cover and hero patterns
- Drifting twinkling stars on the deep-green and rose sections
- A softly glowing, slow-rotating gold ring behind the seal, plus an
  entrance animation when the page loads
- A mashrabiya lattice texture and light sweep across the closed doors
- Shimmering ornament dividers and a gilded sheen on the main buttons
- Hover-lift and glow on photos, venue cards, event cards, and the date
  medallion
- Staggered fade/rise-in for the couple photos, venues, and event cards
  as you scroll to them
- A gentle pulse on the countdown digits each time they change
- Everything respects `prefers-reduced-motion` for guests who've turned
  off animation on their device.
