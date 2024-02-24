import React from "react";
import "./../../../index.css"; 


const SponsorCard = ({ sponsorName, imagePath, ringImagePath }) => {
  return (
    <div className="domain-card m-2 flex flex-col items-center relative">
     
      <img
        src={ringImagePath}
        className="absolute inset-0 z-0 object-cover"
        style={{ width: '100%', height: '80%', borderRadius: '50%' }}
        alt="Circular ring"
      />
      
      <div className="h-32 w-32 lg:h-60 lg:w-60 relative z-10 flex items-center justify-center overflow-hidden">
        <img
          src={imagePath}
          className="h-20 sm:h-28 lg:h-40 z-10 object-cover custom-hover-effect"
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
