import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";
import photo1 from "../../assets/blog/supply-chain.jpg";
import photo2 from "../../assets/blog/best-management-usa.jpg";
import photo3 from "../../assets/educonnect-hero1.jpg";

// 3-col, 2-row checkerboard: even cells are photo tiles, odd cells are plain
// white content tiles (heading + description, no icon). Replaces the
// earlier icon-card grid entirely. Only 3 of whyUs.points fit 3 content
// cells — kept the most distinct spread across the student journey (start,
// differentiator, finish); data.js still carries all 6 for anywhere else
// that might want the full list.
const PHOTOS = [photo1, photo2, photo3];
const POINT_INDEXES = [0, 2, 5];

const PhotoTile = ({ src, index }) => (
  <motion.li
    variants={riseIn(index * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="aspect-square overflow-hidden rounded-xl border border-neutral-200"
  >
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </motion.li>
);

const ContentTile = ({ point, index }) => (
  <motion.li
    variants={riseIn(index * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="flex aspect-square flex-col justify-center rounded-xl border border-neutral-200 bg-surface p-6"
  >
    <h3 className="text-base font-medium tracking-tight text-neutral-900">
      {point.term}
    </h3>
    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
      {point.detail}
    </p>
  </motion.li>
);

const WhyChooseSection = () => {
  const points = POINT_INDEXES.map((i) => whyUs.points[i]);

  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {whyUs.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            {whyUs.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {whyUs.headingAccent}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            {whyUs.lead}
          </p>
        </motion.div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-20">
          <PhotoTile src={PHOTOS[0]} index={0} />
          <ContentTile point={points[0]} index={1} />
          <PhotoTile src={PHOTOS[1]} index={2} />
          <ContentTile point={points[1]} index={3} />
          <PhotoTile src={PHOTOS[2]} index={4} />
          <ContentTile point={points[2]} index={5} />
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSection;
