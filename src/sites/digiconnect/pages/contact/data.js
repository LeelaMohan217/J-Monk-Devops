export const pageHeader = {
  eyebrow: "Contact",
  headingLead: "Get In Touch For Any Questions Or ",
  headingAccent: "Ideas",
  lead: "Where smart strategy, data, and execution come together to deliver measurable business success.",
};

export const formFields = [
  {
    name: "firstName",
    label: "First name",
    required: true,
    autoComplete: "given-name",
    placeholder: "John",
  },
  {
    name: "lastName",
    label: "Last name",
    required: true,
    autoComplete: "family-name",
    placeholder: "Doe",
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
    name: "subject",
    label: "Subject",
    required: true,
    placeholder: "Type of Project",
  },
  {
    name: "company",
    label: "Company",
    required: true,
    placeholder: "Company Name",
    full: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "What are you building, and where are you stuck?",
    full: true,
  },
];
