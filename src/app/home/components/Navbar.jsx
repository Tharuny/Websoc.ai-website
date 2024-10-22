"use client";
import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles/Navbar.css"

const Navbar = () => {
  const router=useRouter();
  const t1 = React.useRef(null);
  const menuBlockElement = React.useRef(null);
  const navBlockElement = React.useRef(null);
  
    const handleMenuOpenClick = () =>
    {
      if (!t1.current) {
        t1.current = gsap.timeline({ paused: true, opacity: 0 });
        t1.current.to(menuBlockElement.current, { opacity: 1, duration: 0.4, top: 0 });
        t1.current.to(navBlockElement.current,{opacity:1, duration:0.3, marginTop:0})
      }
      t1.current.play();
    };
  
    const handleMenuCloseClick = () =>
    {
      if (t1.current) {
        t1.current.reverse();
      }
    };
  
    const handleClick=(path)=>{
      if(window.location.pathname===path)
      {
        window.location.reload();
      }
      else
      {
        router.push(`${path}`)
      }
    }

  useEffect(() => {
    const shootingStar = gsap.timeline({ repeat: 0 });

    shootingStar
      .fromTo(
        ".logo",
        { x: -50, y: 0, opacity: 1 },
        { x: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" }
      )
      .to(".logo", {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "bounce.out",
      })
      .to(".logo", { y: 0, duration: 0.5, ease: "bounce.out" });

    return () => {
      shootingStar.kill();
    };
  }, []);

 
  return (
    <nav className="p-4 w-full h-[8vh]">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center ">
          <Transition show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
            <Link href={"/home"}>
              <img className="h-8 w-auto mr-4 logo" src="images/websoc-noBg.png" alt="Logo" />
            </Link>
          </Transition>
          <span className="text-gray-200 hover:text-white text-2xl md:block">
            <Link href={"/home"}>
              <span className="font-dune-rise hidden md:block">WEBSOC.AI</span>
            </Link>
          </span>
        </div>

        <div>
            <button onClick={handleMenuOpenClick} className="text-gray-200 focus:outline-none flex items-center">
            <span className="mr-2  font-dune-rise text-lg hidden md:block">MENU</span>
            <svg className={`h-6 w-6 block`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="fixed inset-0 bg-[#f2f2f2] ml-auto rounded-bl-3xl menuBlock" ref={menuBlockElement}>
          {/* Overlay Content */}
          <div className="flex justify-between p-5 ">
            {/*<span className="font-dune-rise text-3xl p-5">WEBSOC.AI</span> */}
            <button onClick={handleMenuCloseClick}
              className="text-gray-400 text-3xl ml-auto"
            >
              <img src="/images/crossButton.gif" alt="X" className="w-[35px] h-[35px] menuCloseButton" />
            </button>
          </div>
          <div className="m-10 mt-0 w-[100%] linkDiv" ref={navBlockElement}>
            <a onClick={()=>handleClick("/home")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">home</a>
            <a onClick={()=>handleClick("/about")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">about</a>
            <a onClick={()=>handleClick("/services")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">services</a>
            <a onClick={()=>handleClick("/products")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">products</a>
            <a onClick={()=>handleClick("/portfolio")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">portfolio</a>
            <a onClick={()=>handleClick("/contact")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000 hover:ease-in-out hover:text-customHoverColor">contact us</a>
            <a onClick={()=>handleClick("/internship")} className="text-black block  font-dirtyline menuText hover:transition-transform hover:translate-x-5 duration:1000 hover:duration-1000  hover:ease-in-out hover:text-customHoverColor">training & internships</a>
          </div>
        </div>
      </div>

    </nav>
  );
};
 
export default Navbar;