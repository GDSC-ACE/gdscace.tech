import React from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

// useState, useEffect, useRouter
const Sidebar = () => {
// const locaiton = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
  return (
    <aside className="w-[25svh] h-[80svh] fixed top-40 ">
      <div className="border-l-8 border-white-500 max-w-[350px] pl-3 ">
        <nav className="h-full">
          <ul className="text-white list-none pl-12 flex flex-col justify-center h-full gap-y-8 font-semibold lg:font-semibold text-md lg:text-2xl">
            <li onClick={() => handleItemClick("Home")} className={selectedItem === "Home" ? "text-yellow-500" : ""}>Home</li>
            <li onClick={() => handleItemClick("About")} className={selectedItem === "About" ? "text-yellow-500" : ""}>About</li>
            <li onClick={() => handleItemClick("Domains")} className={selectedItem === "Domains" ? "text-yellow-500" : ""}>Domains</li>
            <li onClick={() => handleItemClick("Prizes")} className={selectedItem === "Prizes" ? "text-yellow-500" : ""}>Prizes</li>
            <li onClick={() => handleItemClick("Timeline")} className={selectedItem === "Timeline" ? "text-yellow-500" : ""}>Timeline</li>
            <li onClick={() => handleItemClick("Sponsors")} className={selectedItem === "Sponsors" ? "text-yellow-500" : ""}>Sponsors</li>
            <li onClick={() => handleItemClick("FAQs")} className={selectedItem === "FAQs" ? "text-yellow-500" : ""}>FAQs</li>
            <li onClick={() => handleItemClick("Contacts")} className={selectedItem === "Contacts" ? "text-yellow-500" : ""}>Contact</li>
          </ul>
        </nav>
        <div className="">
          <img src="/rocket image.png" alt="rocket" className="absolute w-11 h-11 left-5 top-6 " style={{ transform: 'rotate(134deg)' }} />
          <img src="/fire.png" alt="Fire" class="absolute w-6 h-7.75 left-7 top-0" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar
