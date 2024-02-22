import React from "react";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Domains from "../components/home/Domains";
import Prizes from "../components/home/Prizes";
import Timeline from "../components/home/Timeline";
import Sponsors from "../components/home/Sponsors";
import Faqs from "../components/home/Faqs";

const HomePage = () => {
  return (
    <section>
      {/* Sahil & Hrushi */}
      <Hero />
      {/* Sachin and Dhruv P */}
      <About />
      <Domains />
      <Prizes />
      {/* Nimesh, Shamit and Dhruv B */}
      <Timeline />
      <Sponsors />
      <Faqs />
    </section>
  );
};

export default HomePage;
