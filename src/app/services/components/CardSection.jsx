import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const CardSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".cardLeft1",
      {
        x: -300,
        y: -100,
        rotate: -30,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".cardLeft1",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".cardRight1",
      {
        x: 300,
        y: 100,
        rotate: 30,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".cardRight1",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".cardLeft2",
      {
        x: -300,
        y: -100,
        rotate: -30,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".cardLeft2",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".cardRight2",
      {
        x: 300,
        y: 100,
        rotate: 30,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".cardRight2",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div style={{ marginBottom: "100px" }}>
      <div
        style={{
          display: "flex",
          gap: "3%",
          color: "black",
          marginTop: "200px",
        }}
      >
        <div
          className="cardLeft1"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "55vh",
            width: "42vw",
            borderRadius: "30px",
            paddingTop: "35px",
            marginLeft: "8%",
            backgroundColor: "#f74421",
          }}
        >
          <div style={{ fontFamily: "DM Mono" }}>
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
            awards &<br />
            recognition
          </span>
        </div>
        <div
          className="cardRight1"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "55vh",
            width: "42vw",
            borderRadius: "30px",
            paddingTop: "35px",
            marginRight: "8%",
            marginTop: "120px",
            backgroundColor: "#e0eeee",
          }}
        >
          <div style={{ fontFamily: "DM Mono" }}>
            <span style={{ marginLeft: "12%", fontSize: "100px" }}>900</span>
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
            projects
            <br />
            completed
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "5%", color: "black" }}>
        <div
          className="cardLeft2"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "55vh",
            width: "42vw",
            borderRadius: "30px",
            paddingTop: "35px",
            marginLeft: "8%",
            backgroundColor: "#a5cec4",
          }}
        >
          <div style={{ fontFamily: "DM Mono" }}>
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
            joey doesn't
            <br />
            share food
          </span>
        </div>

        <div
          className="cardRight2"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "55vh",
            width: "42vw",
            borderRadius: "30px",
            paddingTop: "35px",
            marginRight: "8%",
            marginTop: "120px",
            backgroundColor: "#ebdf51",
          }}
        >
          <div style={{ fontFamily: "DM Mono" }}>
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
