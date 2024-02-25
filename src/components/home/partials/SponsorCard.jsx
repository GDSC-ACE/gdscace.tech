import React from "react";

const SponsorCard = ({ sponsorName, imagePath, ringImagePath }) => {
  return (
    <div className="domain-card relative m-2 flex flex-col items-center">
      <figure className="relative z-10 flex h-32 w-32 items-center justify-center overflow-hidden lg:h-60 lg:w-60">
        <img
          src={imagePath}
          className="custom-hover-effect z-10 h-20 object-cover sm:h-28 lg:h-40"
          alt={sponsorName}
        />

        <img
          src={"/assets/sponsor/ring.svg"}
          className="absolute inset-0 z-0 h-full w-full rounded-full object-cover"
          alt="Circular ring"
        />
      </figure>
      <h2 className="mb-4 mt-4 text-center text-3xl text-white">
        {sponsorName}
      </h2>
    </div>
  );
};

export default SponsorCard;
