import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

// import "../../Timeline.css";
import EarthCanvas from "./partials/EarthCanvas";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(Draggable);

const Timeline = () => {
  const wheelRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const wheel = wheelRef.current;

    gsap.set(imageRef.current, { rotation: "-60" }); // Adjust the initial rotation
    gsap.set(wheel, { rotation: "30" }); // Adjust the initial rotation

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
    let lastRotation = 0;

    Draggable.create(wheel, {
      type: "rotation",
      throwProps: true,
      bounds: { minRotation: 0, maxRotation: -140 },
      minimumMovement: 10,
      onDrag: function () {
        rotateImageBasedOnDragDirection(this.rotation);
        updateTitleOnRotation(this.endRotation);
      },
      onThrowUpdate: function () {
        rotateImageBasedOnDragDirection(this.rotation);
        updateTitleOnRotation(this.endRotation);
      },
    });

    const draggable = Draggable.create(wheel, {
      type: "rotation",
      throwProps: true,
      bounds: { minRotation: 0, maxRotation: -120 }, // Adjust the bounds
      minimumMovement: 10,
      onDrag: function () {
        rotateImageBasedOnDragDirection(this.rotation);
        updateTitleOnRotation(this.endRotation);
      },
      onThrowUpdate: function () {
        rotateImageBasedOnDragDirection(this.rotation);
        updateTitleOnRotation(this.endRotation);
      },
    })[0];
  
    // Stop dragging when the mouse is out of the window
    window.addEventListener('mouseout', (event) => {
      if (!event.relatedTarget && !event.toElement) {
        draggable.endDrag();
      }
    });

    function rotateImageBasedOnDragDirection(currentRotation) {
      const rotationChange = currentRotation - lastRotation;
      const rotationDirection = rotationChange / Math.abs(rotationChange);
      gsap.to(imageRef.current, {
        rotation: `+=${2 * rotationDirection}`,
        duration: 0.5,
      });
      lastRotation = currentRotation;
    }

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

    const rotationSegment = 360 / titles.length;

    function updateTitleOnRotation(rotation) {
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const currentSegment = Math.floor(normalizedRotation / rotationSegment);

      if (currentSegment !== titleIndex) {
        document.getElementById("title").textContent = titles[currentSegment];
        titleIndex = currentSegment;
      }
    }
  }, []);
  return (
    <section
      id="timeline"
      className="home-section relative flex h-screen flex-col items-center overflow-hidden"
    >
      <SectionHeader
        headerText={"Timeline"}
        className="absolute left-1/2 top-10 -translate-x-1/2"
      />
      <p
        id="title"
        className="absolute inset-0 z-40 flex items-center justify-center text-4xl font-bold text-white"
      >
        1PM &gt; Assembly
      </p>
      <img
        src="/assets/timeline/ellipse.png"
        alt="Orbit Curve"
        className="absolute right-0 top-1/2 h-[350px] -translate-y-1/2 transform md:h-[600px]"
      />
      <img
        src="/assets/timeline/celestial.png"
        alt="Star"
        className="absolute left-0 top-0 scale-50"
      />
      <img
        src="/assets/timeline/celestial2.png"
        alt="Star"
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[25%]"
      />
      <img
        src="/assets/timeline/celestial3.png"
        alt="Star"
        className="absolute bottom-0 left-1/3 scale-50"
      />
      <div
        id="wheel"
        ref={wheelRef}
        className="absolute left-full top-1/2 z-50 h-full -translate-y-1/2 rounded-full"
      >
        <img
          ref={imageRef}
          className="astro h-auto w-16 border-none lg:w-24"
          src="/assets/timeline/rocket.png"
          alt="Rocket Scroll"
        />
      </div>
      <EarthCanvas />
    </section>
  );
};

export default Timeline;
