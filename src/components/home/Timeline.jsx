import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

// import "../../Timeline.css";
import EarthCanvas from "./partials/EarthCanvas";

gsap.registerPlugin(Draggable);

const Timeline = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    // GSAP animation logic
    const wheel = wheelRef.current;

    const style = window.getComputedStyle(wheel);
    const border = parseInt(style.getPropertyValue("border-width"));
    const radius = (Math.min(window.innerWidth, window.innerHeight) * 0.7) / 2;
    const center = radius - border / 2;
    const total = 1;
    const slice = (2 * Math.PI) / total;

    gsap.set(wheel, {
      width: radius * 2 - border,
      height: radius * 2 - border,
      xPercent: -50,
      yPercent: -50,
    });

    for (let i = 0; i < total; i++) {
      createBox(i);
    }

    const titles = [
      "1PM ->Assembly",
      "The Journey Begins",
      "Into the Unknown",
      "A New Chapter",
      "Uncharted Territories",
      "Beyond the Horizon",
    ];

    let titleIndex = 0;
    let lastTitleUpdateRotation = -20;

    Draggable.create(wheel, {
      type: "rotation",
      throwProps: true,
      bounds: { minRotation: 0, maxRotation: -180 },
      minimumMovement: 10,
      onDrag: function () {
        updateTitleOnRotation(this.endRotation);
      },
      onThrowUpdate: function () {
        updateTitleOnRotation(this.endRotation);
      },
    });

    function createBox(i) {
      const num = i + 1;
      const angle = i * slice;

      const x = center + radius * Math.sin(angle);
      const y = center - radius * Math.cos(angle);

      const box = document.createElement("div");
      box.className = "box";
      box.textContent = num;
      wheel.appendChild(box);

      gsap.set(box, {
        rotation: angle * (180 / Math.PI), // Convert radian to degree
        xPercent: -50,
        yPercent: -50,
        x,
        y,
      });
    }

    function updateTitleOnRotation(rotation) {
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const rotationDifference = Math.abs(
        normalizedRotation - lastTitleUpdateRotation,
      );

      if (rotationDifference >= 20) {
        document.getElementById("title").textContent = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
        lastTitleUpdateRotation = normalizedRotation;
      }
    }
  }, []); // Empty dependency array to ensure the effect runs once on mount

  return (
    <section
      id="timeline"
      className="home-section relative flex h-screen flex-col items-center overflow-hidden"
    >
      <h3 className="inline-block max-w-xs pt-10 text-2xl text-white">
        TIMELINE
      </h3>
      <p
        id="title"
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
      >
        Registration
      </p>

      <img
        src="/assets/timeline/ellipse.png"
        alt="Ellipse"
        className="absolute right-0 top-1/2 h-[400px] -translate-y-1/2 transform md:h-[600px]"
      />

      <div
        id="wheel"
        ref={wheelRef}
        className="absolute left-full top-1/2 h-full -translate-y-1/2 rounded-full"
      >
        <img
          className="astro h-24 w-24 border-none"
          src="/assets/timeline/rocket.png"
          alt="Rocket Scroll"
        />
      </div>
      <EarthCanvas />
    </section>
  );
};

export default Timeline;
