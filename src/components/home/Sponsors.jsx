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
          websiteUrl="https://devfolio.co/"
        />
        <SponsorCard
          sponsorName="Polygon"
          imagePath="/assets/sponsor/polygon.jpg"
          altText="POLYGON LOGO"
          websiteUrl="https://polygon.technology/"
        />
        <SponsorCard
          sponsorName="ETHIndia"
          imagePath="/assets/sponsor/ethindia.png"
          altText="ETHINDIA LOGO"
          websiteUrl="https://ethindia.co/"
        />
        <SponsorCard
          sponsorName="echo3D"
          imagePath="/assets/sponsor/echo3d.jpg"
          altText="echo3D LOGO"
          websiteUrl="https://echo3D.com/"
        />
        <SponsorCard
          sponsorName="Wolfram"
          imagePath="/assets/sponsor/wolfram.png"
          altText="WOLFRAM LOGO"
          websiteUrl="https://wolfram.com/"
        />
        <SponsorCard
          sponsorName="XYZ"
          imagePath="/assets/sponsor/xyz.png"
          altText="XYZ LOGO"
          websiteUrl="https://gen.xyz/"
        />
        <SponsorCard
          sponsorName="FeelGood"
          imagePath="/assets/sponsor/feelgood.png"
          altText="FEELGOOD LOGO"
          websiteUrl="https://www.feelgoodeco.in/"
        />
        <SponsorCard
          sponsorName="GeeksForGeeks"
          imagePath="/assets/sponsor/GFG.jpg"
          altText="GFG LOGO"
          websiteUrl="https://www.geeksforgeeks.org/"
        />
        <SponsorCard
          sponsorName="Admit Abroad - Vidyalankar"
          imagePath="/assets/sponsor/admit_abroad.png"
          altText="Admit Abroad LOGO"
          websiteUrl="https://admitabroad.com/"
        />
      </div>
    </section>
  );
};

export default Sponsors;
