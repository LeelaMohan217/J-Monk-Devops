import { useState } from "react";
import { ChevronDown } from "lucide-react";

// UI-only contact form. There is deliberately no submission provider wired up
// yet — `onSubmit` is the seam a real one plugs into later without the markup
// or validation changing.
//
// Labels are sentence-case small type rather than uppercase-tracked: that
// treatment belongs to section eyebrows, and applying it to eight form labels
// made the form shout. Required markers are neutral — amber appeared nowhere
// else in the palette — and red is kept for actual errors.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const baseField =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:outline-none";

// submitAdornment is an optional node rendered after the submit label, used by
// SkillConnect for its ArrowRight. Left undefined by EduConnect, so its button
// renders exactly as before.
const ContactForm = ({
  idPrefix,
  fields,
  submitLabel = "Send message",
  notice = "Contact submission will be available soon.",
  onSubmit,
  submitAdornment = null,
}) => {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((field) => [field.name, ""])),
  );
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      const value = values[field.name].trim();

      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required.`;
        return;
      }

      if (field.type === "email" && value && !emailPattern.test(value)) {
        nextErrors[field.name] = "Enter a valid email address.";
      }
    });

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    if (onSubmit) {
      onSubmit(values);
      return;
    }

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {fields.map((field) => {
          const id = `${idPrefix}-${field.name}`;
          const errorId = `${id}-error`;
          const hasError = Boolean(errors[field.name]);
          const control = `${baseField} ${
            hasError
              ? "border-red-500 focus:border-red-500"
              : "border-neutral-200 hover:border-neutral-300 focus:border-neutral-900"
          }`;

          return (
            <div
              key={field.name}
              className={`flex flex-col gap-2 ${field.full ? "sm:col-span-2" : ""}`}
            >
              <label
                htmlFor={id}
                className="text-xs font-medium text-neutral-700"
              >
                {field.label}
                {field.required && (
                  <span className="ml-1 text-neutral-400" aria-hidden="true">
                    *
                  </span>
                )}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={5}
                  value={values[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  aria-required={field.required || undefined}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  className={`${control} resize-y`}
                />
              ) : field.type === "select" ? (
                // Native arrow swapped for the icon set the rest of the site
                // uses, so selects match the inputs beside them.
                <div className="relative">
                  <select
                    id={id}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                    aria-required={field.required || undefined}
                    aria-invalid={hasError || undefined}
                    aria-describedby={hasError ? errorId : undefined}
                    className={`${control} appearance-none pr-10`}
                  >
                    <option value="">{field.placeholder || "Select one"}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-neutral-400"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type || "text"}
                  value={values[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                  aria-required={field.required || undefined}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  className={control}
                />
              )}

              {hasError && (
                <p id={errorId} className="text-xs text-red-600">
                  {errors[field.name]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 w-full sm:w-auto"
        >
          {submitLabel}
          {submitAdornment}
        </button>

        <p className="text-xs text-neutral-500">
          <span className="text-neutral-400">*</span> Required
        </p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm text-neutral-600"
      >
        {submitted ? notice : ""}
      </p>
    </form>
  );
};

export default ContactForm;
