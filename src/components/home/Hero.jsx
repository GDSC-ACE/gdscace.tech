import React, { Component } from "react";
export default class Hero extends Component {
  render() {
    return (
      <section className="relative flex min-h-[86svh] flex-col overflow-hidden">
        <div className="flex flex-1 items-center justify-evenly">
          <section className="flex flex-col items-center gap-[40px] justify-self-center text-white sm:max-w-[350px] md:justify-self-end">
            <div className="flex flex-col items-center gap-[25px]">
              <div className="font-sans text-6xl font-bold md:text-7xl">
                <h1 className="glow text-center">
                  ACE
                  <br />
                  HACKS
                </h1>
              </div>
              <div className="max-w-[350px] border-l-2 border-yellow-500 pl-3">
                <p className="text-justify">
                  Presenting, one of the biggest 24-hour Offline Hackathon of
                  ACE
                </p>
              </div>
            </div>
            <div className="flex gap-2 rounded-md border-2 text-2xl font-bold">
              <button className="min-w-[150px] bg-transparent p-[5px]">
                DEVFOLIO
              </button>
              <button className=" min-w-[150px] rounded-r-md bg-yellow-500/75 p-[5px]">
                REGISTER NOW
              </button>
            </div>
          </section>
          <section className="flex justify-center">
            <img
              src="/assets/astronaut.png"
              alt="astronaut"
              className="animate-float relative z-10 max-h-[400px]"
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
