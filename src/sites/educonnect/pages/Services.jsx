import { motion } from "framer-motion";
import {
  UserCheck,
  GraduationCap,
  ClipboardCheck,
  Stamp,
  BookOpen,
  PlaneTakeoff,
} from "lucide-react";
import { fadeIn, stagger, riseIn } from "../../../shared/variants";

const services = [
  {
    icon: UserCheck,
    title: "Career Counselling & Profile Evaluation",
    description:
      "Personalized counselling sessions to identify suitable countries, universities, and career pathways based on your academic background and goals.",
  },
  {
    icon: GraduationCap,
    title: "University & Course Selection",
    description:
      "Expert assistance in shortlisting universities and courses aligned with your marks, budget, and long-term career plans.",
  },
  {
    icon: ClipboardCheck,
    title: "Application & Admission Support",
    description:
      "Help with application processes, document preparation, statement of purpose guidance, and admission procedures end to end.",
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    description:
      "Complete support for visa applications, financial documentation, and interview preparation so nothing catches you off guard.",
  },
  {
    icon: BookOpen,
    title: "IELTS / TOEFL / PTE Guidance",
    description:
      "Exam preparation guidance, study planning, and strategic resources to help you hit the score your target universities need.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure & Student Support",
    description:
      "Accommodation guidance, travel preparation, and support through your first weeks settling into a new country.",
  },
];

const process = [
  {
    step: "01",
    title: "Choosing where to apply",
    body: "Course and university shortlists that match your marks, budget, and what you actually want to do after.",
  },
  {
    step: "02",
    title: "Getting the application right",
    body: "Documents, deadlines, and the statement — the parts where a small mistake costs a whole intake.",
  },
  {
    step: "03",
    title: "Visa and departure",
    body: "Financial documentation, the interview, and knowing what to expect in the first month.",
  },
];

const Services = () => {
  return (
    <>
      <section className="border-b border-neutral-200 bg-stone-50 pt-32 pb-14 md:pt-40 md:pb-20">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl px-6 md:px-8"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            Services
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-900 md:text-6xl">
            End-to-end support for your study abroad journey.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            From your first shortlist to your first week abroad, here&apos;s
            where EduConnect helps.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeIn("up", 0.1)}
                className="flex flex-col gap-3 p-7 bg-neutral-50 border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-linear-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl mx-auto text-center flex flex-col gap-4 mb-12"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Three stages, one team throughout
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((stage) => (
              <motion.div
                key={stage.step}
                variants={riseIn(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white border border-neutral-200 p-7"
              >
                <span className="text-xs font-medium tabular-nums text-neutral-400">
                  {stage.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {stage.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
