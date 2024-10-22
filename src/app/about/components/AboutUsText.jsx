import React from "react";
import "../styles/AboutUsPage.css";

const AboutUsText = () => {
  return (
    <>  
      <div>
        <h1 className="title lg:ml-[5%] font-dirtyline">about</h1>
      </div>
      {/* Section 1 */}
      <div className="w-[100vw] h-[100vh] footerMargin font-Altform">
        <div className="lg:w-3/5 lg:ml-[5%] mt-[2%] relative">
          <div className="mb-4 lg:mb-0 pb-[25px] ">
            <h2 className="lg:text-3xl md:text-3xl sm:text-3xl text-2xl ">
              Embracing the journey, we cater to every need, collaborating to
              pave the road for our diverse creative services to flourish in the
              business jungle. We are the roaring digital agency, boldly
              navigating the entire digital spectrum, from user research to
              branding, development, and evaluation.
            </h2>
          </div>
        </div>

        {/* Section 2 */}
        <div className="lg:w-full lg:text-left lg:mt-[3%] flex flex-col lg:flex-row gap-[30%]">
          <div className="lg:flex lg:justify-center lg:w-auto lg:ml-[5%] lg:mt-[12px] md:mb-10 sm:mb-10">
            <button className="border-2 border-[#9be3e1] rounded-[40px] md:w-[210px] h-[62px]  text-[#9be3e1] text-2xl  mx-auto smallScreenBtn heroButton">
              Click me
            </button>
          </div>

          <div className="lg:w-full lg:mb-[3%] mx-[5%]">
            <div className="mb-4 lg:mb-0">
              <p className="text-xl pb-[20px]">
                Infused with the lion's determination, we partner intimately
                with clients, exploring their lofty goals and subtle nuances,
                adeptly shifting from the theoretical to the pragmatic, bringing
                their vision to fruition.
              </p>
            </div>
            <div>
              <p className="text-xl ">
                We meticulously craft Web Interfaces, Brands, IOS and Android
                application designs, and bespoke Web solutions, Content
                management, and e-commerce development, bringing their vision to
                life with a roar of creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsText;
