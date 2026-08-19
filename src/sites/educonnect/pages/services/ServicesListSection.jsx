import { motion } from "framer-motion";
import { UserCheck, Search, FileCheck2, BadgeCheck, GraduationCap, Plane } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";
import BentoCard from "../../components/BentoCard";

// Same BentoCard shell and span rhythm as the home page's ServicesSection,
// since this is the same six services in their canonical, fuller-detail
// form — no eyebrow of its own, PageHeaderSection above already frames the
// page. Title renders as h2 here (this is the page's main content, not a
// subsection under a bigger heading like the home page card is).
const SPANS = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-3"];
const ICONS = [UserCheck, Search, FileCheck2, BadgeCheck, GraduationCap, Plane];

const ServicesListSection = () => {
  return (
    <section className="bg-surface pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const inverted = index === services.length - 1;

            return (
              <motion.div
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`sm:col-span-1 ${SPANS[index]}`}
              >
                <BentoCard
                  as="article"
                  titleAs="h2"
                  icon={ICONS[index]}
                  index={index}
                  title={service.name}
                  description={service.description}
                  inverted={inverted}
                  notched={inverted}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
