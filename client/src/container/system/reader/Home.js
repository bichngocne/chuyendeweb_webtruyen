import React from "react";
import { Outlet } from "react-router-dom";
import {Footer} from "../../../components/reader"
const Home = () =>{
    return(
        <div>
           <div>
            <Footer/>
           </div>
        </div>
    );
};
export default Home