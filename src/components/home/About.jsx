import SectionHeader from "../SectionHeader";

const About = () => {
  return (
    <section
      id="about"
      className="home-section mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center lg:max-w-5xl"
    >
      <SectionHeader headerText="About" />

      <div className="px-9 text-justify text-lg lg:text-xl">
        <p className="mb-5 text-center text-white">
          Presenting GDSC-ACE x CSI's Ace Hacks, the biggest 24-Hour
          Offline Hackathon of ACE.
        </p>
        <p className="mb-5 text-center text-white">
          With this event, we plan to provide a platform for students from all
          over Mumbai where they can learn invaluable skills about product
          development by building projects from scratch and competing with
          fellow students.
        </p>
        <p className="mb-5 text-center text-white">
          Our aim is to develop applications, website and solutions that would
          be of utility for the society.
        </p>
      </div>
    </section>
  );
};

export default About;
