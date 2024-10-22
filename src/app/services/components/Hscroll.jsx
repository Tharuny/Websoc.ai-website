import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../styles/Hscroll.css";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });

    const splitTypes = document.querySelectorAll(".ourClients");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { type: "char" });
      gsap.fromTo(
        text.chars,
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        {
          scaleY: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: char,
            start: "top 65%",
            end: "bottom 90%",
            scrub: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    gsap.fromTo(
      ".ourClients",
      {
        x: 400,
        y: 35,
        top: "10rem",
      },
      {
        x: 600,
        y: -50,
        fontSize: "1.5rem",
        top: "5rem",
        opacity: 0.3,
        ease: "slow",
        duration: 7,
        scrollTrigger: {
          trigger: ".ourClients",
          scrub: true,
          start: "top 30%",
        },
      }
    );

    gsap.fromTo(
      ".divline",
      {
        height: "0.25rem",
      },
      {
        height: "2rem",
        ease: "slow",
        duration: 5,
        scrollTrigger: {
          trigger: ".divline",
          scrub: true,
          start: "top 45%",
        },
      }
    );

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className="flex overflow-x-hidden text-white w-[400vw] m-0 relative h-screen"
        >
          <section className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="divline h-1"></div>
            <div className="m-auto text-9xl ourClients">
              our <br /> clients
            </div>
          </section>

          <section className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="blockline w-3 h-[100%]"></div>
            <div className="blockdiv w-[50%] h-[100%]"></div>
            <div className="m-auto text-9xl client-name">
              <p>labl</p>
            </div>
          </section>
          <section className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="blockline w-3 h-[100%]"></div>
            <div className="blockdiv w-[50%] h-[100%]"></div>
            <div className="m-auto text-8xl client-name">
              <p>path</p>
            </div>
          </section>
          <section className="skill-set px-12 w-screen h-[100vh] bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="blockline w-3 h-[100%]"></div>
            <div className="blockdiv w-[50%] h-[100%]"></div>
            <div className="m-auto text-8xl client-name">
              <p>lucid</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
