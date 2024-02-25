import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

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
      (item) => item.toLowerCase() === selectedItem.toLowerCase(),
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
    "Home",
    "About",
    "Domains",
    "Prizes",
    "Timeline",
    "Sponsors",
    "FAQs",
    "Contacts",
  ];

  return (
    <aside ref={sidebarRef} className="fixed top-52 w-[20svh]">
      <nav className="flex h-full flex-row items-stretch justify-center">
        <div className="relative flex flex-col">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white"></div>
          <div ref={rocketRef} className="flex flex-col items-center">
            <img src="/fire.png" alt="Fire" className="left-7 top-0 h-5 w-5" />
            <img
              src="/rocket image.png"
              alt="rocket"
              className="h-11 w-11"
              style={{ transform: "rotate(134deg)" }}
            />
          </div>
        </div>
        <ul className="text-md flex h-full list-none flex-col justify-center gap-y-8 pl-1 font-semibold text-white md:pl-2 lg:pl-3 lg:text-2xl lg:font-semibold">
          {items.map((item, index) => (
            <li
              key={item}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleItemClick(item, index)}
              className={
                selectedItem.toLowerCase() === item.toLowerCase()
                  ? "text-yellow-500"
                  : ""
              }
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
