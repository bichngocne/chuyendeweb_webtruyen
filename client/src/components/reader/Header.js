import React from "react";
import logoWebTruyen from "../../assets/logowebtruyen.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icon from "../../ultis/icons";
import Setup from "./Setup";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import ListType from "./ListType";
import { Link } from "react-router-dom";

const Header = () => {
  const { AiOutlineMenuUnfold } = icon;
  const { BsFillImageFill } = icon;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  const phanLoaiTheoChuong =[
    "Dưới 100 chương",
    "100 - 500 chương", 
    "500 - 1000 chương", 
    "trên 1000 chương", 
  ];
  return (
    <div className="bg-[#0e2234]">
      <div className="flex max-w-[1280px] mx-auto items-center relative">
        {/* logo truyen */}
        <div className="flex items-center justify-center w-[130px] h-auto">
          <img src={logoWebTruyen} />
        </div>
        {/* select */}
        <div className="flex items-center">
          {/* thể loại */}
      
      <div>
        <ListType/>
      </div>
          {/* Phân loại theo chương */}
          <div className="flex items-center relative">
            <AiOutlineMenuUnfold size={24} color="white" />
            <Dropdown
              options={phanLoaiTheoChuong}
              value={"Phân loại theo chương"}
              placeholder="Select an option"
              className="!static"
              controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
              arrowClassName="!hidden"
              menuClassName="!bg-[#14425d] !left-0 !w-[100%] !text-white !max-h-[300px] !overflow-hidden !border-none"
              optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
            />
          </div>

          {/* truyện tranh */}
          <div className="flex gap-2 pr-3">
            <BsFillImageFill size={24} color="white" />
            <Link to="#" className="text-white ">Truyện tranh</Link>
          </div>

          {/* cài đặt */}
          <div>
            <Setup />
          </div>
        </div>
        {/* search */}
        <div className="absolute right-0">
          <Search />
        </div>
      </div>
    </div>
  );
};
export default Header;
