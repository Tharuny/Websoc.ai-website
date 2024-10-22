"use client";

import React, { useEffect } from "react";
import MagicCursor from "./components/MagicCursor";
import App from "./components/HorizontalScrollSection";
import VerticalScrollingSection from "./components/ImageTextSec1";
import VerticalScrollingSection2 from "./components/ImageTextSec2";
import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "gsap/all";
import VideoPlayer from "./components/VideoSection";
import Hero from "./components/Hero";
import DoubleImgSection from "./components/DoubleImageSection";
import TextReveal from "./components/TextReveal";
import Lazyload from "./components/LazyLoad";
import { myLenis } from "../utils";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ImageStack from "./components/ImageStack";
import CardSection from "./components/CardSection";
import ScrollToTop from "./components/ScrollToTop";

const Page = () => {
  
  myLenis();    

  return (
    <>
    <div className="sectionResponse">
      <Lazyload />
      <MagicCursor />
      <Navbar />

      <Hero />

      <VideoPlayer />
      <TextReveal />
      <CardSection />
      <ImageStack />

      {/* <VerticalScrollingSection2
        image={"images/loftloom-main-landscape.webp"}
        heading={"iMUSIC"}
        description={
          "Founder Ashok Bathu begin work on a software development company in 2014. Initially we established company to develop softwares for clients, while developing softwares to clients we realised that customer management related softwares are rarely available and those softwares which are available are costly, so we taught of developing end to end software suit to manage all the customer needs for companies dealing with huge number of customers."
        }
      />
      <VerticalScrollingSection
        image={"images/loftloom-main-landscape.webp"}
        heading={"LOFTLOOM"}
        description={
          "Founder Ashok Bathu begin work on a software development company in 2014. Initially we established company to develop softwares for clients, while developing softwares to clients we realised that customer management related softwares are rarely available and those softwares which are available are costly, so we taught of developing end to end software suit to manage all the customer needs for companies dealing with huge number of customers. "
        }
      />

      <VerticalScrollingSection2
        image={"/images/technis-main-landscape.webp"}
        heading={"Technis"}
        description={
          "Founder Ashok Bathu begin work on a software development company in 2014. Initially we established company to develop softwares for clients, while developing softwares to clients we realised that customer management related softwares are rarely available and those softwares which are available are costly, so we taught of developing end to end software suit to manage all the customer needs for companies dealing with huge number of customers."
        }
      /> */}

      <DoubleImgSection />

      <App />
      <ScrollToTop />
      <Footer />
      </div>
    </>
  );
};

export default Page;
