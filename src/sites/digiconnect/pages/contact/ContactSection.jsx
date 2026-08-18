import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { useContactForm } from "../../../../shared/hooks/useContactForm";
import { companyConfig } from "../../../../shared/companyConfig";
import { formFields } from "./data";

// Same input styling as the shared ContactForm component (SkillConnect/
// EduConnect use that one directly), duplicated here rather than imported
// because this form is wired to the real EmailJS submission via
// useContactForm and needs controlled inputs, which ContactForm's internal
// state model does not expose.
const fieldClass =
  "w-full rounded-lg border border-neutral-200 bg-surface px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10";

// Sourced from the shared companyConfig (also GlobalFooter's source) rather
// than a per-site footer config, since contact info is company-wide, not
// something each brand keeps its own copy of.
const infoRows = [
  { icon: Phone, label: "Phone", value: companyConfig.phone },
  { icon: Mail, label: "Email", value: companyConfig.email },
  { icon: MapPin, label: "Address", value: companyConfig.address },
];

const ContactSection = () => {
  const { formData, errorMessage, successMessage, handleChange, handleSubmit } =
    useContactForm({
      serviceId: "service_yo0v2l5",
      templateId: "template_wupcssg",
      publicKey: "aMTL-Wx9Wf14SxgIv",
      initialFields: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
    });

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:col-span-4"
        >
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Reach us directly
          </h2>

          <dl className="mt-8 space-y-6 border-t border-neutral-200 pt-8">
            {infoRows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-800">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          variants={riseIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 lg:col-start-6"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {formFields.map((field) => {
                const id = `digiconnect-contact-${field.name}`;

                return (
                  <div
                    key={field.name}
                    className={`flex flex-col gap-2 ${field.full ? "sm:col-span-2" : ""}`}
                  >
                    <label
                      htmlFor={id}
                      className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600"
                    >
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-amber-600" aria-hidden="true">
                          *
                        </span>
                      )}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={id}
                        name={field.name}
                        rows={5}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`${fieldClass} resize-y`}
                      />
                    ) : (
                      <input
                        id={id}
                        name={field.name}
                        type={field.type || "text"}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        className={fieldClass}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-sm text-green-700">{successMessage}</p>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30"
              >
                Send message
              </button>

              <p className="text-xs text-neutral-500">
                <span className="text-amber-600">*</span> Required
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
