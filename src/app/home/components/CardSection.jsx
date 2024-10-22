import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import '../styles/CardSection.css'

const CardSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = window.matchMedia('(min-width: 200px)'); 

    if(mediaQuery.matches){
      gsap.fromTo(
        ".cardLeft1",
        { x: -300, y: -100, rotate: -30, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, duration: 10, ease: "slow", 
          scrollTrigger: { trigger: ".cardLeft1", start: "top 70%", end: "bottom 80%", scrub: true } 
        }
      );
      gsap.fromTo(
        ".cardRight1",
        { x: 300, y: 100, rotate: 30, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, duration: 10, ease: "slow", 
          scrollTrigger: { trigger: ".cardRight1", start: "top 70%", end: "bottom 80%", scrub: true } 
        }
      );
      gsap.fromTo(
        ".cardLeft2",
        { x: -300, y: -100, rotate: -30, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, duration: 5, ease: "slow", 
          scrollTrigger: { trigger: ".cardLeft2", start: "top 70%", end: "bottom 80%", scrub: true } 
        }
      );
      gsap.fromTo(
        ".cardRight2",
        { x: 300, y: 100, rotate: 30, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, duration: 5, ease: "slow", 
          scrollTrigger: { trigger: ".cardRight2", start: "top 70%", end: "bottom 80%", scrub: true } 
        }
      );
    }
  });

  return (
    <div style={{ marginBottom: "150px" }}>
      <div
        className="topCardSection"
        style={{
          display: "flex",
          gap: "3%",
          color: "black",
        }}
      >
        <div
          className="cardLeft1"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            paddingTop: "35px",
            marginLeft: "8%",
            backgroundColor: "#f74421",
          }}
        >
          <div className="countplus" style={{ fontFamily: "DM Mono" }}>
            <span style={{ marginLeft: "12%", fontSize: "100px" }}>50</span>
            <span style={{ fontSize: "50px" }}>+</span>
          </div>
          <span className="lg:text-2xl md:text-xl"
            style={{
              marginLeft: "50%",
              marginRight: "10%",
              fontFamily: "Dirtyline",
              textAlign: "right",
              transform: "0.5s",
            }}
          >
            projects<br />
          </span>
        </div>
        <div
          className="cardRight1"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            paddingTop: "35px",
            marginRight: "8%",
            marginTop: "120px",
            backgroundColor: "#e0eeee",
          }}
        >
          <div className="countplus" style={{ fontFamily: "DM Mono" }}>
            <span style={{ marginLeft: "12%", fontSize: "100px" }}>30</span>
            <span style={{ fontSize: "50px" }}>+</span>
          </div>
          <span className="lg:text-2xl md:text-xl dmservices"
            style={{
              marginLeft: "50%",
              marginRight: "10%",
              fontFamily: "Dirtyline",
              textAlign: "right",
            }}
          >
            digital marketing
            <br />
            services
          </span>
        </div>
      </div>
      <div className="bottomCardSection" style={{ display: "flex", gap: "5%", color: "black" }}>
        <div
          className="cardLeft2"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            paddingTop: "35px",
            marginLeft: "8%",
            backgroundColor: "#a5cec4",
          }}
        >
          <div className="countplus" style={{ fontFamily: "DM Mono" }}>
            <span style={{ marginLeft: "12%", fontSize: "100px" }}>20</span>
            <span style={{ fontSize: "50px" }}>+</span>
          </div>
          <span className="lg:text-2xl md:text-xl"
            style={{
              marginLeft: "50%",
              marginRight: "10%",
              fontFamily: "Dirtyline",
              textAlign: "right",
            }}
          >
            developers
            <br />
          </span>
        </div>

        <div
          className="cardRight2"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            paddingTop: "35px",
            marginRight: "8%",
            marginTop: "120px",
            backgroundColor: "#ebdf51",
          }}
        >
          <div className="countplus" style={{ fontFamily: "DM Mono" }}>
            <span style={{ marginLeft: "12%", fontSize: "100px" }}>10</span>
            <span style={{ fontSize: "50px" }}>+</span>
          </div>
          <span className="lg:text-2xl md:text-xl"
            style={{
              marginLeft: "50%",
              marginRight: "10%",
              fontFamily: "Dirtyline",
              textAlign: "right",
            }}
          >
            years of
            <br />
            experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
