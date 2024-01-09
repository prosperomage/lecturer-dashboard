import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "/src/assets/Ellipse 1.svg",
    "/src/assets/Facebook - png 0.svg",
    "/src/assets/vacancy.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto relative overflow-hidden outline outline-red-500">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-[15rem] "
      />
      <div className="absolute bottom-4 left-1/2 mt-3 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full focus:outline-none ${
              currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
