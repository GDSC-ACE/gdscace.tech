import React from "react";
import DomainCard from "./partials/DomainCard";

// tailwindcss - group hover
const Domains = () => {
  return (
    <section className="min-h-[100vh] py-24">
      <div className="flex flex-row justify-center items-center mb-11">
        <h1 className="text-3xl mb-9 text-red-50 font-bold">DOMAINS</h1>
      </div>
      <div>
        <div className="flex flex-row ml-[170px]">
          <img
            src={"./assets/ufo.png"}
            className="w-18 h-18 sm:w-26 sm:h-26 lg:w-32 lg:h-32"
            alt="This if for Hover"
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap">
        <DomainCard domainName="AI / ML" imagePath="/assets/ufo.png" />

        <DomainCard domainName="Blockchain" imagePath="/assets/ufo.png" />

        <DomainCard domainName="Web/App" imagePath="/assets/ufo.png" />

        <div className="flex flex-row justify-evenly mt-[100px] mb-20">
          <DomainCard domainName="Social Causes" imagePath="/assets/ufo.png" />

          <DomainCard domainName="CyberSecurity" imagePath="/assets/ufo.png" />
        </div>
      </div>
    </section>
  );
};

export default Domains;
