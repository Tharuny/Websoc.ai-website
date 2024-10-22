import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const MotionPath = () => {
  useEffect(() => {
    const motionPath = {
      // Define your motion path here
      path: 'M 10 80 Q 52.5 10, 95 80 T 180 80',
      align: 'self'
    };

    gsap.set('.motion-div', { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' });
    gsap.to('.motion-div', {
      duration: 2,
      ease: 'none',
      motionPath,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="motion-div" style={{ marginLeft: '20vw', marginTop: '200vh',height: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center' }}>
      <img src="/images/websocDISection.png" alt="Path Image" width="150" height="150" />
    </div>
  );
};

export default MotionPath;
