import React from "react";

const Prizes = () => {
  return (
    <section className="relative mt-44 h-screen text-center text-3xl">
      <h2 className="mb-10 inline-block max-w-xs text-2xl text-white">
        Prizes
      </h2>

      <div className="relative mx-auto flex w-full rotate-45 transform items-center justify-center rounded-full border border-solid border-gray-900 md:h-3/4 md:w-3/4 lg:w-1/2">
        <div className="absolute left-0 top-0 translate-x-1/2 translate-y-1/2 transform transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            className="h-32 w-24 object-contain md:h-40 md:w-32 lg:h-64 lg:w-48"
            src={"/assets/planet2.png"}
            alt="planet1"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transform text-4xl font-bold text-white">
            1st
          </div>
          <span className="-ml-3 -mt-1 flex w-11 items-center justify-center">
            <img
              className="h-3 w-3 object-cover"
              src={"/assets/rocks.png"}
              alt="rock"
            />
            <p className="m-0 -rotate-45 text-lg text-yellow-300">
              {" "}
              &#8377; 50,000
            </p>
          </span>
        </div>

        <div className="absolute right-1/4 top-1/4 flex -translate-x-1/2 translate-y-1/2 transform justify-between transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            className="h-32 w-24 object-contain md:h-40 md:w-32 lg:h-64 lg:w-48"
            src={"/assets/planet3.png"}
            alt="planet2"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transform text-4xl font-bold text-white">
            2nd
          </div>
          <span className="-ml-3 -mt-1 flex w-11 items-center justify-center">
            <img
              className="h-3 w-3 object-cover"
              src={"/assets/rocks.png"}
              alt="rock"
            />
            <p className="m-0 -rotate-45 text-lg text-yellow-300">
              {" "}
              &#8377; 25,000
            </p>
          </span>
        </div>

        <div className="absolute bottom-1/4 left-1/4 -translate-y-1/2 translate-x-1/2 transform transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            className="h-32 w-24 object-contain pt-3 md:h-40 md:w-32 lg:h-64 lg:w-48"
            src={"/assets/planet1.png"}
            alt="planet3"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transform text-4xl font-bold text-white">
            3rd
          </div>
          <span className="-ml-3 -mt-1 flex w-11 items-center justify-center">
            <img
              className="h-3 w-3 object-cover"
              src={"/assets/rocks.png"}
              alt="rock"
            />
            <p className="m-0 -rotate-45 text-lg text-yellow-300">
              {" "}
              &#8377; 10,000
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
