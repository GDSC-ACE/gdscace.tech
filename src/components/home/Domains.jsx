import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import DomainCard from "./partials/DomainCard";

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
        setUfoSize("25%");
      } else {
        // Section is not in view
        setUfoPosition({ x: 0, y: "100%" });
        setUfoSize("30%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  useEffect(() => {
    gsap.to(ufoRef.current, {
      duration: 0.5,
      x: ufoPosition.x,
      y: ufoPosition.y,
      width: ufoSize,
      ease: "power1.out",
    });
  }, [ufoPosition, ufoSize]);

  const handleHover = (event) => {
    if (event.target === ufoRef.current) return; // Ignore if the UFO is hovered
    const card = event.target.closest(".domain-card");
    const cardRect = card.getBoundingClientRect();
    const x =
      cardRect.left + cardRect.width / 2 - ufoRef.current.offsetWidth / 2;
    const y = cardRect.top - ufoRef.current.offsetHeight;
    gsap.to(ufoRef.current, {
      duration: 0.5,
      left: x,
      top: y,
      ease: "power1.out",
    });
    setIsHovered(true);
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleMouseOut = (event) => {
    gsap.to(ufoRef.current, {
      duration: 0.5,
      left: "50%",
      top: 0,
      ease: "power1.out",
    });
    setIsHovered(false);
  };

  return (
    <section
      id="domains"
      className="home-section no-scrollbar relative min-h-[30vh] space-y-8 overflow-x-hidden py-24 md:space-y-16 lg:space-y-20"
      ref={sectionRef}
    >
      <div className="flex items-center justify-center">
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
      </div>
      <div className="flex items-center justify-center">
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
      <img
        src="/assets/ufo.png"
        ref={ufoRef}
        className="pointer-events-none absolute left-[50%] top-0 -translate-x-[50%] transition-all duration-500 ease-in-out"
        alt="UFO"
      />
    </section>
  );
};

export default Domains;
