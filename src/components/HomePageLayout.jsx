import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const HomePageLayout = () => {
  return (
    <section>
      <Header />
      <Sidebar />
      <main className="pl-[25svh]">
        <Outlet />
      </main>
    </section>
  );
};

export default HomePageLayout;
