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
    emailjs
      .send(
        "service_yo0v2l5", // Updated service ID
        "template_wupcssg", // Updated template ID
        formData,
        "aMTL-Wx9Wf14SxgIv" // Updated user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Your message has been sent successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 500);
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.040106778158!2d80.54094357591748!3d16.44158738862414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a1faeedf0e067%3A0xc9d63f32cbb27ec1!2sDoor%20No.5-69%2C%20Pedaparimi%20Village%2C%20Thullur%20Mandal%2C%20Guntur%20District%2C%20522236%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1694372345678!5m2!1sen!2sin"
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
                    Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur
                    District, 522236, Andhra Pradesh
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
                className="w-full px-3 py-2 md:py-3 border border-gray-400 rounded-full focus:outline-none focus:border-red-500"
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
                className="w-full px-3 py-2 md:py-3 border border-gray-400 rounded-full focus:outline-none focus:border-red-500"
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
              className="w-full px-3 py-2 md:py-3 border border-gray-400 rounded-full focus:outline-none focus:border-red-500"
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
              className="w-full px-3 py-2 md:py-3 border border-gray-400 rounded-3xl focus:outline-none focus:border-red-500 h-28 md:h-36 resize-none"
              placeholder="Write your message here"
            />
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm sm:text-base">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-600 text-sm sm:text-base">
              {successMessage}
            </p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
