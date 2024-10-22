import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DoubleImageSection.css";

const DoubleImageSection = () => {
  let r1 = useRef(null);
  let r2 = useRef(null);
  let r3 = useRef(null);
  let r4 = useRef(null);
  let r5 = useRef(null);
  let r6 = useRef(null);
  let rCenterDiv = useRef(null);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(min-width: 768.01px)'); 
    gsap.registerPlugin(ScrollTrigger);

		if(mediaQuery.matches){

      const tl = gsap.timeline({ scrollTrigger: { trigger: r1.current, start: "top 60%", end: "bottom top", scrub: true, duration: 25 }});

      tl.fromTo(r1.current, 
        { y: 0, x: 0 }, 
        { y: "25%", x: "-50%", rotation: -45, ease: "power1.out" }, 
      0);
      tl.fromTo(r2.current, 
        { y: 0, x: 0 }, 
        { y: "25%", x: "50%", rotation: 45, ease: "power1.out" }, 
      0);

      const t2 = gsap.timeline({ scrollTrigger: { trigger: r3.current, start: "top 110%", end: "bottom top", scrub: true, duration: 20 } });
      t2.fromTo(r3.current, 
        { y: 0, x: 0 }, 
        { y: 0, x: "-50%", rotation: -45, ease: "power1.out" }, 
      0);
      t2.fromTo(r4.current, 
        { y: 0, x: 0 }, 
        { y: 0, x: "50%", rotation: 45, ease: "power1.out" }, 
      0);

      const t3 = gsap.timeline({ scrollTrigger: { trigger: r5.current, start: "top 130%", end: "bottom top", scrub: true, duration: 10 } });
      t3.fromTo(r5.current, 
        { y: 0, x: 0 }, 
        { y: 0, x: "-50%", rotation: -30, ease: "power1.out" }, 
      0);
      t3.fromTo(r6.current, 
        { y: 0, x: 0 }, 
        { y: 0, x: "50%", rotation: 30, ease: "power1.out" }, 
      0);

      const tCenter = gsap.timeline({ scrollTrigger: { trigger: rCenterDiv.current, start: "top 85%", end: "bottom 85%", scrub: true, duration:6, transformOrigin: "bottom top" } });
      tCenter.fromTo(rCenterDiv.current, { opacity: 0, y: "70%" }, { opacity: 1, y: 0 }, 0);
      
    }else{

        const tl = gsap.timeline({ scrollTrigger: { trigger: r1.current, start: "top bottom",end:"bottom top", scrub: true, duration: 30 }});
        tl.fromTo(r1.current, 
          { x: 10 }, 
          { x: -40, ease: "slow" }, 
        0);
        tl.fromTo(r2.current, 
          { x: -1 }, 
          { x: 40, ease: "slow" }, 
        0);

        const t2 = gsap.timeline({ scrollTrigger: { trigger: r3.current, start: "top bottom", end: "bottom top", scrub: true, duration: 30 } });
        t2.fromTo(r3.current, 
          { x: 10 }, 
          { x: -40, ease: "slow" }, 
        0);
        t2.fromTo(r4.current, 
          { x: -10 }, 
          { x: 40, ease: "slow" }, 
        0);

        const t3 = gsap.timeline({ scrollTrigger: { trigger: r5.current, start: "top bottom", end: "bottom top", scrub: true, duration: 30 } });
        t3.fromTo(r5.current, 
          { x: 10 }, 
          { x: -40, ease: "slow" }, 
        0);
        t3.fromTo(r6.current, 
          { x: -10 }, 
          { x: 40, ease: "slow" }, 
        0);
    }
  }, []);

  return (
    <div style={{  marginBottom: "10%" }}>

     <div className="flex w-full justify-center ">
        <div ref={rCenterDiv} className="relative flex flex-col items-center doubleImgMidSection">
          <img
            src="/images/websoc-noBg.png"
            className="w-[120px] h-[75px]"
            alt=""
          />
          <p className="text-center mt-4 overflow-hidden w-[400px] font-Altform text-xl">
            Design is not just what it looks like and 
            <br />feels like. Design is how it works.
          </p>
        </div>
      </div> 

      <div className="flex doubleImgSection1">
        <img
          ref={r1}
          src="/images/dribbble1.webp"
          className="md:object-cover rounded-3xl shadow-2xl"
          alt=""
        />
        <img
          ref={r2}
          src="/images/dribbble2.webp"
          className="md:object-cover rounded-3xl shadow-2xl"
          alt=""
        />
      </div>

      <div className="flex doubleImgSection2">
        <img
          ref={r3}
          src="/images/dribbble3.webp"
          className="md:object-cover rounded-2xl shadow-2xl "
          alt=""
        />
        <img
          ref={r4}
          src="/images/dribbble4.webp"
          className="md:object-cover rounded-2xl shadow-2xl "
          alt=""
        />
      </div>

      <div className="flex doubleImgSection3">
        <img
          ref={r5}
          src="/images/dribbble5.webp"
          className="md:object-cover rounded-2xl shadow-2xl "
          alt=""
        />
        <img
          ref={r6}
          src="/images/dribbble6.webp"
          className="md:object-cover rounded-2xl shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default DoubleImageSection;
