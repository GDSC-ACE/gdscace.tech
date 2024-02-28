import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import DomainCard from "./partials/DomainCard";
import SectionHeader from "../SectionHeader";

const Domains = () => {
  const ufoRef = useRef(null);
  const sectionRef = useRef(null);
  const [ufoPosition, setUfoPosition] = useState({ x: 0, y: "100%" });
  const [ufoSize, setUfoSize] = useState("30%");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        // Section is in view
        setUfoPosition({ x: 0, y: 0 });
        setUfoSize("20%");
      } else {
        // Section is not in view
        setUfoPosition({ x: 0, y: "100%" });
        setUfoSize("30%");
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    gsap.to(ufoRef.current, {
      duration: 0.25,
      x: ufoPosition.x,
      y: ufoPosition.y,
      width: ufoSize,
      ease: "power1.out",
    });
  }, [ufoPosition, ufoSize]);

  const handleHover = (event) => {
    if (window.innerWidth < 768) return;
    if (event.target === ufoRef.current) return;
    const card = event.target;
    const cardRect = card.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const ufoRect = ufoRef.current.getBoundingClientRect();
    const x =
      cardRect.left -
      sectionRect.left -
      ufoRef.current.offsetWidth -
      ufoRect.width;
    const y = cardRect.top - sectionRect.top - ufoRef.current.offsetHeight;

    gsap.to(ufoRef.current, {
      duration: 0.25,
      x: `${x}px`,
      y: `${y}px`,
      position: "absolute",
      ease: "power1.out",
    });
    setIsHovered(true);
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleMouseOut = (event) => {
    gsap.to(ufoRef.current, {
      duration: 0.25,
      left: "50%",
      top: 0,
      ease: "power1.out",
    });
    setIsHovered(false);
  };

  return (
    <section
      id="domains"
      className="home-section no-scrollbar relative grid min-h-[50svh] place-items-center space-y-4 overflow-hidden lg:space-y-8 lg:pt-20"
      ref={sectionRef}
    >
      <SectionHeader headerText="Domains" />
      <div className="grid grid-cols-1 gap-y-4 md:hidden md:gap-y-8">
        <DomainCard
          onHover={handleHover}
          onMouseOut={handleMouseOut}
          domainName="Blockchain"
          imagePath="/assets/domain/blockchain.svg"
        />
        <DomainCard
          onHover={handleHover}
          onMouseOut={handleMouseOut}
          domainName="Web/App"
          imagePath="/assets/domain/web.svg"
        />
        <DomainCard
          onHover={handleHover}
          onMouseOut={handleMouseOut}
          domainName="Social Causes"
          imagePath="/assets/domain/handshake.svg"
        />
        <DomainCard
          onHover={handleHover}
          onMouseOut={handleMouseOut}
          domainName="CyberSecurity"
          imagePath="/assets/domain/padlock.svg"
        />
        <DomainCard
          onHover={handleHover}
          onMouseOut={handleMouseOut}
          domainName="Blockchain"
          imagePath="/assets/domain/blockchain.svg"
        />
      </div>
      <div className="hidden space-y-4 md:block md:space-y-8">
        <div className="flex items-center justify-center gap-x-4 lg:gap-x-8">
          <DomainCard
            onHover={handleHover}
            onMouseOut={handleMouseOut}
            domainName="Blockchain"
            imagePath="/assets/domain/blockchain.svg"
          />
          <DomainCard
            onHover={handleHover}
            onMouseOut={handleMouseOut}
            domainName="Web/App"
            imagePath="/assets/domain/web.svg"
          />
          <DomainCard
            onHover={handleHover}
            onMouseOut={handleMouseOut}
            domainName="Social Cause"
            imagePath="/assets/domain/handshake.svg"
          />
        </div>
        <div className="flex items-center justify-center gap-x-4 md:gap-x-8">
          <DomainCard
            onHover={handleHover}
            onMouseOut={handleMouseOut}
            domainName="Cyber Security"
            imagePath="/assets/domain/padlock.svg"
          />
          <DomainCard
            onHover={handleHover}
            onMouseOut={handleMouseOut}
            domainName="Blockchain"
            imagePath="/assets/domain/blockchain.svg"
          />
        </div>
      </div>
      <img
        src="/assets/ufo.png"
        ref={ufoRef}
        className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 transition-all duration-500 ease-in-out md:block"
        alt="UFO"
      />
    </section>
  );
};

export default Domains;
