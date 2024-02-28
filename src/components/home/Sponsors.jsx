import SectionHeader from "../SectionHeader";
import SponsorCard from "./partials/SponsorCard";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="home-section no-scrollbar lg:space-y-15 relative min-h-[30vh] space-y-8 overflow-x-hidden py-24 md:space-y-16"
    >
      <SectionHeader headerText="Sponsors" />

      <div className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-3 md:gap-6 lg:gap-9">
        <SponsorCard
          sponsorName="Devfolio"
          imagePath="/assets/sponsor/devfolio.png"
          altText="DEVFOLIO LOGO"
        />
        <SponsorCard
          sponsorName="Polygon"
          imagePath="/assets/sponsor/polygon.jpg"
          altText="POLYGON LOGO"
        />
        <SponsorCard
          sponsorName="ETHIndia"
          imagePath="/assets/sponsor/ethindia.svg"
          altText="ETHINDIA LOGO"
        />
        <SponsorCard
          sponsorName="Replit"
          imagePath="/assets/sponsor/replit.png"
          altText={"REPLIT LOGO"}
        />
        <SponsorCard
          sponsorName="Wolfram"
          imagePath="/assets/sponsor/wolfram.png"
          altText="WOLFRAM LOGO"
        />
        <SponsorCard
          sponsorName="XYZ"
          imagePath="/assets/sponsor/xyz.svg"
          altText="XYZ LOGO"
        />
      </div>
    </section>
  );
};

export default Sponsors;
