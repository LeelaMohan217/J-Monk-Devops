import { motion } from "framer-motion";
import ContactForm from "../../../shared/components/ContactForm";
import { fadeIn, riseIn } from "../../../shared/variants";

const fields = [
  {
    name: "fullName",
    label: "Full name",
    required: true,
    autoComplete: "name",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    placeholder: "Optional",
  },
  {
    name: "level",
    label: "Level of study",
    type: "select",
    required: true,
    placeholder: "Select a level",
    options: ["Bachelor's", "Master's", "PhD", "Still deciding"],
  },
  {
    name: "destination",
    label: "Where you're looking",
    type: "select",
    required: true,
    placeholder: "Select a destination",
    options: [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Germany",
      "Open to suggestions",
    ],
  },
  {
    name: "timeline",
    label: "When you want to go",
    type: "select",
    required: true,
    placeholder: "Select a timeline",
    options: [
      "Next intake",
      "Within a year",
      "In one to two years",
      "Still deciding",
    ],
  },
  {
    name: "message",
    label: "Where are you in the process?",
    type: "textarea",
    required: true,
    placeholder:
      "Your course, your scores if you have them, and what you're unsure about. A few lines is plenty.",
    full: true,
  },
];

const stages = [
  {
    step: "01",
    title: "Choosing where to apply",
    body: "Course and university shortlists that match your marks, budget, and what you actually want to do after.",
  },
  {
    step: "02",
    title: "Getting the application right",
    body: "Documents, deadlines, and the statement. The parts where a small mistake costs a whole intake.",
  },
  {
    step: "03",
    title: "Visa and departure",
    body: "Financial documentation, the interview, and knowing what to expect in the first month.",
  },
];

const EduConnectContact = () => {
  return (
    <main className="bg-surface">
      {/* Same header treatment as the about/services/blog pages — no grid
          backdrop, eyebrow at neutral-500, lead at body size. */}
      <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-start gap-5 text-left">
            <motion.span
              variants={fadeIn("up", 0.05)}
              initial="hidden"
              animate="show"
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              Contact
            </motion.span>

            <motion.h1
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
            >
              Let&apos;s map the route abroad.
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              This reaches the EduConnect team directly, the people who
              handle university selection, applications, and visas.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={riseIn(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-4"
          >
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              What we help with
            </h2>

            {/* Same hairline rows and numeral treatment as the services page's
                ProcessSection, which carries this identical three-stage copy. */}
            <ol className="mt-8 border-t border-neutral-200">
              {stages.map((stage) => (
                <li
                  key={stage.step}
                  className="border-b border-neutral-200 py-6"
                >
                  <span
                    className="text-xs font-medium tabular-nums text-neutral-400"
                    aria-hidden="true"
                  >
                    {stage.step}
                  </span>
                  <h3 className="mt-3 text-base font-medium tracking-tight text-neutral-900">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {stage.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm leading-relaxed text-neutral-500">
              Wherever you are in that list, start there. You don&apos;t need
              anything prepared to get in touch.
            </p>
          </motion.div>

          <motion.div
            variants={riseIn(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <ContactForm
              idPrefix="educonnect-contact"
              fields={fields}
              submitLabel="Send to EduConnect"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EduConnectContact;
