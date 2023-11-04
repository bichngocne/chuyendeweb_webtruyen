import React from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Setup = () => {
  const danhSach = [
    "Truyện mới cập nhập",
    "Truyện full",
    "Truyện hay",
    "Ngôn tình",
    "Đam mỹ",
  ];
  return (
    <div>
      <div className="flex items-center">
        <Dropdown
          options={danhSach}
          value={"Thể loại truyện"}
          placeholder="Select an option"
          className=""
          controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
          arrowClassName="!hidden"
          menuClassName="!bg-[#14425d]  !w-[100%] !text-white !max-h-[300px] !overflow-hidden !border-none"
          optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
        >
          <Dropdown
            options={danhSach}
            value={"Thể loại truyện"}
            placeholder="Select an option"
            className=""
            controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
            arrowClassName="!hidden"
            menuClassName="!bg-[#14425d]  !w-[100%] !text-white !max-h-[300px] !overflow-hidden !border-none"
            optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
          />
        </Dropdown>
      </div>
    </div>
  );
};
export default Setup;
