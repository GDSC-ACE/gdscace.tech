import PrizeCard from "./partials/PlanetCard";

const Prizes = () => {
  return (
    <section
      id="prizes"
      className="home-section relative mt-44 h-[50svh] overflow-hidden text-center text-3xl lg:h-screen"
    >
      <h2 className="mb-10 inline-block max-w-xs text-2xl text-white">
        Prizes
      </h2>

      <div className="relative mx-auto flex w-full translate-y-1/4 rotate-45 transform items-center justify-center rounded-full border border-solid border-gray-900 md:h-1/2 lg:w-1/2">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900"></div>
        <PrizeCard
          imgSrc={"/assets/prizes/planet2.png"}
          prizeAmount={50000}
          altText="1st"
          className="left-0 top-0 -translate-x-1/2 translate-y-1/2"
        />
        <PrizeCard
          imgSrc={"/assets/prizes/planet3.png"}
          prizeAmount={25000}
          altText="2nd"
          className="bottom-1/4 left-1/4 -translate-y-1/2 translate-x-1/2"
        />
        <PrizeCard
          imgSrc={"/assets/prizes/planet1.png"}
          prizeAmount={10000}
          altText="3rd"
          className="right-1/4 top-1/4 translate-x-1/2 translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default Prizes;
