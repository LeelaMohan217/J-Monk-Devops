import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ContactForm from "../../../shared/components/ContactForm";
import { fadeIn } from "../../../shared/variants";
import { ACCENT_CLASS } from "../headingStyles";
import { PAGE_HEADING_SIZE } from "../../../shared/headingSizes";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// The reason list is a tall stack, so each item reveals on its own trigger with
// an element-relative `amount` rather than the shared `centerTrigger`.
const reasonReveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};

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
    name: "stage",
    label: "Where you are now",
    type: "select",
    required: true,
    placeholder: "Select your stage",
    options: [
      "Student",
      "Recent graduate",
      "Switching careers",
      "Working professional",
    ],
  },
  {
    name: "interest",
    label: "What you want to build",
    type: "select",
    required: true,
    placeholder: "Select an area",
    options: [
      "Web development",
      "Cloud & DevOps",
      "Mobile development",
      "Not sure yet",
    ],
    full: true,
  },
  {
    name: "message",
    label: "What are you hoping to get out of it?",
    type: "textarea",
    required: true,
    placeholder:
      "Tell us what you've built so far, or what you're stuck on. A few lines is plenty.",
    full: true,
  },
];

const reasons = [
  {
    step: "01",
    title: "You want project experience",
    body: "You can follow a tutorial but have never shipped anything someone else depends on.",
  },
  {
    step: "02",
    title: "You're changing direction",
    body: "You're moving into tech from somewhere else and need a route that respects the time you have.",
  },
  {
    step: "03",
    title: "You want a mentor, not a playlist",
    body: "You'd rather have your work reviewed by someone doing the job than watch another course.",
  },
];

const SkillConnectContact = () => {
  const [openReason, setOpenReason] = useState(0);

  useDocumentMeta(
    "Contact | SkillConnect",
    "This reaches the SkillConnect team directly. The people running the projects and the mentorship, not a general enquiries desk."
  );

  return (
    <main className="bg-surface">
      <section className="w-full bg-surface pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <motion.span
              variants={fadeIn("up", 0.05)}
              initial="hidden"
              animate="show"
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              Contact
            </motion.span>

            <motion.h1
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              animate="show"
              className={`max-w-3xl text-center font-semibold text-neutral-800 ${PAGE_HEADING_SIZE}`}
            >
              Tell us what you&apos;re{" "}
              <span className={ACCENT_CLASS}>trying to learn.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-2xl text-center text-base leading-relaxed text-neutral-600 md:text-lg"
            >
              This reaches the SkillConnect team directly. The people running the
              projects and the mentorship, not a general enquiries desk.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.h2
              variants={fadeIn("up", 0)}
              {...reasonReveal}
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              Reach out if
            </motion.h2>

            <ol className="mt-8 border-t border-neutral-200">
              {reasons.map((reason, index) => {
                const isOpen = openReason === index;

                return (
                  <motion.li
                    key={reason.step}
                    variants={fadeIn("up", 0)}
                    {...reasonReveal}
                    className="border-b border-neutral-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenReason(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 py-6 text-left"
                    >
                      <span>
                        <span
                          className="text-xs font-medium tabular-nums text-neutral-400"
                          aria-hidden="true"
                        >
                          {reason.step}
                        </span>
                        <span className="mt-3 block text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                          {reason.title}
                        </span>
                      </span>

                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 transition-[color,transform] duration-300 ${
                          isOpen ? "rotate-180 text-red-600" : "text-neutral-400"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm leading-relaxed text-neutral-600">
                            {reason.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ol>

            <motion.p
              variants={fadeIn("up", 0)}
              {...reasonReveal}
              className="mt-8 text-sm leading-relaxed text-neutral-500"
            >
              Wherever you are in that list, start there. You don&apos;t need a
              portfolio or a finished course to get in touch.
            </motion.p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm
              idPrefix="skillconnect-contact"
              fields={fields}
              submitLabel="Send to SkillConnect"
              submitAdornment={
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SkillConnectContact;
