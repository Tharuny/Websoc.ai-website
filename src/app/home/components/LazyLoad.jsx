"use client"
import React, { useEffect, useState } from 'react';

const Lazyload = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading state to false after delay
    }, 1500); // Adjust delay time as needed

    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, []); // Run effect only once on component mount

  return (
    <div>
      {loading && (
        <div id="splash-screen" className="splash-screen" style={{ position: "fixed", zIndex: 1000  }}>
          <div className="lazyload-textcontainer">
            <span>w </span>
            <span>e </span>
            <span>b </span>
            <span>s </span>
            <span>o </span>
            <span>c </span>
            <span>.ai </span>
          </div>
        </div>
      )}

      {/* Render main content when loading is complete */}
      {!loading && (
        <div id="root" className="d-flex flex-column flex-root">
          {/* Your main content goes here */}
        </div>
      )}
    </div>
  );
};

export default Lazyload;
