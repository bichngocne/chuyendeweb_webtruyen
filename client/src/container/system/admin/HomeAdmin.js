import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeftAdmin, HeaderAdmin } from "../../../components/admin";
const Home = () => {
  return (
    <div className="flex min-w-full">
      <div className="w-[260px] min-h-screen bg-[#d9d9d9] border-r border-black">
        <SidebarLeftAdmin />
      </div>
      <div className="w-full">
      <div className="relative">
        <HeaderAdmin />
      </div>
        <div className="">
          <Outlet/>
        </div>
      </div>

    </div>
  );
};

export default Home;
