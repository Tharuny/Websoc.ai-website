import Footer from "@/app/home/components/footer";
import React, { useState, useEffect } from "react";
import "../styles/ContactUsPage.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    description: "",
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/contactForm',formData);
      console.log(response.data);
      alert("submitted successfully");
      console.log("submitted successfully");
      setFormData({ name: "", email: "", phone: "", organization: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form mt-8 mx-auto w-70 p-8 bg-[#171717] rounded-lg shadow-md ml-12">
        <div className="flex justify-between mb-4 headingTimeDiv">
          <h2 className="text-[50px] font-semibold font-Altform mb-5 ml-4">
            Saying Hello!
          </h2>
          {isClient && (
            <p className="text-xl font-dune-rise mr-20 mt-8 timePadding">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#171717] ">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#9be3e1]"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 inputArea  rounded-md bg-[#1a1a1a] focus:outline-[#9be3e1] "
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#9be3e1] font-Altform"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 inputArea bg-[#1a1a1a] rounded-md focus:outline-[#9be3e1]"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-[#9be3e1] font-Altform"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 inputArea bg-[#1a1a1a] rounded-md focus:outline-[#9be3e1]"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label
                htmlFor="organization"
                className="block text-lg font-medium text-[#9be3e1] font-Altform"
              >
                Company/Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="mt-1 p-2 inputArea bg-[#1a1a1a] rounded-md focus:outline-[#9be3e1]"
                placeholder="Ex: Websoc.ai"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-[#9be3e1] font-Altform"
            >
              Tell us about yourself
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 textArea bg-[#1a1a1a]  rounded-md focus:outline-[#9be3e1]"
              placeholder="Ex: Hey! Websoc.ai we need our website to be made by the best in the Industry."
            />
          </div>
          <div className="mt-4 text-center heroButton">
            <button
              type="submit"
              className="border-2 border-[#9be3e1] rounded-[40px] w-full md:w-[210px] h-[62px] text-[#9be3e1] text-2xl font-Altform contactBtn "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
