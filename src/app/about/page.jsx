"use client";
import React from "react";
import Navbar from "../home/components/Navbar";
import GridView from "./components/AboutUsGridView";
import AboutUsText from "./components/AboutUsText";
import Footer from "../home/components/footer";

const page = () => {
  const images = [
    { src: "/images/dribbble1.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble2.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble3.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble4.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble5.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble6.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble1.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble2.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble3.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble4.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble5.webp", alt: "Websoc.ai" },
    { src: "/images/dribbble5.webp", alt: "Websoc.ai" },
  ];
  return (
    <div>
      <div>
        <Navbar />
        <AboutUsText />
      </div>
      {/* <div style={{ marginTop: "100px" }}>
        <GridView images={images} />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
