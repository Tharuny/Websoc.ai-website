import React, { useLayoutEffect } from "react";
import "../styles/Hero.css";
import { useRouter } from "next/navigation";


const Hero = () => {

  const router = useRouter();

  return (
    <div className="flex flex-col  gap-[3vh] w-[100vw] h-[92vh] text-8xl text-center navBar">
      <div className="flex flex-col items-center space-x-2 w-[100vw] h-[30vh] mt-[10vh] mb-[5vh] heroHeader">
        <span className="font-dirtyline">
        services
          <br /> we provide
        </span>
      </div>
      <div className="text-center w-[100vw] h-[20vh] mb-[5vh] heroDescription">
        <p className=" font-Altform tracking-normal text-lg text-gray-300  mx-auto w-[40%]">
          A well-designed SaaS product is like a silent partner, seamlessly empowering businesses to 
          scale and thrive in a digital world.
        </p>
      </div>
      <div className="flex justify-center w-[100vw] h-[12vh] px-10 mb-[10vh] heroButton">
        <button onClick={() => router.push('/contact')}  className="border-2 border-[#9be3e1] bg-[#9be3e1] rounded-[40px] w-[12vw] h-[10vh] text-[#121315] lg:text-xl font-Altform">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Hero;
