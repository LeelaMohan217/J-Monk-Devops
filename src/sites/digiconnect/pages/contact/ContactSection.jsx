import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { useContactForm } from "../../../../shared/hooks/useContactForm";
import { formFields } from "./data";

const fieldClass =
  "w-full rounded-lg border border-neutral-200 bg-surface px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10";

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
        subject: "",
        company: "",
        message: "",
      },
    });

  return (
    <section className="border-t bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Heading */}
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="flex max-w-3xl flex-col items-start gap-4 text-left"
        >
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl">
            Send your Inquiry
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
            Share your project details, and we’ll get back to you within 24
            hours.
          </p>
        </motion.div>

        {/* Full-width Form */}
        <motion.div
          variants={riseIn(STEP)}
          {...centerTrigger}
          className="mt-12 w-full md:mt-14"
        >
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
            <div className="grid w-full gap-x-8 gap-y-6 sm:grid-cols-2">
              {formFields.map((field) => {
                const id = `digiconnect-contact-${field.name}`;

                return (
                  <div
                    key={field.name}
                    className={`flex flex-col gap-2 ${
                      field.full ? "sm:col-span-2" : ""
                    }`}
                  >
                    <label
                      htmlFor={id}
                      className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600"
                    >
                      {field.label}

                      {field.required && (
                        <span
                          className="ml-1 text-amber-600"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      )}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={id}
                        name={field.name}
                        rows={6}
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
              <p className="text-sm leading-relaxed text-red-600">
                {errorMessage}
              </p>
            )}

            {successMessage && (
              <p className="text-sm leading-relaxed text-green-700">
                {successMessage}
              </p>
            )}

            <div className="flex pt-1">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30 sm:w-auto"
              >
                Send message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
