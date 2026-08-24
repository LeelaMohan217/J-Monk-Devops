import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";

const MapSection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm"
        >
          <div className="aspect-[21/9] w-full overflow-hidden rounded-xl ring-1 ring-inset ring-black/10">
            <iframe
              title="DigiConnect location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.040106778158!2d80.54094357591748!3d16.44158738862414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a1faeedf0e067%3A0xc9d63f32cbb27ec1!2sDoor%20No.5-69%2C%20Pedaparimi%20Village%2C%20Thullur%20Mandal%2C%20Guntur%20District%2C%20522236%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1694372345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
