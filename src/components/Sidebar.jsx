import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <aside className="fixed top-40 h-[80svh] w-[25svh] ">
      <div className="border-white-500 max-w-[350px] border-l-8 pl-3 ">
        <nav className="h-full">
          <ul className="text-md flex h-full list-none flex-col justify-center gap-y-8 pl-12 font-semibold text-white lg:text-2xl lg:font-semibold">
            <li
              onClick={() => handleItemClick("Home")}
              className={selectedItem === "Home" ? "text-yellow-500" : ""}
            >
              Home
            </li>
            <li
              onClick={() => handleItemClick("About")}
              className={selectedItem === "About" ? "text-yellow-500" : ""}
            >
              About
            </li>
            <li
              onClick={() => handleItemClick("Domains")}
              className={selectedItem === "Domains" ? "text-yellow-500" : ""}
            >
              Domains
            </li>
            <li
              onClick={() => handleItemClick("Prizes")}
              className={selectedItem === "Prizes" ? "text-yellow-500" : ""}
            >
              Prizes
            </li>
            <li
              onClick={() => handleItemClick("Timeline")}
              className={selectedItem === "Timeline" ? "text-yellow-500" : ""}
            >
              Timeline
            </li>
            <li
              onClick={() => handleItemClick("Sponsors")}
              className={selectedItem === "Sponsors" ? "text-yellow-500" : ""}
            >
              Sponsors
            </li>
            <li
              onClick={() => handleItemClick("FAQs")}
              className={selectedItem === "FAQs" ? "text-yellow-500" : ""}
            >
              FAQs
            </li>
            <li
              onClick={() => handleItemClick("Contacts")}
              className={selectedItem === "Contacts" ? "text-yellow-500" : ""}
            >
              Contact
            </li>
          </ul>
        </nav>
        <div className="">
          <img
            src="/rocket image.png"
            alt="rocket"
            className="absolute left-5 top-6 h-11 w-11 "
            style={{ transform: "rotate(134deg)" }}
          />
          <img
            src="/fire.png"
            alt="Fire"
            class="h-7.75 absolute left-7 top-0 w-6"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
