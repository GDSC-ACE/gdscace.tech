import React from "react";

const Header = () => {
  return (
    <header className="flex items-start p-[30px]  justify-center  md:justify-between">
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
