import React, { useEffect } from 'react';
import gsap from 'gsap/all';
// import SplitTextJS from 'split-text-js';
// import SplitText from 'gsap-trial/SplitText';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import '../styles/Grid.css'

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
    // useEffect(() => {
    //         gsap.fromTo(".header-text", 
    //         {
    //             opacity: 0,
    //             stagger: 0.2,
    //             duration: 2,
    //             ease: "slow",
    //         },
    //         {
    //             opacity: 1,
    //             duration: 2,
    //             ease: "slow",
    //             scrollTrigger:{
    //                 trigger: '.heading-text',
    //                 start: 'top center',
    //                 end: 'bottom bottom',
    //             }
    //         })
        
    // }, []);

    return (
        <div className="outside-section">
            <div className="padding-section">
                <div className="container-section">
                    <div className="padding-inside">
                        <div className="text-component">
                            <div className="heading-text">
                                <h1 class="header-text text-align-center">
                                    <span className="gradient-span">Integration</span> across <br /> multiple platforms
                                </h1>
                            </div>
                            <div className="paragraph-text">
                                <p class="para-text text-align-center">
                                    We build the infrastructure of therobotic automation industry. Upgrade any robot - new or old - to the most intuitive user interface.
                                </p>
                            </div>
                            <div className="grid-component">
                                <div className="grid-image">
                                    <img src="images/grid1.svg" alt="" />
                                </div>
                                <div className="grid-image" >
                                    <img src="images/grid2.svg" alt="" />
                                </div>
                                <div className="grid-image">
                                    <img src="images/grid3.svg" alt="" />
                                </div>
                                <div className="grid-image" >
                                    <img src="images/grid4.svg" alt="" />
                                </div>
                                <div className="grid-image">
                                    <img src="images/grid5.svg" alt="" />
                                </div>
                                <div className="grid-image" >
                                    <img src="images/grid6.svg" alt="" />
                                </div>
                                <div className="grid-image">
                                    <img src="images/grid7.svg" alt="" />
                                </div>
                                <div className="grid-image">
                                    <img src="images/grid8.svg" alt="" />
                                </div>
                                <div className="grid-image">
                                    <img src="images/grid9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;
