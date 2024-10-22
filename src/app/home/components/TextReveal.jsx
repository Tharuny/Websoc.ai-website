import React, { useEffect } from 'react'
// import { gsap, ScrollTrigger} from 'gsap/all';
// import SplitText from 'gsap-trial/SplitText';

const TextReveal = () => {

     useEffect(() => {
    //     // Register GSAP plugins
    //     gsap.registerPlugin(ScrollTrigger, SplitText);
    //     const text1 = new SplitText(".heading1-reveal", { type: "chars" });
    //     gsap.from(text1.chars, {
    //       opacity: 0.3,
    //       stagger: 2.5,
    //       ease: "slow",
    //       yoyo: true,
    //       duration: 5,
    //       scrollTrigger: {
    //         trigger: ".heading1-reveal",
    //         start: "top center",
    //         end: "bottom 60%",
    //         smooth: true,
    //         scrub: 3,
    //       },
    //     });

    //     const text2 = new SplitText(".heading2-reveal", { type: "chars" });
    //     gsap.from(text2.chars, {
    //       opacity: 0.3,
    //       stagger: 1,
    //       ease: "slow",
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: ".heading2-reveal",
    //         start: "top 70%",
    //         end: "bottom 90%",
    //         smooth: true,
    //         scrub: 3,
    //       },
    //     });
     }, []);

  return (
    <div className='text-heading-reveal'>
      <span className='heading1-reveal'>we help businesses</span>
      <span className='heading2-reveal' style={{ marginTop: "0px" }}>create engaging and</span>
      <span className='heading3-reveal'> valued interactions</span>
    </div>
  )
}

export default TextReveal
