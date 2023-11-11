import React from "react";
import { Outlet } from "react-router-dom";
import {ContentHome, Footer, Header} from "../../../components/reader"
const Home = () =>{
    return(
        <div className="">
           <div className="bg-[#0e2234]">
            <Header/>
            </div>
            {/* content */}
            <div>
                <ContentHome />
            </div>
            <div>
            <Footer/>
           </div>
        </div>
    );
};
export default Home