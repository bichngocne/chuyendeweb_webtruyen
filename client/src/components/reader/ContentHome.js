import React from "react";
import icons from "../../ultis/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
const ContentHome = () => {
  const { BiSolidHot } = icons;
  const danhSach = [
    "Truyện mới cập nhập",
    "Truyện full",
    "Truyện hay",
    "Ngôn tình",
    
  ];

  return (
    <div className="bg-slate-400">
      {/* truyện hot */}
      <div className="max-w-[1280px] mx-auto py-[20px] h-[1000px]">
        <div className="flex relative ">
          <div className="absolute left-0">
            <h5 className="text-[20px] font-bold flex items-center gap-1 border-b border-black">
              Truyện hot <BiSolidHot size={24} />
            </h5>
          </div>
          <div className="absolute right-0">
            <div>
              <Dropdown
                options={danhSach}
                value={"Thể loại truyện"}
                placeholder="Select an option"
                className=""
                controlClassName="!pl-[3px] !pr-[15px] !flex !items-center gap-2"
                arrowClassName="!static"
                menuClassName="!max-h-[300px]"
                optionClassName=""
              />
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
export default ContentHome;
