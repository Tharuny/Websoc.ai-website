import React, { useEffect } from 'react';
import gsap from 'gsap/all';
import SplitTextJS from 'split-text-js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VerticalTextScroll = () => {
    useEffect(() => {
        const titles = gsap.utils.toArray('.grid-text-p');
        const tl = gsap.timeline();

        titles.forEach((title) => {
            const splitTitle = new SplitTextJS(title);

            tl
            .from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.02,
                duration: 1,
                ease: "slow",
            }, "<")
            .to(splitTitle.chars, {
                opacity: 0,
                y: -60,
                rotateX: 90,
                stagger: 0.02,
                duration: 1,
                ease: "slow",
                scrollTrigger: {
                    trigger: '.grid-container',
                    start: 'top center', 
                }
            }, "<3");
        });
    }, []);

    return (
        <div className='grid-container' style={{ height: '60vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="grid-text-wrapper" style={{ height: '50vh', width: '100vw', fontFamily: 'Dirtyline', fontSize: '5rem', textAlign: 'center', marginTop: '300px', lineHeight: 0 }}>
                <p className="grid-text-p" style={{ color: 'white' }}>digital marketing</p>
                <p className="grid-text-p" style={{ color: 'white' }}>software support</p>
                <p className="grid-text-p" style={{ color: 'white' }}>web development</p>
                <p className="grid-text-p" style={{ color: 'white' }}>business research</p>
                <p className="grid-text-p" style={{ color: 'yellow' }}>websoc ai</p>
            </div>
        </div>
    );
}

export default VerticalTextScroll
