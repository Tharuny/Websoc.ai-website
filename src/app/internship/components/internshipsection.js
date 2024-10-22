import { useState } from "react";
import "../styles/internshipPage.css"; // Import a separate CSS module

const ECommerce = ({ jobTitle, jobDescription,jobFeaturesHeading, jobFeatures}) => {
  const [isOpen, setIsOpen] = useState(false);

  const features=jobFeatures.map(feature=><li className="font-Altform" style={{marginBottom:"12px"}}>{feature}</li>)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card container mx-auto lg:p-8 font-serif`}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 text-2xl sm:text-3xl lg:text-3xl font-Altform mt-1">
          {jobTitle}
        </div>

        <div className={`col-span-12 lg:col-span-6 sm:col-span-12 md:col-span-12 cardContent ml-20`}>
          <h2
            className="sm:text-xl lg:text-xl mb-4 font-Altform fontHeight"
    
          >
            {jobDescription}
          </h2>

          <div
            className="flex flex-row justify-between items-center border-t-2 cursor-pointer mt-20"
            onClick={toggleDropdown}
          >
            <p className="mb-2 sm:mb-0 font-Altform text-lg">
                {jobFeaturesHeading}
            </p>
            <button
              className={`px-4 py-2 text-white rounded sm:text-4xl lg:text-2xl toggleButton`}
            >
              {isOpen ? "−" : "+"}
            </button>
          </div>

          {isOpen && (
            <div className={`mt-4 features`}>
              <h3 className="text-md sm:text-lg lg:text-xl mb-2 font-Altform">
                {/* Features */}
              </h3>
              <ul className="list-disc list-inside">
                {features}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-12 sm:col-span-3"></div>
      </div>
    </div>
  );
};

export default ECommerce;
