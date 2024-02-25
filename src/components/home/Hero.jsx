const Hero = () => {
  return (
    <section
      id="home"
      className="home-section relative mr-3 flex min-h-[84svh] items-center justify-between overflow-hidden border-r-2 border-yellow-500"
    >
      <p className="text-md absolute -right-8 top-[40%] rotate-[-90deg] bg-black font-semibold text-white lg:text-lg">
        16th Mar 2024
      </p>

      <main className="flex h-full w-full -translate-y-[10svh] flex-col items-center justify-between gap-10 pl-10 pr-16 lg:flex-row lg:pl-20 lg:pr-28">
        <article className="flex flex-col gap-y-2 lg:gap-y-6">
          <figure
            aria-label="page-title"
            className="grid place-items-center lg:block"
          >
            <img
              src="/assets/title.svg"
              alt="Title"
              className="h-auto w-80 md:w-48 lg:w-96"
            />
          </figure>
          <h2 className="text-md text-justify text-white md:text-lg lg:ml-12 lg:border-l-2 lg:border-yellow-500 lg:pl-3 lg:text-xl">
            Presenting, one of the biggest <br className="hidden lg:block" />
            24-hour Offline Hackathon of ACE
          </h2>
        </article>
        <figure>
          <img
            src="/assets/astronaut.png"
            alt="astronaut"
            className="animate-float relative z-10 max-h-[310px] lg:max-h-[457px]"
          />
        </figure>
      </main>

      <footer>
        <figure>
          <img
            src="/assets/moon_big.svg"
            alt="moon_big"
            className="absolute -right-10 bottom-0 w-full lg:w-1/2 "
          />
        </figure>

        <figure className="absolute -bottom-6 right-0">
          <img src="/assets/bottom_tree.png" alt="bottom_tree_img" />
        </figure>

        <div className="absolute bottom-20 left-[50%] flex h-[6svh] w-full -translate-x-[50%] px-20 text-2xl font-black text-white md:text-3xl lg:h-[10svh] lg:text-5xl">
          <button className="h-full w-full cursor-pointer rounded-l-md border-y-2 border-l-2 bg-transparent">
            DEVFOLIO
          </button>
          <button className="h-full w-full cursor-pointer rounded-r-md border-y-2 border-r-2 bg-yellow-500/75">
            REGISTER NOW
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
