import React from "react";

const DomainCard = ({ domainName, imagePath, onHover, onMouseOut }) => {
  return (
    <div
      className="domain-card m-2 flex flex-col rounded-lg border-2 border-stone-200 px-8 py-4 sm:min-w-[100px] md:min-w-[180px] lg:h-64 lg:w-64 lg:min-w-[250px] lg:px-10 lg:py-6"
      onMouseEnter={onHover}
      onMouseLeave={onMouseOut}
    >
      <h2 className="mb-10 mt-5 text-center text-xl text-white lg:text-3xl">
        {domainName}
      </h2>
      <img
        src={imagePath}
        className="flex h-12 justify-center sm:h-20 lg:h-24 "
        alt={domainName}
      />
    </div>
  );
};

export default DomainCard;
