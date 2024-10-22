'use client'
import productFeatures from './constants/ProductData.json'
import {gsap, ScrollTrigger } from "gsap/all"
import { Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import './styles/ProductReveal.css'
import { myLenis } from '../utils'
import Footer from "../home/components/footer";
import Navbar from "../home/components/Navbar";
import ScrollToTop from '../home/components/ScrollToTop'

const SearchBar = ()=> {
  myLenis();
  let value = '';
 const params=useSearchParams()
 value=params.get("myParam")
 console.log(value)
 let productObject1;
 let productObject2;
 let productObject3;
 let productObject4;
 if(value==="LLMs")
 {
     var heading1="large language"
     var heading2="models"
     productObject1=productFeatures.LLMs[0];
     productObject2=productFeatures.LLMs[1];
     productObject3=productFeatures.LLMs[2];
     productObject4=productFeatures.LLMs[3];
 }else if(value==="Agents")
 {
     var heading1="ai"
     var heading2="agents"
     productObject1=productFeatures.Agents[0];
     productObject2=productFeatures.Agents[1];
     productObject3=productFeatures.Agents[2];
     productObject4=productFeatures.Agents[3];
 }
 else if(value==="HMS")
 {
     var heading1="hospital management"
     var heading2="system"
     productObject1=productFeatures.HMS[0];
     productObject2=productFeatures.HMS[1];
     productObject3=productFeatures.HMS[2];
     productObject4=productFeatures.HMS[3];
 }
 else if(value==="LMS")
 {
     heading1="learning management"
     heading2="system"
     productObject1=productFeatures.LMS[0];
     productObject2=productFeatures.LMS[1];
     productObject3=productFeatures.LMS[2];
     productObject4=productFeatures.LMS[3];
 }
 else if(value==="CMS")
 {
     heading1="charger management"
     heading2="system"
     productObject1=productFeatures.CMS[0];
     productObject2=productFeatures.CMS[1];
     productObject3=productFeatures.CMS[2];
     productObject4=productFeatures.CMS[3];
 }
 else if(value==="OCC")
 {
     heading1="onmi channel"
     heading2="chat"
     productObject1=productFeatures.OCC[0];
     productObject2=productFeatures.OCC[1];
     productObject3=productFeatures.OCC[2];
     productObject4=productFeatures.OCC[3];
 }
 useEffect(() => {
     // Register GSAP plugins
     gsap.registerPlugin(ScrollTrigger);

     // Animation for section1
     gsap.fromTo(
     ".image-container1",
     {
         x: "280%",
         
     },
     {

         x: "0%",
         duration:10,
         ease: "slow",
         scrollTrigger: {
         trigger:".image-container1",
         start: "top bottom",
         end: "bottom bottom",
         scrub: true,
         markers:false
         },
     }
     );
     gsap.fromTo(
     ".text1",
     {
         y:180,
         opacity: 0,
     },{
         y:0,
         opacity: 1,
         transformOrigin: "bottom",
         duration:10,
         ease: "slow",
         scrollTrigger: {
         trigger:".text1",
         start: "top bottom",
         end: "bottom bottom",
         scrub: true,
         markers:false
         }
     });

     // Animation for section2
     gsap.fromTo(
     ".image-container2",
     {
         x: "-180%",
         
     },
     {

         x: "0%",
         duration:10,
         ease: "slow",
         scrollTrigger: {
         trigger:".image-container2",
         start: "top bottom",
         end: "bottom bottom",
         scrub: true,
         markers:false
         },
     }
     );
     gsap.fromTo(
     ".text2",
     {
         y:100,
         opacity: 0,
     },{
         y:0,
         opacity: 1,
         transformOrigin: "bottom",
         duration:10,
         ease: "slow",
         scrollTrigger: {
         trigger:".text2",
         start: "top bottom",
         end: "bottom bottom",
         scrub: true,
         markers:false
         }
     });
     
     //Animation for section3
     gsap.fromTo(
         ".image-container3",
         {
         x: "180%",
         
         },
         {

         x: "0%",
         duration:10,
         ease: "slow",
         scrollTrigger: {
             trigger:".image-container3",
             start: "top bottom",
             end: "bottom bottom",
             scrub: true,
             markers:false
         },
     });
     
     gsap.fromTo(
         ".text3",
         {
         y:100,
         opacity: 0,
         },{
         y:0,
         opacity: 1,
         transformOrigin: "bottom",
         duration:10,
         ease: "slow",
         scrollTrigger: {
             trigger:".text3",
             start: "top bottom",
             end: "bottom bottom",
             scrub: true,
             markers:false
         }
     });

     
 //Animation for section4
 gsap.fromTo(
 ".image-container4",
 {
     x: "-180%",
     
 },
 {

     x: "0%",
     duration:10,
     ease: "slow",
     scrollTrigger: {
     trigger:".image-container4",
     start: "top bottom",
     end: "bottom 85%",
     scrub: true,
     markers:false
     },
 }
 );
 gsap.fromTo(
 ".text4",
 {
     y:100,
     opacity: 0,
 },{
     y:0,
     opacity: 1,
     transformOrigin: "bottom",
     duration:10,
     ease: "slow",
     scrollTrigger: {
     trigger:".text4",
     start: "top bottom",
     end: "bottom 90%",
     scrub: true,
     markers:false
     }
 });
         
 },[])

 return (
  <>
  <Navbar />
  <div className='sectionResponse'>
     <div className="h-[100vh] flex items-center justify-center font-dirtyline"><h1 className="sm:text-4xl lg:text-6xl text-center hmsHeader">{heading1}<br />{heading2}</h1></div>
     {/* First Section  */}
     <div className='font-Altform'>
       <div className="sectionBlock flex flex-col md:flex-row items-center justify-center p-8 md:p-16 mt-4 ">
         <div className="w-full md:w-1/2 justify-center align-center pr-7 text1">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 headtext">{productObject1.title}</h2>
           <p className="imgDes2 text-white leading-relaxed textsize">{productObject1.description}</p>
         </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 image-container1 sectionImg">
           <img
             src={productObject1.imgUrl}
             className="w-full h-auto md:max-w-full md:max-h-full md:object-cover rounded-2xl" />
         </div>
       </div>
       {/*  second Section  */}
       <div className="sectionBlock sectionReverse flex flex-col md:flex-row items-center justify-center p-8 imgTextContainer">
         <div className="w-full md:w-1/2 image-container2 sectionImg">
           <img
             src={productObject2.imgUrl}
             className="w-full h-auto md:max-w-full md:max-h-full md:object-cover rounded-2xl transform-none" />
         </div>
         <div className="w-full md:w-1/2 text2 pl-10 justify-center align-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 headtext">{productObject2.title}</h2>
           <p className="imgDes text-white leading-relaxed textsize">{productObject2.description}</p>
         </div>
       </div>
       {/*Third Section  */}
       <div className="sectionBlock flex flex-col md:flex-row items-center justify-center p-8 md:p-16 mt-4 ">
         <div className="w-full md:w-1/2 justify-center pr-7 align-center text3">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 headtext">{productObject3.title}</h2>
           <p className="imgDes2 text-white leading-relaxed textsize">{productObject3.description}</p>
         </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 image-container3 shadow-2xl sectionImg">
           <img
             src={productObject3.imgUrl}
             className="w-full h-auto md:max-w-full md:max-h-full md:object-cover rounded-2xl" />
         </div>
       </div>
       {/*Fourth section*/}
       <div className="sectionBlock sectionReverse flex flex-col md:flex-row items-center justify-center p-8 md:p-16 imgTextContainer mb-20">
         <div className="w-full md:w-1/2  image-container4 sectionImg">
           <img
             src={productObject4.imgUrl}
             className="w-full h-auto md:max-w-full md:max-h-full md:object-cover rounded-2xl transform-none md:transform" />
         </div>
         <div className="w-full md:w-1/2 text4 font4 pl-10 justify-center align-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 headtext">{productObject4.title}</h2>
           <p className="imgDes text-white leading-relaxed textsize">{productObject4.description}</p>
         </div>
       </div>
     </div>
   </div>
   <ScrollToTop />
   <Footer />
   </>
    
 )
}
const ProductReveal = () => {  
  return(
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <SearchBar />
    </Suspense>
    </>
  )
}

export default ProductReveal
