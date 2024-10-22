import React, { useEffect, useState } from "react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../styles/ImageStack.css";
import { useRouter } from "next/navigation";

const ImageStack = () => {

	const [viewMoreIndex, setViewMoreIndex] = useState(-1);

	const router = useRouter();

    useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);

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

		const handleViewMore = (index) => {
			setViewMoreIndex(index);
		};

	},[]);

	const handleClick = (clickParam) => {
		router.push(`/productreveal?myParam=${clickParam}`);
	}

	return (
		<>
		<div className="gallery">
			<div className="left">
				<div className="detailsWrapper">
				<div className="details">
					<div className="headline font-Poppins">
						<h1>Hospital Management Software</h1>
					</div>
					<div className="text font-Altform">
						<p>Transform the way hospitals operate with our industry-leading management software. From
							seamless appointment scheduling to efficient billing management, our solution improves patient
							care while optimizing resource utilization. Learn how our comprehensive platform supports
							operational excellence.</p>
						<button onClick={ ()=>{
							handleClick("HMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline font-Poppins">
						<h1>Learning Management System</h1>
					</div>
					<div className="text font-Altform">
						<p>LMS is a software tool that allows you to create, deliver, and report on training courses and programs. There are many LMSs to choose from, each offering different features and capabilities.</p>
						<button onClick={ ()=>{
							handleClick("LMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline font-Poppins">
						<h1>Omni Channel Chat</h1>
					</div>
					<div className="text font-Altform">
					<p>Omnichannel marketing is the integration and cooperation of the various channels organizations use to interact with consumers, with the goal of creating a consistent brand experience. </p>
						<button onClick={ ()=>{
							handleClick("OCC")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs font-Altform stackButton">View More</button>
					</div>
				</div>
				<div className="details">
					<div className="headline font-Poppins">
						<h1>Charger Management System</h1>
					</div>
					<div className="text font-Altform">
						<p>Charging management system is an end-to-end software solution for managing EV charging operations, EV charging billing, energy management, EV driver management, and EV Fleet management.</p>
						<button onClick={ ()=>{
							handleClick("CMS")
						}} className="border-[1.5px] border-[#9be3e1] mt-4 rounded-[30px] w-full md:w-[7vw] h-[5vh] text-[#9be3e1] text-xs font-Altform stackButton">View More</button>
					</div>
				</div>
				</div>
			</div>

			<div className="right" style={{ position: 'sticky', width: '50%', top: '0' }}>
				<div className="photos">
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<img src="/images/stackimages/hms.jpeg" alt="" />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<img src="/images/stackimages/lms.png" alt="" />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<img src="/images/stackimages/occ.png" alt="" />
					</div>
					<div className="photo red" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<img src="/images/stackimages/cms.png" alt="" />
					</div>
					
				</div>
			</div>
		</div>
  </>
  )
}

export default ImageStack
