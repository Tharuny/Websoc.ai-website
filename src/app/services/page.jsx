"use client"
import React from 'react'
import Hero from './components/Hero'
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from 'gsap/all';
import Hscroll from './components/Hscroll';
import MarqueeSection from './components/MarqueeSection';
import Grid from './components/Grid';
import { myLenis } from '../utils';
import Navbar from '../home/components/Navbar';
import HscrollBlock from './components/HscrollBlock';
import DetailedSection from './components/DetailedSection';
import Footer from '../home/components/footer';
import ImageStack from '../home/components/ImageStack';
import VerticalTextScroll from './components/VerticalTextScroll';
import ScrollToTop from '../home/components/ScrollToTop';

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
        <div className='sectionResponse'>
            <Navbar />
            <Hero />

            <DetailedSection />
            <HscrollBlock />
            {/* <Grid /> */}
            {/* <VerticalTextScroll /> */}
            <ScrollToTop />
            <MarqueeSection />

            <Footer />
        </div>
    )
}

export default page;
