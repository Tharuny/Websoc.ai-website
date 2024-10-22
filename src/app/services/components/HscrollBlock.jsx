import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import '../styles/HscrollBlock.css'
import SplitType from 'split-type'

const HscrollBlock = () => {

    const scroller = useRef();
    const skills = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

      const mediaQuery = window.matchMedia('(min-width: 768px)');

      if(mediaQuery.matches){

        let skillSet = gsap.utils.toArray(".skill-set");
    
        let to = gsap.to(skillSet, {
          xPercent: () => -50 * (skillSet.length - 1),
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

        const splitTypes = document.querySelectorAll('.hscrollBlockTitle');
        const splitTypesDes = document.querySelectorAll('.hscrollBlockDescription');
        splitTypes.forEach((char, i) => {

        const text = new SplitType(char, { type: 'char' });

        gsap.fromTo(text.chars,
          {   
              scaleY: 0,
              opacity:0.5,
              transformOrigin: 'top'
          },
          {
              scaleY: 1,
              opacity:1,
              ease:"slow",
              duration: 5,
              scrollTrigger: {
                  trigger: char,
                  start: 'top 80%',
                  end: 'bottom 82%',
                  scrub: true,
                  toggleActions: 'play play reverse reverse'
              }
          });
        });
        splitTypesDes.forEach((char, i) => {

          const text = new SplitType(char, { type: 'char' });
  
          gsap.fromTo(text.chars,
            {   
                scaleY: 0,
                transformOrigin: 'top'
            },
            {
                scaleY: 1,
                ease:"slow",
                duration: 5,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'bottom 82%',
                    scrub: true,
                    toggleActions: 'play play reverse reverse'
                }
            });
          });
    
        return () => {
          to.kill();
        };
      }
      }, []);

  return (
    <div>
      <div className="overflow-hidden flex items-center">
      <div className="overflow-hidden font-Altform">
        <div
          id="skills" ref={scroller}   className="hscrollOuterBlock flex overflow-x-hidden text-white w-[100vw] m-0  h-screen"          >
          <section ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
            <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "2px solid white", borderRadius: "20px" }}>
                <div className="hscrollBlockTitle" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "2rem"}}>
                    <h1>1.</h1>
                    <h1>Research and Planning</h1>
                </div>
                <div className="hscrollBlockDescription" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "1.5rem", top: "0%"}}>
                    <span>Project Planning</span>
                    <span>Expectations Setting</span>
                    <span>Competitor Analysis</span>
                    <span>Digital Strategy</span>
                    <span>UX Research</span>
                </div>
            </div>
          </section>

          <section ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
            <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "2px solid white", borderRadius: "20px" }}>
                <div className="hscrollBlockTitle" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "2rem"}}>
                    <h1>2.</h1>
                    <h1>Creativity and UX Design</h1>
                </div>
                <div className="hscrollBlockDescription" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "1.5rem", top: "0%"}}>
                    <span>Visual Moodboards</span>
                    <span>UI Design</span>
                    <span>UX Design</span>
                    <span>Interaction Design</span>
                    <span>Design System</span>
                </div>
            </div>
          </section>

          <section ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
            <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "2px solid white", borderRadius: "20px" }}>
                <div className="hscrollBlockTitle" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "2rem"}}>
                    <h1>3.</h1>
                    <h1>Technology and Development</h1>
                </div>
                <div className="hscrollBlockDescription" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "1.5rem", top: "0%"}}>
                    <span>Web Development</span>
                    <span>Front-end Development</span>
                    <span>CMS Integrations</span>
                    <span>SAAS Implementation</span>
                </div>
            </div>
          </section>

          <section ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
            <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "2px solid white", borderRadius: "20px" }}>
                <div className="hscrollBlockTitle" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "2rem"}}>
                    <h1>4.</h1>
                    <h1>Testing and Launch</h1>
                </div>
                <div className="hscrollBlockDescription" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "1.5rem", top: "0%"}}>
                    <span>Usability testing</span>
                    <span>Performance testing</span>
                    <span>Functionality testing</span>
                    <span>Security testing</span>
                    <span>Integration testing</span>
                </div>
            </div>
          </section>

          <section ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
            <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "2px solid white", borderRadius: "20px" }}>
                <div className="hscrollBlockTitle" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "2rem"}}>
                    <h1>5.</h1>
                    <h1>Evaluate and Evolve</h1>
                </div>
                <div className="hscrollBlockDescription" style={{ display: "flex", padding: "25px", flexDirection: "column", fontSize: "1.5rem", top: "0%"}}>
                    <span>Reviews</span>
                    <span>Website optimisation</span>
                    <span>3rd Party Evaluation</span>
                    <span>Server performance</span>
                    <span>Improvement</span>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HscrollBlock
