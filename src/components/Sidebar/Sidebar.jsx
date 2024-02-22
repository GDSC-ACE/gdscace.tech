import React from "react";
// import { useLocation } from "react-router-dom";

// useState, useEffect, useRouter
const Sidebar = () => {
  // const locaiton = useLocation();
  return (
    <aside className="w-[25svh] h-[80svh] fixed top-40">
       <div className="border-l-8 border-yellow-500 max-w-[350px] pl-3">
      <nav className="h-full">
        <ul className="text-black list-none pl-12 flex flex-col justify-center h-full gap-y-5 font-semibold lg:font-bold text-md lg:text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Domains</li>
          <li>Prizes</li>
          <li>Timeline</li>
          <li>Sponsors</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </nav>
      </div>
    </aside>
  );
};

export default Sidebar
