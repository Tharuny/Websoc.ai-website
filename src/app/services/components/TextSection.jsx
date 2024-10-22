import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type'
import '../styles/TextSection.css'

const TextSection = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const splitTypes = document.querySelectorAll('.reveal-type');

            splitTypes.forEach((char, i) => {

                const bg = char.dataset.bgColor
                const fg = char.dataset.fgColor

                const text = new SplitType(char, { type: 'char' });

                gsap.fromTo(text.chars,
                    {
                        color: bg,
                        scaleY: 0,
                        y: -20,
                        transformOrigin: 'top'
                    },
                    {
                        color: fg,
                        scaleY: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.02,
                        scrollTrigger: {
                            trigger: char,
                            start: 'top 60%',
                            end: 'bottom 90%',
                            scrub: false,
                            markers: true,
                            toggleActions: 'play play reverse reverse'
                        }
                    }
                );
            });

        }
    }, []);

    return (
        <div>
            <section className='reveal-type-section'>
                <h1 className='reveal-type'>One-Suite to manage All Your Customers</h1>
            </section>
            <section className='reveal-type-section'>
                <p className="reveal-type" data-bg-color="#cccccc" data-fg-color="teal">software development | crm | one-suite | digital marketing</p>
            </section >
            <section className='reveal-type-section'>
                <p className="reveal-type" data-bg-color="#b6b600" data-fg-color="black">hey there, i am trionn</p>
            </section>
            <section className='reveal-type-section'>
                <p className="reveal-type" data-bg-color="#353535" data-fg-color="red">and i am websoc</p>
            </section>
        </div>
    );
};

export default TextSection;
