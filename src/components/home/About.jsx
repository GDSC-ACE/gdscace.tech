const About = () => {
  return (
    <section
      id="about"
      className="home-section mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center lg:max-w-5xl"
    >
      <div className="mb-11 flex flex-row items-center justify-center">
        <h1 className="mb-9 text-3xl font-bold text-red-50">About us</h1>
      </div>
      <div className="px-9 text-justify">
        <p className="mb-5 text-center text-3xl text-white">
          Presenting ACE IEEE Techithon's Hack Mania, one of the biggest 24-Hour
          Offline Hackathon of ACE.
        </p>
        <p className="mb-5 text-center text-3xl text-white">
          With this event, we plan to provide a platform for students from all
          over Mumbai where they can learn invaluable skills about product
          development by building projects from scratch and competing with
          fellow students.
        </p>
        <p className="mb-5 text-center text-3xl text-white">
          Our aim is to develop applications, website and solutions that would
          be of utility for the society.
        </p>
      </div>
    </section>
  );
};

export default About;
