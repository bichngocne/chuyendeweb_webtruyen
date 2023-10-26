import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Header, Title } from "../../../components/poster";
const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-y-hidden flex-col flex text-medium--dark">
      <div className="min-h-screen flex-col flex">
        <div className="h-[86px] flex-none border-solid border-black shadow-[0px_4px_4px_#00000040] ">
          <Header />
        </div>
        <div className="flex flex-auto w-full m-auto">
          <div className="w-[260px] flex-none border-r border-b-slate-50">
            <SidebarLeft />
          </div>
          <div className="pt-[40px] pl-[100px] flex-auto border border-red-50 mr-[80px]">
            <Title/>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
