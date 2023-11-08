import React from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icons from "../../ultis/icons";
const Setup = () => {
  const danhSach = [
    "Tài khoản",
    "Màu nền",
    "Ngôn Ngữ"
  ];
  const {AiFillSetting} = icons
  return (
    <div>
      <div className="flex items-center relative ">
        <AiFillSetting size={24} color="white"/>
        <Dropdown
          options={danhSach}
          value={"Cài đặt"}
          placeholder="Select an option"
          className="!static pl-1"
          controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
          arrowClassName="!hidden"
          menuClassName="!bg-[#14425d] !left-0 !w-[100%] !text-white !max-h-[300px] !overflow-hidden !border-none"
          optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
        />
      </div>
    </div>
  );
};
export default Setup;
