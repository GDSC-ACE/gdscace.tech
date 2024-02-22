import React, { useRef } from "react";
import DomainCard from "./partials/DomainCard";
import { gsap } from "gsap";

// tailwindcss - group hover
const Domains = () => {
  const ufoRef = useRef(null);

  const handleHover = () => {
    gsap.to(ufoRef.current, { duration: 0.5, x: 0, y: 0 });
  };

  const handleMouseOut = () => {
    gsap.to(ufoRef.current, { duration: 0.5, x: 0, y: 0 });
  };

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // Get the horizontal coordinate
    const y = event.clientY - rect.top;  // Get the vertical coordinate
    gsap.to(ufoRef.current, { duration: 0.5, x: x - 30, y: y - 30 });
  };

  return (
    <section className="min-h-[100vh] py-24">
      <div className="flex flex-row justify-center items-center mb-24">
        <h1 className="text-3xl mb-9 text-red-50 font-bold">DOMAINS</h1>
      </div>
      <div>
        <div className="flex flex-row ml-[170px]">
          {/* UFO image is removed from here */}
        </div>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap">
        {/* Domain cards */}
        <div className="group bg-custom-black rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div
            className="relative group-hover:opacity-100 opacity-0"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="absolute w-18 h-18 mt-[-150px] ml-20 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="AI / ML" imagePath="/assets/ufo.png" />
        </div>

        <div className="group bg-custom-black rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div
            className="relative group-hover:opacity-100 opacity-0"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="absolute w-18 h-18 mt-[-150px] ml-20 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="Blockchain" imagePath="/assets/ufo.png" />
        </div>

        <div className="group bg-custom-black rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div
            className="relative group-hover:opacity-100 opacity-0"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="absolute w-18 h-18 mt-[-150px] ml-20 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="Web/App" imagePath="/assets/ufo.png" />
        </div>

        <div className="flex flex-row justify-between mt-[160px] mb-20">
          <div className="group bg-custom-black rounded-lg p-6 mr-8 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div
              className="relative group-hover:opacity-100 opacity-0"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={ufoRef}
                src="./assets/ufo.png"
                className="absolute w-18 h-18 mt-[-150px] ml-20 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
                alt="UFO"
              />
            </div>
            <DomainCard
              domainName="Social Causes"
              imagePath="/assets/ufo.png"
            />
          </div>

          <div className="group bg-custom-black rounded-lg p-6 ml-8 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div
              className="relative group-hover:opacity-100 opacity-0"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={ufoRef}
                src="./assets/ufo.png"
                className="absolute w-18 h-18 mt-[-150px] ml-20 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
                alt="UFO"
              />
            </div>
            <DomainCard
              domainName="CyberSecurity"
              imagePath="/assets/ufo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
