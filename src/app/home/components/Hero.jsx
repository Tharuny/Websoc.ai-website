import React from "react";
import "../styles/Hero.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[3vh] w-[100vw] h-[92vh] text-8xl text-center navBar">
      <div className="flex flex-col items-center space-x-2 w-[100vw] h-[30vh] mt-[10vh] mb-[5vh] heroHeader">
        <span className="font-dirtyline">
          ai first
          <br /> ai powered
        </span>
      </div>
      <div className="text-center w-[100vw] h-[20vh] mb-[5vh] heroDescription">
        <p className=" font-Altform tracking-normal text-lg text-gray-300  mx-auto w-[50%]">
          WEBSOC.AI is a software company dedicated to crafting AI-powered
          applications that enhance user experiences, specializing in the
          development of enterprise-focused conversational AI and GenAI
          products.
        </p>
      </div>
      <div className="flex justify-between w-[100vw] h-[12vh] px-10 mb-[10vh] heroButton font-Altform">
        <button  onClick={() => router.push('/products')} className="border-2 border-[#9be3e1] text-center rounded-[40px] w-[15vw] h-[10vh] text-[#9be3e1] text-xl mb-4">
          Explore Work
        </button>
        <button onClick={() => router.push('/contact')} className="border-2 border-[#9be3e1] text-center rounded-[40px] w-[15vw] h-[10vh] text-[#9be3e1] text-xl">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
