import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import {
  Home,
  Info,
  Globe,
  Award,
  Clock,
  Heart,
  HelpCircle,
  Phone,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const [selectedItem, setSelectedItem] = useState("home");
  const rocketRef = useRef(null);
  const sidebarRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    setSelectedItem(hash || "home");
  }, [location.hash]);

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    const yPos =
      itemRefs.current[index].getBoundingClientRect().top -
      sidebarRef.current.getBoundingClientRect().top -
      rocketRef.current.getBoundingClientRect().height / 2;
    gsap.to(rocketRef.current, { duration: 1, y: yPos, ease: "power1.out" });
  };

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
    const selectedItemIndex = items.findIndex(
      (item) => item.name.toLowerCase() === selectedItem.toLowerCase(),
    );
    if (itemRefs.current[selectedItemIndex]) {
      const yPos =
        itemRefs.current[selectedItemIndex].getBoundingClientRect().top -
        sidebarRef.current.getBoundingClientRect().top -
        rocketRef.current.getBoundingClientRect().height / 2;
      gsap.to(rocketRef.current, { y: yPos, duration: 1, ease: "power1.out" });
    }
  }, [selectedItem]);

  const items = [
    { name: "Home", icon: <Home /> },
    { name: "About", icon: <Info /> },
    { name: "Domains", icon: <Globe /> },
    { name: "Prizes", icon: <Award /> },
    { name: "Timeline", icon: <Clock /> },
    { name: "Sponsors", icon: <Heart /> },
    { name: "FAQs", icon: <HelpCircle /> },
    { name: "Contacts", icon: <Phone /> },
  ];

  return (
    <aside
      ref={sidebarRef}
      className="fixed top-1/2 w-[10svh] -translate-y-1/2 lg:w-[20svh]"
    >
      <nav className="flex h-full flex-row items-stretch justify-center">
        <div className="relative flex flex-col">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white"></div>
          <div ref={rocketRef} className="flex flex-col items-center">
            <img
              src="/fire.png"
              alt="Fire"
              className="left-7 top-0 h-auto w-4 lg:w-5"
            />
            <img
              src="/rocket.png"
              alt="rocket"
              className="h-auto w-14 lg:w-16"
            />
          </div>
        </div>
        <ul className="text-md flex h-full list-none flex-col justify-center gap-y-16  font-semibold text-white md:pl-1 lg:gap-y-8 lg:pl-3 lg:text-2xl lg:font-semibold">
          {items.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleItemClick(item.name, index)}
              className={
                selectedItem.toLowerCase() === item.name.toLowerCase()
                  ? "text-yellow-500"
                  : ""
              }
            >
              {window.innerWidth < 1024 ? (
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className="text-xs md:text-sm lg:text-base"
                >
                  {item.icon}
                </a>
              ) : (
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className="text-xs md:text-sm lg:text-base"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
