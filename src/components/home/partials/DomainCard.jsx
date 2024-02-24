import React from "react";

const DomainCard = ({ domainName, imagePath, onHover, onMouseOut }) => {
  return (
    <div
      className="domain-card m-2 flex h-[50%] w-[90%] flex-col rounded-lg border-2 border-stone-200 lg:h-64 lg:w-64"
      onMouseEnter={onHover}
      onMouseLeave={onMouseOut}
    >
      <h2 className="mb-10 mt-5 text-center text-3xl text-white">
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
