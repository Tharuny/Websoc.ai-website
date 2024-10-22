import React, { useState } from "react";
import Image from "next/image";
import ImageView from "./AboutUsGridImageView"; // Import the new ImageView component
import "../styles/AboutUsPage.css";

const GridView = ({ images }) => {
  const positions = [
    [1, null, 3, 4],
    [1, null, 3, null],
    [null, 2, null, 4],
    [1, null, 3, null],
    [null, null, 3, null],
  ];

  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="grid grid-cols-4 gap-4 m-5 gridLayout">
      {positions.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((position, colIndex) => (
            <div
              key={colIndex}
              className={`grid-item p-1`}
              onClick={() => handleImageClick(images[position - 1])}
            >
              {position !== null && (
                <Image
                  src={images[position - 1].src}
                  alt={images[position - 1].alt}
                  width={400}
                  height={250}
                  className="rounded-2xl transition-transform transform hover:scale-110 cursor-pointer border-2 bg-blend-darken"
                />
              )}
            </div>
          ))}
        </React.Fragment>
      ))}

      {/* Render the ImageView component when an image is selected */}
      {selectedImage && (
        <ImageView
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default GridView;
