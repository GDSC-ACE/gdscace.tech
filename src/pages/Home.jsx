import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Domains from "../components/home/Domains";
import Prizes from "../components/home/Prizes";
import Timeline from "../components/home/Timeline";
import Sponsors from "../components/home/Sponsors";
import Faqs from "../components/home/Faqs";
import Footer from "../components/home/Footer";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const homeSectionElements = document.querySelectorAll(".home-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navigate(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.7 },
    );

    homeSectionElements.forEach((section) => observer.observe(section));

    return () => {
      homeSectionElements.forEach((section) => observer.unobserve(section));
    };
  }, [location.hash, navigate]);
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
      <Footer />
    </section>
  );
};

export default HomePage;
