// A diagonal band of light that sweeps across a button on hover, the "glaze"
// gloss. Not a Magic UI component: there is no glaze in that registry, and the
// nearest published equivalents (Magic UI's shimmer-button, shadcn.io's
// shine-button) are whole button components. Swapping to one of those would have
// meant giving up what the hero's CTAs already do, their Link routing, the
// ArrowRight that slides on hover, and their focus rings, to buy an effect that
// composes onto them in one element instead.
//
// Drop it inside any element that is `group relative overflow-hidden`. The group
// is what the hover keys off, relative is what the band positions against, and
// overflow-hidden is what keeps it inside the button, following the border radius
// on the way past.
//
// Geometry. The band is a third of the button wide and translates by percentages
// of its own width, so the numbers hold at any button size. The -skew-x-12 is
// what makes the light read as diagonal rather than a shutter wiping across, and
// blur-sm takes the hard edges off so it looks like light rather than a grey
// rectangle. 400% carries it clear of the right edge: crossing a box three times
// the band's width takes 300%, and the last 100% is the band leaving.
//
// The resting offset is 150%, not the -translate-x-full you would reach for
// first. Full parks the band's *box* exactly off the left edge, but neither the
// skew nor the blur is inside that box. Skewing 12 degrees about the centre
// throws the top corner about 5px back across the edge on a button this tall, and
// blur-sm spreads it 8px further, so a faint wedge of glaze sat permanently on
// the left of the button. 150% clears both with room to spare, and costs nothing
// but a slightly longer run-up.
//
// Painting over the label is deliberate. An absolutely positioned sibling with
// z-index auto paints above the button's in-flow text, which is what a gloss on a
// surface actually does. At these alphas it reads as a highlight crossing the
// words, not as a scrim over them.
//
// The colour has to be argued per button, which is why it is a prop with no
// clever default logic behind it. White works on a filled dark button and is
// invisible on a white one, so a bordered CTA needs a tinted band instead.
//
// motion-reduce:hidden rather than a disabled transition: with the transition
// off, the band would still teleport across on hover, which is a worse thing to
// show someone who asked for less movement than showing nothing.
const GlazeSweep = ({ className = "bg-white/30" }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] -skew-x-12 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden ${className}`}
  />
);

export default GlazeSweep;
