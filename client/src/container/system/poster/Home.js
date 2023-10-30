import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Header } from "../../../components/poster";
const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-y-hidden flex-col flex text-medium--dark">
      <div className="min-h-screen flex-col flex">
        <div className="h-[70px] bg-[#221a2d] flex-none border-solid border-black shadow-[0px_4px_4px_#00000040] ">
          <Header />
        </div>
        <div className="flex flex-auto w-full m-auto">
          <div className="w-[260px] flex-none border-r border-b-slate-50">
            <SidebarLeft />
          </div>
          <div className="mx-[80px] flex-auto ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
