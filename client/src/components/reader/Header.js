import React from "react";
import logoWebTruyen from "../../assets/logowebtruyen.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icon from "../../ultis/icons";
import Setup from "./Setup";
import Search from "./Search";
import ListType from "./ListType";
import { Link } from "react-router-dom";
const Header = () => {
  const { AiOutlineMenuUnfold,IoHome ,BsFillImageFill} = icon;
  const danhSach = [
    "Truyện mới cập nhập",
    "Truyện full",
    "Truyện hay",
    "Ngôn tình",
    "Đam mỹ",
  ];
  const defaultOption = danhSach[0];
  return (
    <div className="flex max-w-[1280px] mx-auto items-center relative">
      {/* logo truyen */}
      <div className="flex items-center justify-center w-[130px] h-auto">
        <img src={logoWebTruyen} />
      </div>
      {/* select */}
      <div className="flex items-center gap-2">
        <Link to={`/reader`} className="flex gap-2 text-white pr-3" ><IoHome size={24}/> Home</Link>
        {/* thể loại */}
       <ListType/>
        {/* Phân loại theo chương */}
        <div className="flex items-center">
          <AiOutlineMenuUnfold size={24} color="white" />
          <Dropdown
            options={danhSach}
            value={"Phân loại theo chương"}
            placeholder="Select an option"
            className=""
            controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
            arrowClassName="!hidden"
            menuClassName="!bg-[#14425d]  !w-[200px] !text-white !max-h-[300px] !overflow-hidden !border-none"
            optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
          />
        </div>

        {/* truyện tranh */}
        <div className="flex gap-2">
          <BsFillImageFill size={24} color="white" />
          <a className="text-white">Truyện tranh</a>
        </div>

        {/* cài đặt */}
        <div>
         <Setup/>
        </div>
      </div>
      {/* search */}
      <div className="absolute right-0">
        <Search/>
      </div>
    </div>
  );
};
export default Header;
