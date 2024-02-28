import React from "react";

import { twMerge } from "tailwind-merge";

const SectionHeader = ({ headerText, className }) => {
  return (
    <h3
      className={twMerge(
        "pb-10 text-center text-xl font-black text-red-50 md:text-2xl lg:text-3xl",
        className,
      )}
    >
      {headerText}
    </h3>
  );
};

export default SectionHeader;
