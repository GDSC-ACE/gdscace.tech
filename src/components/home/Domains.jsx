import React from "react";

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
        <div className="border-stone-200 border-2 w-[90%] h-[50%] lg:w-64 lg:h-64 rounded-lg flex flex-col m-2">
          <h2 className="text-white text-4xl text-center mb-10 mt-5">
            AI / ML
          </h2>
          <img
            src={"../../assets/ufo.png"}
            className="h-12 sm:h-20 lg:h-24 flex justify-center "
            alt="AIML"
          />
        </div>

        <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
          <h2 className="text-white text-4xl text-center mb-10 mt-5">
            Blockchain
          </h2>
          <img
            src={"/assets/ufo.png"}
            className="h-12 sm:h-20 lg:h-24 flex justify-center "
            alt="AIML"
          />
        </div>

        <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
          <h2 className="text-white text-4xl text-center mb-10 mt-5">
            Web/App
          </h2>
          <img
            src={"/assets/ufo.png"}
            className="h-12 sm:h-20 lg:h-24 flex justify-center "
            alt="AIML"
          />
        </div>
      </div>

      <div className="flex flex-row justify-evenly mt-[100px] mb-20">
        <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
          <h2 className="text-white text-4xl text-center mb-10 mt-5">
            Social Causes
          </h2>
          <img
            src={"/assets/ufo.png"}
            className="h-12 sm:h-20 lg:h-24 flex justify-center "
            alt="AIML"
          />
        </div>

        <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
          <h2 className="text-white text-4xl text-center mb-10 mt-5">
            CyberSecurity
          </h2>
          <img
            src={"/assets/ufo.png"}
            className="h-12 sm:h-20 lg:h-24 flex justify-center "
            alt="AIML"
          />
        </div>
      </div>
    </section>
  );
};

export default Domains;
