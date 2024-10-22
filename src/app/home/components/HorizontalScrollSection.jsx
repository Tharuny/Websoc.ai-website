"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import '../styles/HorizontalScroll.css'

gsap.registerPlugin(ScrollTrigger);

const HorizontalImageScroll = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex hscrollMainDiv">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0 relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/images/hr1.jpg"
              alt="1st image"
              fill
              className=" m-auto"
            />
            <div className="text-div text-[#000] text-4xl absolute top-[40%] left-[12%] z-10 font-medium text-center">
              DRIVE AI FIRST <br/>INNOVATIONS
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex z-50"
          >
            <Image
              src="/images/hr2.jpg"
              alt="2ndimage"
              fill
              className=" m-auto"
            />
            <div className="text-div text-[#000] text-4xl absolute top-[40%] left-16 z-10 font-medium text-center">
              DEVELOPING TALENT FOR <br/>OUR DIGITAL FUTURE
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/images/hr3.jpg"
              alt="2ndimage"
              fill
              className=" m-auto"
            />
            <div className="text-div text-[#000] text-4xl absolute top-[40%] left-[5%] z-10 font-medium text-center">
              PARTNERING WITH BUSINESS <br/>TO PUT AI TO WORK
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/images/hr4.jpg"
              alt="2ndimage"
              fill
              className=" m-auto"
            />
            <div className="text-div text-[#9BE3E1] text-4xl absolute top-[40%] left-[5%] z-10 font-medium text-center">
              EMPOWERING TALENT <br/>TRANSFORMATIONS
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HorizontalImageScroll;
