import React from "react";

const SponsorCard = ({ sponsorName, imagePath}) => {
  return (
    <div className="domain-card m-2 flex flex-col items-center">
      <div className="h-32 w-32 flex items-center justify-center rounded-full border-2 border-stone-200 lg:h-60 lg:w-60">
        <img
          src={imagePath}
          className="h-20 sm:h-28 lg:h-40"
          alt={sponsorName} 
        />
      </div>
      <h2 className="mb-4 mt-4 text-center text-3xl text-white">
        {sponsorName}
      </h2>
    </div>
  );
};

export default SponsorCard;
