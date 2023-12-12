import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "/src/assets/Ellipse 1.svg",
    "/src/assets/Facebook - png 0.svg",
    "/src/assets/Facebook - png 0.svg",
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 500); // Change image every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  ">
      <img
        className="w-full h-[81px]  rounded-lg shadow-md object-cover"
        src={images[currentImage]}
        alt=""
      />
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-2 rounded-full bg-gray-200 ${
              index === currentImage ? "bg-gray-700" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
