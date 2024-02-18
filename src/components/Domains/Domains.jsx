import React from "react";
import "../../styles/global.css";
import Img from "../../assets/react.svg";
import HoverImg from "../../assets/ufo.png"

const Domains = () => {
  return (
    <section>
      <div className="mt-44">
        <div className="flex flex-row justify-center items-center mb-11">
          <h1 className="text-3xl mb-9 text-red-50 font-bold">DOMAINS </h1>
        </div>
        <div>
          <div className="flex flex-row ml-[170px]" >
            <img src={HoverImg} className="w-48 h-44" alt="This if for Hover" />
          </div>
        </div>
        <div className="flex flex-row justify-evenly ">

          <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
            <h2 className="text-white text-4xl text-center mb-10 mt-5">AI / ML</h2>
            <img src={Img} className="h-28 flex justify-center " alt="AIML" />
          </div>

          <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
            <h2 className="text-white text-4xl text-center mb-10 mt-5">Blockchain</h2>
            <img src={Img} className="h-28 flex justify-center " alt="AIML" />
          </div>

          <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
            <h2 className="text-white text-4xl text-center mb-10 mt-5">Web/App</h2>
            <img src={Img} className="h-28 flex justify-center " alt="AIML" />
          </div>

        </div>

        <div className="flex flex-row justify-evenly mt-[100px] mb-20">

          <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
            <h2 className="text-white text-4xl text-center mb-10 mt-5">Social Causes</h2>
            <img src={Img} className="h-28 flex justify-center " alt="AIML" />
          </div>

          <div className="border-stone-200 border-2 h-64 w-64 rounded-lg flex flex-col">
            <h2 className="text-white text-4xl text-center mb-10 mt-5">CyberSecurity</h2>
            <img src={Img} className="h-28 flex justify-center " alt="AIML" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
