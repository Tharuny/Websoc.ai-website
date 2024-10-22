import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import '../styles/DetailedSection.css'

const DetailedSection = () => {

    useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);
        const splitTypes = document.querySelectorAll('.headingDetail');
        splitTypes.forEach((char, i) => {

        const text = new SplitType(char, { type: 'char' });

        gsap.fromTo(text.chars,
          {   
              scaleY: 0,
              y: -20,
              opacity:0,
              transformOrigin: 'bottom'
          },
          {
              scaleY: 1,
              y: 0,
              opacity:1,
              ease:"slow",
              duration: 5,
              scrollTrigger: {
                  trigger: char,
                  start: 'top 80%',
                  end: 'bottom 82%',
                  scrub: true,
                  toggleActions: 'play play reverse reverse',
              }
          });
        });

        const splitTypesDes = document.querySelectorAll('.descriptionDetail');
        splitTypesDes.forEach((char, i) => {

        const text = new SplitType(char, { type: 'char' });

        gsap.fromTo(text.chars,
          {   
              scaleY: 0,
              opacity:0,
              y: -20,
              transformOrigin: 'bottom'
          },
          {
              scaleY: 1,
              opacity:1,
              y: 0,
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

        const splitTypesPoints = document.querySelectorAll('.pointDetail');
        splitTypesPoints.forEach((char, i) => {

        const text = new SplitType(char, { type: 'char' });

        gsap.fromTo(text.chars,
          {   
              scaleY: 0,
              opacity:0,
              y: -20,
              transformOrigin: 'bottom'
          },
          {
              scaleY: 1,
              opacity:1,
              y: 0,
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

    })

  return (
    <>
        <div className="outerDetailBlock" style={{ height: "100vh", width: "100vw", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="detailBlock" style={{ height: "85vh", width: "85vw", background: "#16191b", borderRadius: "15px", display: "flex", justifyContent: "center", padding: "5%" }}>
              <div className="upperDetail" style={{ height: "45vh", width: "40vw", display: "flex", fontFamily: "Dirtyline", fontSize: "5rem" }}>
                  <div className="headingDetail">
                      <h1><span>services</span></h1>
                  </div>
              </div>
              <div className="lowerDetail font-Altform" style={{ height: "45vh", width: "50vw", display: "flex", justifyContent: "right", flexDirection: "column", gap: "30%", fontSize: "1.4rem" }}>
                  <div className="descriptionDetail">
                      <p>Empowering Businesses with Cutting-Edge AI Solutions for Intelligent Growth. We craft user-centric experiences through design, development, and marketing.</p>
                  </div>
                  <div className="pointDetail" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '5px' }}>
                      <span>Large Language Models</span> <br />
                      <span>Agents</span> <br />
                      <span>Digital Marketing Service</span> <br />
                      <span>Software Management Service</span> <br />
                  </div>
              </div>
          </div>
        </div>
        <div className="outerDetailBlock" style={{ height: "100vh", width: "100vw", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="detailBlock" style={{ height: "85vh", width: "85vw", background: "#16191b", borderRadius: "15px", display: "flex", justifyContent: "center", padding: "5%" }}>
                  <div className="upperDetail" style={{ height: "45vh", width: "40vw", display: "flex", fontFamily: "Dirtyline", fontSize: "5rem" }}>
                      <div className="headingDetail">
                          <h1><span>develop <br />ment</span></h1>
                      </div>
                  </div>
                  <div className="lowerDetail font-Altform" style={{ height: "45vh", width: "50vw", display: "flex", justifyContent: "right", flexDirection: "column", gap: "30%", fontSize: "1.4rem" }}>
                      <div className="descriptionDetail">
                          <p>Transforming businesses through innovative AI solutions, one line of code at a time.</p>
                      </div>
                      <div className="pointDetail" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
                          <span>React JS</span> <br />
                          <span>HTML & CSS</span> <br />
                          <span>Next JS</span> <br />
                          <span>Tailwind CSS</span> <br />
                          <span>Node JS</span> <br />
                          <span>GSAP</span> <br />
                          <span>Three JS</span> <br />
                          <span>AWS</span> <br />
                          <span>PostgreSQL</span> <br />
                      </div>
                  </div>
              </div>
        </div>
          </>
    
  )
}

export default DetailedSection
