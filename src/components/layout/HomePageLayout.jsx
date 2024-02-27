import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const HomePageLayout = () => {
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
