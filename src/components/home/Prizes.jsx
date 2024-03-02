import SectionHeader from "../SectionHeader";
import PrizeCard from "./partials/PlanetCard";

const Prizes = () => {
  return (
    <section
      id="prizes"
      className="home-section relative mt-44 h-screen overflow-hidden text-center text-3xl"
    >
      <SectionHeader
        headerText="Prizes"
        className="absolute left-1/2 top-10 -translate-x-1/2"
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-1/4 w-full rotate-45 scale-[70%] transform items-center justify-center rounded-ellipse border border-solid border-gray-900 sm:h-1/2 md:w-1/2 md:scale-75 lg:scale-100">
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-ellipse border-2 border-gray-900"></div>
        <PrizeCard
          imgSrc={"/assets/prizes/planet3.png"}
          prizeAmount={25000}
          altText="1st"
          className="left-0 top-0 -translate-x-1/4 translate-y-1/2"
        />
        <PrizeCard
          imgSrc={"/assets/prizes/planet1.png"}
          prizeAmount={15000}
          altText="2nd"
          className="left-1/4 top-0 -translate-y-1/4 translate-x-1/2"
        />
        <PrizeCard
          imgSrc={"/assets/prizes/planet2.png"}
          prizeAmount={10000}
          altText="3rd"
          className="bottom-0 left-1/4 translate-x-1/4 translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default Prizes;
