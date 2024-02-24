import SponsorCard from "./partials/SponsorCard";


const Sponsors = () => {
  return (
    <section
    id="sponsors"
    className="no-scrollbar relative min-h-[30vh] space-y-8 overflow-x-hidden py-24 md:space-y-16 lg:space-y-15"
  >
    <div className="mb-11 flex flex-row items-center justify-center">
        <h1 className="mb-3 text-3xl font-bold text-red-50">Sponsors</h1>
      </div>

    <div className="flex items-center justify-center gap-5 md:gap-12 lg:gap-20">
      <SponsorCard
        sponsorName="Tinder"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
      <SponsorCard
        sponsorName="Sponsor2"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
      <SponsorCard
        sponsorName="Sponsor3"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
    </div>
    <div className="flex items-center justify-center gap-5 md:gap-12 lg:gap-20">
      <SponsorCard
        sponsorName="Sponsor4"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
      <SponsorCard
        sponsorName="Sponsor5"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
       <SponsorCard
        sponsorName="Sponsor6"
        imagePath="/assets/sponsor/sponsors.svg"
        ringImagePath="/assets/sponsor/ring.jpg"
      />
    </div>
  </section>
  )

};

export default Sponsors;
