import { motion } from "framer-motion";
import { fadeIn } from "../../shared/variants";
import { capabilities } from "./data";
import SectionHeading from "./SectionHeading";

const [custom, saas, cloud, devops, api, consulting] = capabilities;

// Shared 7-column grid (widths 2:3:2:5:5:2:5) x 3-row grid. Every tile is
// placed with explicit grid lines; cells nobody claims stay empty and show
// the white page background, which is what creates the "gap" look.
const TileContent = ({ capability, dark, titleSize }) => (
  <>
    <div
      className={`w-7 h-7 flex items-center justify-center text-white shrink-0 ${
        dark ? "bg-neutral-900" : "bg-red-600"
      }`}
    >
      <capability.icon className="w-3.5 h-3.5" />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className={`font-display font-bold text-neutral-900 ${titleSize}`}>
        {capability.title}
      </h3>
      <p className="text-xs text-neutral-600 leading-relaxed">
        {capability.description}
      </p>
    </div>
  </>
);

const Tile = ({
  capability,
  dark,
  place,
  titleSize = "text-base",
  heroHover = false,
}) => {
  if (heroHover) {
    // Two stacked layers: a fixed colored back card, and a white front card
    // that slides on hover to reveal it. The front layer stays in normal
    // flow (identical box model to a plain Tile) so it sizes itself the
    // same way every other tile does; only its transform animates. The
    // back layer is absolutely positioned to match whatever size that
    // produces, rather than the other way around.
    return (
      <div className={`relative h-52 ${place}`}>
        <div aria-hidden="true" className="absolute inset-0 bg-red-600" />
        <div
          className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 transition-transform duration-300 ease-in-out hover:translate-x-[-50px]"
        >
          <TileContent capability={capability} dark={dark} titleSize={titleSize} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-52 bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 ${place}`}
    >
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  );
};

const TileV2 = ({ capability, dark, place, titleSize = "text-base" }) => (
  <div className={`relative h-52 ${place}`}>
    <div aria-hidden="true" className="absolute inset-0 bg-red-700" />
    <div className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 transition-transform duration-300 ease-in-out hover:translate-x-[-50px]">
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  </div>
);

const TileV3 = ({ capability, dark, place, titleSize = "text-base" }) => (
  <div className={`relative h-52 ${place}`}>
    <div aria-hidden="true" className="absolute inset-0 bg-red-600" />
    <div className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 transition-transform duration-300 ease-in-out hover:translate-x-[50px]">
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  </div>
);

const TileV4 = ({ capability, dark, place, titleSize = "text-base" }) => (
  <div className={`relative h-52 ${place}`}>
    <div aria-hidden="true" className="absolute inset-0 bg-neutral-200" />
    <div className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 transition-transform duration-300 ease-in-out hover:translate-x-[75px]">
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  </div>
);

const TileV5 = ({ capability, dark, place, titleSize = "text-base" }) => (
  <div className={`relative h-52 ${place}`}>
    <div aria-hidden="true" className="absolute inset-0 bg-red-600" />
    <div className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 transition-transform duration-300 ease-in-out hover:translate-x-[75px]">
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  </div>
);

const TileV6 = ({ capability, dark, place, titleSize = "text-base" }) => (
  <div className={`relative h-52 ${place}`}>
    <div aria-hidden="true" className="absolute inset-0 border" />
    <div className="relative z-10 h-full bg-white border border-neutral-200 p-4 flex flex-col justify-between gap-3 origin-center transition-transform duration-300 ease-in-out hover:rotate-[-25deg]">
      <TileContent capability={capability} dark={dark} titleSize={titleSize} />
    </div>
  </div>
);

const Filler = ({ place, dot = false }) => (
  <div
    aria-hidden="true"
    className={`hidden lg:block relative bg-neutral-200 border border-neutral-200 h-52 ${place}`}
  >
    {dot && (
      <span className="absolute top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-neutral-900" />
    )}
  </div>
);

const SplitCell = ({ place }) => (
  <div
    aria-hidden="true"
    className={`hidden lg:flex flex-col h-52 ${place}`}
  >
    <div className="flex-5" />
    <div className="flex-4 bg-neutral-200 border-t border-l border-r border-neutral-200" />
  </div>
);

const SplitCellV2 = ({ place, dot = false }) => (
  <div
    aria-hidden="true"
    className={`hidden lg:flex flex-col relative h-52 ${place}`}
  >
    {dot && (
      <span className="absolute top-0 right-0 w-1.5 h-1.5 translate-x-1/2 -translate-y-1/2 bg-neutral-900" />
    )}
    <div className="flex-5" />
    <div className="flex-4 bg-neutral-100 border-2 border-neutral-200" />
  </div>
);

const CapabilitiesSection = () => {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we build"
          align="left"
        />

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div
            aria-hidden="true"
            className="hidden lg:block absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 border border-neutral-300 bg-neutral-50 rotate-45 z-10"
            style={{ top: "26%", left: "25%" }}
          />
          {/* <div
            aria-hidden="true"
            className="hidden lg:block absolute w-16 h-16 translate-x-1/2 translate-y-1/2 border border-neutral-300 bg-neutral-50 rotate-45 z-10"
            style={{ bottom: "8%", right: "-5%" }}
          /> */}

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_2fr_5fr_5fr_2fr_5fr]">
            <Tile
              capability={custom}
              titleSize="text-lg"
              heroHover
              place="lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2"
            />

            <Filler
              dot
              place="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3"
            />
            <TileV2
              capability={saas}
              dark
              place="lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3"
            />
            <TileV3
              capability={cloud}
              place="lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3"
            />
            <TileV6
              capability={consulting}
              dark
              place="lg:col-start-7 lg:col-end-8 lg:row-start-2 lg:row-end-3"
            />

            <TileV4
              capability={api}
              place="lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4"
            />
            <SplitCell place="lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4" />
            <TileV5
              capability={devops}
              dark
              place="lg:col-start-4 lg:col-end-6 lg:row-start-3 lg:row-end-4"
            />
            <SplitCellV2 dot place="lg:col-start-6 lg:col-end-7 lg:row-start-3 lg:row-end-4" />
            <Filler place="lg:col-start-7 lg:col-end-8 lg:row-start-3 lg:row-end-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
