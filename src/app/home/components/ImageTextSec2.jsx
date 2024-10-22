import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
// import SplitText from "gsap-trial/SplitText";

const VerticalScrollingSection2 = ({ image, alt, heading, description }) => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Animation for image container
    gsap.fromTo(
      `#section-${heading} .image-container2`,
      { x: "130%" },
      {
        x: "0%", 
        duration:5,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
          trigger: `#section-${heading}`,
          start: "top 60%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );

    // Animation for text container
    gsap.fromTo(
      `#section-${heading} .text-container2`,
      {
        y: "50%",
        opacity: 0.3,
      },
      {
        y: "20%",
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: `#section-${heading}`,
          start: "top 60%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, [heading, description]);

  return (
    <>
      <div
        id={`section-${heading}`}
        className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 md:p-16 mt-4 mb-24"
      >
        <div className="w-full md:w-1/2 m-6 text-container2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h2>
          <p className="imgDes2 text-white leading-relaxed">{description}</p>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 image-container2 shadow-2xl">
          <img
            src={image}
            alt={alt}
            className="w-full h-auto md:max-w-full md:max-h-full md:object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default VerticalScrollingSection2;
