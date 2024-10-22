import React, { useEffect, useRef } from "react";
import "../styles/MarqueeSection.css";


const MarqueeSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    let elWidth = titleRef.current.offsetWidth;
    let windowWidth = window.innerWidth;
    let mouseX = 0;
    let prevMouseX = 0;
    let skewTarget = 0;
    let translateTarget = 0;
    let skewWithEasing = 0;
    let translateWithEasing = 0;
    const skewEasingFactor = 0.1;
    const translateEasingFactor = 0.05;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
    };

    const handleWindowResize = () => {
      elWidth = titleRef.current.offsetWidth;
      windowWidth = window.innerWidth;
    };

    const lerp = (start, end, factor) => {
      return (1 - factor) * start + factor * end;
    };

    const animateMe = () => {
      skewTarget = mouseX - prevMouseX;
      prevMouseX = mouseX;
      translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -1;

      skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);
      skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

      translateWithEasing = lerp(
        translateWithEasing,
        translateTarget,
        translateEasingFactor
      );

      if (titleRef.current) {
        titleRef.current.style.transform = `translateX(${translateWithEasing}px) skewX(${skewWithEasing}deg)`;
      }

      // titleRef.current.style.transform = `translateX(${translateWithEasing}px) skewX(${skewWithEasing}deg)`;

      window.requestAnimationFrame(animateMe);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);
    window.requestAnimationFrame(animateMe);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
    <div className="marqueeBody">
      <div className="marqueeContainer">
        <p className="marqueeTitle" ref={titleRef}>
          AI Will replace your jobs unless you 💡 learn to co-exist with it *
        </p>
      </div>
    </div>
    <div className="flex   justify-center mb-[10vh] heroButton">
          <button className="border-2 border-[#9be3e1] bg-[#9be3e1] rounded-[40px] w-[10vw] h-[10vh] text-[#121315] lg:text-xl font-Altform buttonsize">
            <a href="https://forms.gle/USy8WW8F5kB9f1Ve9" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </button>
    </div>
    </>
  );
};

export default MarqueeSection;
