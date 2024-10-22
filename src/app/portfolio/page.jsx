"use client";

import React from "react";
import Footer from "../home/components/footer";
import Navbar from "../home/components/Navbar";
import { gsap, ScrollTrigger } from "gsap/all";
import Gv from "./components/Gv";
import MotionPath from "./components/MotionPath";
import ScrollToTop from "../home/components/ScrollToTop";

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

const page = () => {
  return (
    <div>
      <Navbar />
      {/* <GridView images={images} /> */}
      {/* <Footer /> */}
      <Gv/>
      {/* <MotionPath /> */}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default page;
