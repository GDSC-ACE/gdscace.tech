import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const HomePageLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="mr-3 mt-3 border-r-2 border-t-2 border-yellow-500 bg-black ">
      <Header />
      <Sidebar />
      <main className="pl-[10svh] lg:pl-[20svh]">
        <Outlet />
      </main>
    </section>
  );
};

export default HomePageLayout;
