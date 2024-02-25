import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const HomePageLayout = () => {
  return (
    <section className="bg-black">
      <Header />
      <Sidebar />
      <main className="pl-[20svh]">
        <Outlet />
      </main>
    </section>
  );
};

export default HomePageLayout;
