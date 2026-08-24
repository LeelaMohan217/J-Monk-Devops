import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import aboutImg from "../../assets/educonnect-about.jpg";

// Two columns from lg, copy beside a photo, rather than the full-width block of
// text this was. PAGE_HEADING_SIZE is already the right ramp for a heading that
// shares its row.
//
// The photo sits in a 4-of-12 column rather than taking half the rail, for two
// reasons. It is a square 736px source, so a wider column would either upscale
// it past its resolution or force a crop; and it is a single centred figure on
// plain white, which reads better at a contained size than blown up to 500px.
// At this width it renders around 400px, which the source covers at nearly 2x.
//
// It is mount-timed on the same delay as the heading rather than waiting its
// turn after the lead, so that half of the fold is not empty while the text
// arrives.
const PageHeaderSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-5 text-left lg:col-span-7">
            <motion.span
              variants={fadeIn("up", 0.05)}
              initial="hidden"
              animate="show"
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              {pageHeader.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              animate="show"
              className={`font-semibold text-neutral-900 ${PAGE_HEADING_SIZE}`}
            >
              {pageHeader.headingLead}
              <span className="font-['Playfair_Display',serif] text-red-600 italic">
                {pageHeader.headingAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {pageHeader.lead}
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 lg:col-start-9"
          >
            {/* aspect-square, the source's own ratio, so nothing is cropped:
                the mortarboard sits near the top edge and the folded arms near
                the bottom, and a landscape frame would have cut both.

                The bordered frame is doing real work here rather than being
                decoration. The subject is shot on plain white and the section
                ground is also white, so without a rule the photo has no edge
                and its figure appears to float in the layout. */}
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200">
              <img
                src={aboutImg}
                alt="An EduConnect student at graduation"
                width="736"
                height="736"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
