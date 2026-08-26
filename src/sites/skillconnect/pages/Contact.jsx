import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../../shared/components/ContactForm";
import { riseIn } from "../../../shared/variants";
import { STEP, centerTrigger } from "../../../shared/motionConfig";
import { ACCENT_CLASS } from "../headingStyles";
import { PAGE_HEADING_SIZE } from "../../../shared/headingSizes";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

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
    title: "You want project experience",
    body: "You can follow a tutorial but have never shipped anything someone else depends on.",
  },
  {
    title: "You're changing direction",
    body: "You're moving into tech from somewhere else and need a route that respects the time you have.",
  },
  {
    title: "You want a mentor, not a playlist",
    body: "You'd rather have your work reviewed by someone doing the job than watch another course.",
  },
];

const SkillConnectContact = () => {
  useDocumentMeta(
    "Contact | SkillConnect",
    "This reaches the SkillConnect team directly. The people running the projects and the mentorship, not a general enquiries desk."
  );

  return (
    <main className="bg-surface">
      <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-7xl px-6 md:px-8"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            Contact
          </span>
          <h1
            className={`mt-4 max-w-3xl font-semibold text-neutral-900 ${PAGE_HEADING_SIZE}`}
          >
            Tell us what you&apos;re{" "}
            <span className={ACCENT_CLASS}>trying to learn.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            This reaches the SkillConnect team directly. The people running the
            projects and the mentorship, not a general enquiries desk.
          </p>
        </motion.div>
      </section>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={riseIn(0.05)}
            {...centerTrigger}
            className="lg:col-span-4"
          >
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Reach out if
            </h2>

            <div className="mt-8 border-t border-neutral-200">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="border-b border-neutral-200 py-6"
                >
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={riseIn(STEP)}
            {...centerTrigger}
            className="lg:col-span-7 lg:col-start-6"
          >
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
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SkillConnectContact;
