import React from "react";
import {
  RedirectChaper,
  Header,
} from "../../../components/reader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis";
const ChapperReader = () => {
  const { chapperId } = useParams();
  const [chapper, setChapper] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapperData = await apis.getChaperByIdR(chapperId);
        setChapper(chapperData.data.chapperInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [chapperId]);
  return (
    <div >
      <div className="bg-[#0e2234]">
        <Header />
      </div>
      <div className="max-w-[1000px] mx-auto pt-9">
      <div className="text-green-700 font-medium text-[20px] text-center">
        {/* {chapper.story.name}   */}
      </div>
      <div className="font-medium text-[19px] text-center mt-2">{chapper.title}</div>
      <div className="text-center">
        <RedirectChaper />
      </div>
      <div className="text-start ">
        <p className="whitespace-pre-line text-[17px]">
        {chapper.content}
        </p>

      </div>
      <div className="text-center">
        <RedirectChaper />
      </div>
      </div>
    
    </div>
  );
};

export default ChapperReader;
