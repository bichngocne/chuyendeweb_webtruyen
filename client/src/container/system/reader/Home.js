import React from "react";
import { Outlet } from "react-router-dom";
import { ContentHome,  Header } from "../../../components/reader";
import { LanguageProvider } from "../../../components/reader/updateLanguege/LanguageContext";

const Home = () => {
  return (
    <LanguageProvider>
      <div className="">
        <div className="bg-[#0e2234]">
          <Header />
        </div>
        {/* content */}
        <div>
          <ContentHome />
        </div>
      </div>
    </LanguageProvider>
  );
};
export default Home;
