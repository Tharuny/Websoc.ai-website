import React from "react";
import Image from "next/image";

const ImageView = ({ image, onClose }) => {
  // Disable scrolling when the detailed view is open
  const bodyStyle = document.body.style;
  bodyStyle.overflow = "hidden";

  // Re-enable scrolling when the detailed view is closed
  const enableScrolling = () => {
    bodyStyle.overflow = "";
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      onClick={enableScrolling}
    >
      <div
        className="flex flex-col-reverse md:flex-row lg:justify-between w-4/5 h-4/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side with text (h2, p, button) */}
        <div className="md:w-2/5 p-8">
          <h2 className="text-3xl font-bold mb-4 font-dune-rise">
            {image.alt}
          </h2>
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={300}
            className="rounded-2xl mb-8 md:hidden"
          />
          <p className="text-lg font-syne md:mb-8">
            As civilization has become more complex, and as the need for
            invisible government has been increasingly demonstrated, the
            technical means have been invented and developed by which opinion
            may be regimented.
          </p>
          <button
            onClick={() => {
              onClose();
              enableScrolling();
            }}
            className="mt-4 border-2 border-[#9be3e1] rounded-[30px] w-[140px] h-[50px] text-[#9be3e1] text-2xl font-syne px-4 py-2"
          >
            Go Back
          </button>
        </div>

        {/* Right side with the selected image */}
        <div className="md:w-3/5 lg:ml-[20%]">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={400}
            className="rounded-2xl hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;
