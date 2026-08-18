// Copy and field config for the DigiConnect contact page. Contact info
// values themselves are not duplicated here — ContactSection reads them
// straight from digiConnectConfig.footer so there is one source of truth.
export const pageHeader = {
  eyebrow: "Contact",
  heading: "Tell us about the project.",
  lead: "Send a few lines about what you're building or trying to fix, and we'll get back to you directly — no account manager in between.",
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
