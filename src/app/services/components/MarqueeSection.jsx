import React, { useEffect, useRef } from 'react';
import '../styles/MarqueeSection.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeSection = () => {
  const marqueeScrollRef1 = useRef(null);
  const marqueeAnimateRef1 = useRef(null);
  const marqueeScrollRef2 = useRef(null);
  const marqueeAnimateRef2 = useRef(null);

  useEffect(() => {
    const marqueeContainer1 = marqueeScrollRef1.current;
    const marqueeAnimate1 = marqueeAnimateRef1.current;
    const marqueeContainer2 = marqueeScrollRef2.current;
    const marqueeAnimate2 = marqueeAnimateRef2.current;

    const cloneMarquee1 = marqueeAnimate1.cloneNode(true);
    marqueeContainer1.append(cloneMarquee1);
    const cloneMarquee2 = marqueeAnimate2.cloneNode(true);
    marqueeContainer2.append(cloneMarquee2);

    const width1 = parseInt(
      getComputedStyle(marqueeAnimate1).getPropertyValue('width')
    );
    const width2 = parseInt(
      getComputedStyle(marqueeAnimate2).getPropertyValue('width')
    );

    const gap = 16;
    const distanceToTranslate1 = -1 * (gap + width1);
    const distanceToTranslate2 = -1 * (gap + width2);

    let t1 = gsap.timeline({ repeat: -1 });
    let t2 = gsap.timeline({ repeat: -1 });

    t1.fromTo(
      marqueeContainer1.children,
      {
        x: 0,
      },
      {
        x: distanceToTranslate1,
        duration: 15,
        ease: 'none',
      }
    );
    t2.fromTo(
      marqueeContainer2.children,
      {
        x: distanceToTranslate2,
      },
      {
        x: 0,
        duration: 15,
        ease: 'none',
      }
    );

    t1.play();
    t2.play();

    ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction === -1) {
            t1.reverse();
            t2.reverse();
          } else {
            t1.play();
            t2.play();
          }
        },
      });
  }, []);

    
  return (
    <div>
      <section className="spacerMarquee"></section>
      <div className="marqueeseperator">
        <section className="marquee1" ref={marqueeScrollRef1}>
          <div className="marquee__inner1" ref={marqueeAnimateRef1}>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/html5.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/css3.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/js.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/figma.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/bootstrap.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/html5.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/css3.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/js.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/figma.svg" alt="" />
            </div>
            <div className="marquee__part1">
              <img src="/images/marqueelogo/bootstrap.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="marquee2" ref={marqueeScrollRef2}>
          <div className="marquee__inner2" ref={marqueeAnimateRef2}>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/react.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/angular.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/nodejs.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/nextjs.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/tailwindcss.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/react.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/angular.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/nodejs.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/nextjs.svg" alt="" />
            </div>
            <div className="marquee__part2">
              <img src="/images/marqueelogo/tailwindcss.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
      <section className="spacerMarquee"></section>
    </div>
  );
};

export default MarqueeSection;