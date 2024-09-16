import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
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

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");

    // EmailJS sending process
    emailjs
      .send(
        "service_byleokq", // Replace with your service ID
        "template_156xzue", // Replace with your template ID
        formData,
        "QP1sq9F9h7KcNd9rY" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Your message has been sent successfully!");

          // Reload the page after a delay
          setTimeout(() => {
            window.location.reload();
          }, 500); // 500 milliseconds delay

          // Clear the form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending error:", error);
          setErrorMessage("There was an error sending your message.");
        }
      );
  };

  return (
    <>
      <div className="bg-gradient-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="flex flex-col gap-2 py-14">
            <h2 className="text-2xl font-medium text-red-600">Contact</h2>
            <h1 className="text-6xl font-bold text-neutral-800">
              Get In Touch Today
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 md:pt-8 lg:pt-10 px-8">
        <div className="flex flex-col md:flex-row gap-6 py-6 md:py-10">
          {/* Google Maps Embed */}
          <div className="flex-3 w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.046499755729!2d83.68208387592397!3d18.418528387437985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b0ae0d9b8a6ad%3A0x38bcbd7b3a44f770!2sNarasapuram%20Village%2C%20Ponduru%2C%20Andhra%20Pradesh%20532168!5e0!3m2!1sen!2sin!4v1694363005556!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <div className="bg-white text-black rounded-lg shadow-lg px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 border h-full flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-red-700 mb-4 text-center relative">
                Keep in Touch
              </h2>
              <div className="border-t border-red-700 mb-4 sm:mb-6"></div>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-grow">
                {/* Mobile */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <Phone className="text-red-700 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-red-700 font-semibold text-sm sm:text-base">
                      Mobile:
                    </span>
                  </div>
                  <div className="mt-1 ml-6 sm:ml-8 text-neutral-800 text-sm sm:text-base">
                    +123 456 7890
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-red-700 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-red-700 font-semibold text-sm sm:text-base">
                      Email:
                    </span>
                  </div>
                  <div className="mt-1 ml-6 sm:ml-8 text-neutral-800 text-sm sm:text-base">
                    jaftdevelopers@gmail.com
                  </div>
                </div>

                {/* Address */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-700 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-red-700 font-semibold text-sm sm:text-base">
                      Address:
                    </span>
                  </div>
                  <div className="mt-1 ml-6 sm:ml-8 text-neutral-800 text-sm sm:text-base">
                    1-112c, Narasapuram, Andhra Pradesh, India, 532168
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold mb-4 text-center relative">
          Contact Us
        </h2>
        <div className="w-full border-t border-gray-300 mb-4 px-8"></div>
        <form
          className="w-full max-w-4xl mx-auto my-6 md:my-10 lg:my-12 space-y-4 px-8"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white font-medium mb-1 text-sm sm:text-base"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white font-medium mb-1 text-sm sm:text-base"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-1 text-sm sm:text-base"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-1 text-sm sm:text-base"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your message..."
            />
          </div>
          <div className="flex items-center gap-4 mb-2">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </div>
          {successMessage && (
            <div
              className="text-green-600 font-semibold"
              style={{
                opacity: successMessage ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 font-semibold">{errorMessage}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
