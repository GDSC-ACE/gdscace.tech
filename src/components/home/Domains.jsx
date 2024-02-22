import React, { useRef } from "react";
import DomainCard from "./partials/DomainCard";
import { gsap } from "gsap";

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
    const y = event.clientY - rect.top; // Get the vertical coordinate
    gsap.to(ufoRef.current, { duration: 0.5, x: x - 30, y: y - 30 });
  };

  return (
    <section className="min-h-[100vh] py-24">
      <div className="mb-24 flex flex-row items-center justify-center">
        <h1 className="mb-9 text-3xl font-bold text-red-50">DOMAINS</h1>
      </div>
      <div>
        <div className="ml-[170px] flex flex-row">
          {/* UFO image is removed from here */}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        {/* Domain cards */}
        <div className="bg-custom-black group rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
          <div
            className="relative opacity-0 group-hover:opacity-100"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="w-18 h-18 sm:w-26 sm:h-26 absolute ml-20 mt-[-150px] lg:h-32 lg:w-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="AI / ML" imagePath="/assets/domain/AI.svg" />
        </div>

        <div className="bg-custom-black group rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
          <div
            className="relative opacity-0 group-hover:opacity-100"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="w-18 h-18 sm:w-26 sm:h-26 absolute ml-20 mt-[-150px] lg:h-32 lg:w-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="Blockchain" imagePath="/assets/domain/blockchain.svg" />
        </div>

        <div className="bg-custom-black group rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
          <div
            className="relative opacity-0 group-hover:opacity-100"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={ufoRef}
              src="./assets/ufo.png"
              className="w-18 h-18 sm:w-26 sm:h-26 absolute ml-20 mt-[-150px] lg:h-32 lg:w-32"
              alt="UFO"
            />
          </div>
          <DomainCard domainName="Web/App" imagePath="/assets/domain/web.svg" />
        </div>

        <div className="mb-20 mt-[160px] flex flex-row justify-between">
          <div className="bg-custom-black group mr-8 rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
            <div
              className="relative opacity-0 group-hover:opacity-100"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={ufoRef}
                src="./assets/ufo.png"
                className="w-18 h-18 sm:w-26 sm:h-26 absolute ml-20 mt-[-150px] lg:h-32 lg:w-32"
                alt="UFO"
              />
            </div>
            <DomainCard
              domainName="Social Causes"
              imagePath="/assets/domain/handshake.svg"
            />
          </div>

          <div className="bg-custom-black group ml-8 rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
            <div
              className="relative opacity-0 group-hover:opacity-100"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={ufoRef}
                src="./assets/ufo.png"
                className="w-18 h-18 sm:w-26 sm:h-26 absolute ml-20 mt-[-150px] lg:h-32 lg:w-32"
                alt="UFO"
              />
            </div>
            <DomainCard
              domainName="CyberSecurity"
              imagePath="/assets/domain/padlock.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
