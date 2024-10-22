import React, { useState } from "react";

const faqData = [
  {
    question: "What is the purpose of PandaPay?",
    answer:
      "PandaPay is an e-commerce platform that enables you to easily integrate your existing online store to a large variety of certified payment gateways and plugins. We also offer developer tools and open API's for fully customizable projects.",
  },
  {
    question: "How do I integrate my online store with PandaPay?",
    answer:
      "You can easily integrate your online store with PandaPay by using our certified payment gateways and plugins. We offer a large variety of options to choose from, ensuring a seamless integration process.",
  },
  {
    question: "What developer tools and open API's do you offer?",
    answer:
      "We offer a range of developer tools and open API's for fully customizable projects. This allows you to tailor PandaPay to your specific needs and preferences.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className=" py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium mb-6 text-center text-white mb-5-5 font-Altform">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-[#121315] rounded-lg shadow-md p-4 text-left cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    expanded[index] ? "transform rotate-180" : ""
                  } transition-transform`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expanded[index] && (
                <p className="mt-2 text-white">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
