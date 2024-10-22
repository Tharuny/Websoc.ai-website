import React, { useEffect, useState } from 'react'
import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import '../styles/ImageStack.css'
import { useRouter } from 'next/navigation';

const ImageStack = () => {

	const [viewMoreIndex, setViewMoreIndex] = useState(-1);

	const router = useRouter();

    useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);

		const mediaQuery = window.matchMedia('(min-width:1024px)'); 

		if(mediaQuery.matches){
			const details = gsap.utils.toArray(".details:not(:first-child)")
			gsap.set(".photo:not(:first-child)", {opacity:1, scaleY: 0 , y: 600, transformOrigin: "bottom top"})
			details.forEach((detail, index)=> {
				let headline = detail.querySelector("h1");
				const animation = gsap.to(".photo:not(:first-child)", {
					trigger: headline,
					opacity:1, 
					scale:1, 
					y:0,
					duration:15, 
					stagger:15,
					start: "top top",
					transformOrigin: "bottom top",
					markers:true
				})
				ScrollTrigger.create({
					trigger:".gallery",
					start:"top 20%",
					scrub:1,
					end:"bottom 80%",
					pin:"right",
					animation: animation,
					scrub:true,
				})
			})
		}

		const handleViewMore = (index) => {
			setViewMoreIndex(index);
		};

	},[]);

	const handleClick = (clickParam) => {
		router.push(`/productreveal?myParam=${clickParam}`);
	}

	return (
		<>
		<div className="mobileImgStackHeader font-dirtyline">products & services</div>
		<div className="gallery">
			<div className="left">
				<div className="detailsWrapper">
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Large Language Models</h1>
					</div>
					<div className="text  font-Altform">
						<p>We leverage both closed-source and open-source language models to power our products, 
							pushing the boundaries of natural language processing and reasoning. 
							Our dedicated team of experts also specializes in crafting custom models, 
							meticulously tailored to meet unique user requirements and create unmatched performance 
							in our AI-driven solutions.</p>
						<button onClick={ ()=>{
							handleClick("LLMs")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Agents</h1>
					</div>
					<div className="text  font-Altform">
						<p>AI agents are designed to enhance your daily life. These intelligent entities act as virtual assistants, offering services such as AI tutoring, automated grading, and content curation. Built on sophisticated mechanisms, they adapt to user behavior, provide personalized and efficient interactions.</p>
						<button onClick={ ()=>{
							handleClick("Agents")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Hospital Management Software</h1>
					</div>
					<div className="text  font-Altform">
						<p>Transform the way hospitals operate with our industry-leading management software. From
							seamless appointment scheduling to efficient billing management, our solution improves patient
							care while optimizing resource utilization. Learn how our comprehensive platform supports
							operational excellence.</p>
						<button onClick={ ()=>{
							handleClick("HMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Learning Management System</h1>
					</div>
					<div className="text  font-Altform">
						<p>LMS is a software tool that allows you to create, deliver, and report on training courses and programs. There are many LMSs to choose from, each offering different features and capabilities.</p>
						<button onClick={ ()=>{
							handleClick("LMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Omni Channel Chat</h1>
					</div>
					<div className="text  font-Altform">
					<p>Omnichannel marketing is the integration and cooperation of the various channels organizations use to interact with consumers, with the goal of creating a consistent brand experience. </p>
						<button onClick={ ()=>{
							handleClick("OCC")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline  font-Altform">
						<h1>Charger Management System</h1>
					</div>
					<div className="text  font-Altform">
						<p>Charging management system is an end-to-end software solution for managing EV charging operations, EV charging billing, energy management, EV driver management, and EV Fleet management.</p>
						<button onClick={ ()=>{
							handleClick("CMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs  font-Altform stackButton">View More</button>
					</div>
				</div>
				</div>
			</div>

			<div className="right" style={{ position: 'sticky', width: '50%', top: '0' }}>
				<div className="photos">
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/llm.png" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/agent.png" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/hms.jpeg" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/lms.png" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/occ.png" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
						<img src="/images/stackimages/cms.png" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
					</div>
					
				</div>
			</div>
		</div>
  </>
  )
}

export default ImageStack
