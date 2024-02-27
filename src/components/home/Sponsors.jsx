import SponsorCard from "./partials/SponsorCard";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="home-section no-scrollbar lg:space-y-15 relative min-h-[30vh] space-y-8 overflow-x-hidden py-24 md:space-y-16"
    >
      <div className="mb-11 flex flex-row items-center justify-center">
        <h1 className="mb-3 text-3xl font-bold text-red-50">Sponsors</h1>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-3 md:gap-6 lg:gap-9">
        <SponsorCard
          sponsorName="Tinder"
          imagePath="/assets/sponsor/devfolio.png"
        />
        <SponsorCard
          sponsorName="Sponsor2"
          imagePath="/assets/sponsor/polygon.jpg"
        />
        <SponsorCard
          sponsorName="Sponsor3"
          imagePath="/assets/sponsor/ethindia.svg"
        />
        <SponsorCard
          sponsorName="Sponsor4"
          imagePath="/assets/sponsor/replit.png"
        />
        <SponsorCard
          sponsorName="Sponsor5"
          imagePath="/assets/sponsor/tinder.svg"
        />
        <SponsorCard
          sponsorName="Sponsor6"
          imagePath="/assets/sponsor/tinder.svg"
        />
      </div>
    </section>
  );
};

export default Sponsors;
