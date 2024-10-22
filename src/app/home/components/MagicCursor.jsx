import React, { useEffect } from "react";

const MagicCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".magic-cursor");
    const smoke = document.querySelector(".magic-smoke");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX-10}px`;
      cursor.style.top = `${e.clientY-10}px`;

      smoke.style.left = `${e.clientX - 50}px`; // Adjust the values as needed
      smoke.style.top = `${e.clientY - 50}px`; // Adjust the values as needed
    };

    const addSmoke = () => {
      smoke.style.opacity = "0.5";
    };

    const removeSmoke = () => {
      smoke.style.opacity = "0";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", addSmoke);
    document.addEventListener("mouseleave", removeSmoke);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", addSmoke);
      document.removeEventListener("mouseleave", removeSmoke);
    };
  }, []);

  return (
    <>
      <div className="magic-cursor"></div>
      <div className="magic-smoke"></div>
    </>
  );
};

export default MagicCursor;
