import React from "react";

const About = () => {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center mb-11">
        <h1 className="text-3xl mb-9 text-red-50 font-bold">About us</h1>
      </div>
      <div className="">
        <p className="text-3xl text-center text-white mb-5">
          Presenting ACE IEEE Techithon's Hack Mania, one of the biggest 24-Hour
          Offline Hackathon of ACE.
        </p>
        <p className="text-3xl text-center text-white mb-5">
          With this event, we plan to provide a platform for students from all
          over Mumbai where they can learn invaluable skills about product
          development by building projects from scratch and competing with
          fellow students
        </p>
        <p className="text-3xl text-center text-white mb-5">
          Our aim is to develop applications, website and solutions that would
          be of utility for the society
        </p>
      </div>
    </section>
  );
};

export default About;
