import { useState } from "react";
import emailjs from "emailjs-com";

export function useContactForm({ serviceId, templateId, publicKey, initialFields }) {
  const [formData, setFormData] = useState(initialFields);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value)) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");
    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 500);
        setFormData(initialFields);
      },
      (error) => {
        console.error("Email sending error:", error);
        setErrorMessage("There was an error sending your message.");
      }
    );
  };

  return { formData, errorMessage, successMessage, handleChange, handleSubmit };
}
