import React from "react";

const DomainCard = ({ domainName, imagePath }) => {
  return (
    <div className="border-stone-200 border-2 w-[90%] h-[50%] lg:w-64 lg:h-64 rounded-lg flex flex-col m-2">
      <h2 className="text-white text-4xl text-center mb-10 mt-5">
        {domainName}
      </h2>
      <img
        src={imagePath}
        className="h-12 sm:h-20 lg:h-24 flex justify-center "
        alt="AIML"
      />
    </div>
  );
};

export default DomainCard;
