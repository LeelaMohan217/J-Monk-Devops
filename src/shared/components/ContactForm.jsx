import { useState } from "react";

// UI-only contact form. There is deliberately no submission provider wired up
// yet — `onSubmit` is the seam a real one plugs into later without the markup
// or validation changing.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const baseField =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10";

const ContactForm = ({
  idPrefix,
  fields,
  submitLabel = "Send message",
  notice = "Contact submission will be available soon.",
  onSubmit,
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
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${idPrefix}-${field.name}`;
          const errorId = `${id}-error`;
          const hasError = Boolean(errors[field.name]);
          const control = `${baseField} ${
            hasError
              ? "border-red-500 focus-visible:ring-red-500/20"
              : "border-neutral-200 focus:border-neutral-400"
          }`;

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
                  value={values[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  aria-required={field.required || undefined}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  className={`${control} resize-y`}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  aria-required={field.required || undefined}
                  aria-invalid={hasError || undefined}
                  aria-describedby={hasError ? errorId : undefined}
                  className={control}
                >
                  <option value="">{field.placeholder || "Select one"}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30"
        >
          {submitLabel}
        </button>

        <p className="text-xs text-neutral-500">
          <span className="text-amber-600">*</span> Required
        </p>
      </div>

      <p role="status" aria-live="polite" className="min-h-5 text-sm text-neutral-600">
        {submitted ? notice : ""}
      </p>
    </form>
  );
};

export default ContactForm;
