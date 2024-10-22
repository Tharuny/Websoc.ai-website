"use client";
import React from "react";
import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "gsap/all";
import Product from "./components/Product";
import ImageStack from "./components/ImageStack";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/footer";
import Hero from "./components/Hero";
import ScrollToTop from "../home/components/ScrollToTop";

const page = () => {
  if (typeof window !== "undefined") {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 700);
    });

    gsap.ticker.lagSmoothing(0);
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <ImageStack />
      {/* <Product/> */}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default page;
