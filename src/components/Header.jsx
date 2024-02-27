import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8 lg:px-16">
      <img
        src="/assets/logo.svg"
        alt="logo"
        className="h-auto w-1/3 lg:w-40 xl:w-48"
      />
      <img
        src="/assets/GDSC_ACE.png"
        alt="GDSC_ACE"
        className="h-auto w-1/3 lg:w-40 xl:w-48"
      />
    </header>
  );
};

export default Header;
