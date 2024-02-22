import React, { Component } from "react";
export default class Hero extends Component {
  render() {
    return (
      <section className="relative min-h-[86svh] flex flex-col overflow-hidden">
        <div className="flex flex-1 justify-evenly items-center">
          <section className="text-white flex flex-col items-center gap-[40px] sm:max-w-[350px] justify-self-center md:justify-self-end">
            <div className="flex flex-col items-center gap-[25px]">
              <div className="font-bold font-sans text-6xl md:text-7xl">
                <h1 className="glow text-center">
                  ACE
                  <br />
                  HACKS
                </h1>
              </div>
              <div className="border-l-2 border-yellow-500 max-w-[350px] pl-3">
                <p className="text-justify">
                  Presenting, one of the biggest 24-hour Offline Hackathon of
                  ACE
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-2xl font-bold rounded-md border-2">
              <button className="bg-transparent p-[5px] min-w-[150px]">
                DEVFOLIO
              </button>
              <button className=" bg-yellow-500/75 p-[5px] rounded-r-md min-w-[150px]">
                REGISTER NOW
              </button>
            </div>
          </section>
          <section className="flex justify-center">
            <img
              src="/assets/astronaut.png"
              alt="astronaut"
              className="max-h-[400px] animate-float z-10 relative"
            />
            <img
              src="/assets/moon_big.svg"
              alt="moon_big"
              className="absolute bottom-[-30%] z-[0]"
            />
          </section>
        </div>
      </section>
    );
  }
}
