import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import '../styles/VideoSection.css'

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = window.matchMedia('(min-width: 480px)'); 

    if(mediaQuery.matches){
      gsap.fromTo(
        video,
        {
          y: "-22vh", 
          width: "10vw",
        },
        {
          width: "80vw",
          y: "50vh", // Final y position
          duration: 15,
          scrollTrigger: {
            trigger: ".videosection",
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            // markers:true,
          },
        }
      );
    }
    else{
      gsap.fromTo(
        video,
        {
          y: "-15vh", 
          scale: 0,
          borderRadius: "20rem",
          width: "8vw",
        },
        {
          width: "90vw",
          y: "0vh", 
          scale: 1,
          duration: 4,
          borderRadius: "1rem",
          scrollTrigger: {
            trigger: ".videosection",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            // markers:true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="videosection"
      style={{
        position: "relative",
        width: "90vw",
        height: "140vh",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100vh"
        loop
        playsInline
        autoPlay
        muted
        className="container"
        style={{
          position: "absolute",
          top: 0,
          display: "flex",
          justifyContent: "center",
          borderRadius: "3.3649rem",
        }}
      >
        <source src="/images/intro-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
