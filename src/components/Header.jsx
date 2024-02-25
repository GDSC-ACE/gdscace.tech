import React from "react";

const Header = () => {
  return (
    <header className="m-3 mb-0 flex items-start justify-center border-r-2 border-t-2 border-yellow-500 px-16 py-8 md:justify-between">
      <figure className="flex items-start">
        <div className="flex items-start">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </figure>
      <figure className="hidden items-center justify-center md:flex">
        <img src="/assets/GDSC_ACE.png" alt="GDSC_ACE" className="h-[65px]" />
      </figure>
    </header>
  );
};

export default Header;
