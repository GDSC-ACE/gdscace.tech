import React from "react";

const Header = () => {
  return (
    <header className="flex items-start m-[10px] mb-0 p-[20px] border-t-2 border-r-2 border-yellow-500 justify-center  md:justify-between">
      <figure className="flex items-start gap-[20px]">
        <div className="flex items-start">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </figure>
      <figure className="hidden md:flex justify-center items-center">
        <img src="/assets/GDSC_ACE.png" alt="GDSC_ACE" className="h-[65px]" />
      </figure>
    </header>
  );
};

export default Header;
