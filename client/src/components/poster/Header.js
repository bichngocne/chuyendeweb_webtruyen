import React from "react";
import logowebtruyen from '../../assets/logowebtruyen.png'
import icons from "../../ultis/icons";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const {RiArrowDropDownLine} = icons;
const options = [
  'Ngôn ngữ','Vietnamese', 'English'
];

const defaultOption = options[0];
const Header = () => {
  return (
    <div className="flex justify-between h-full w-full m-auto">
      <div className="flex items-center justify-center">
        <img src={logowebtruyen}/>
      </div>
      <div className="flex gap-[50px] mr-[80px] items-center justify-center [font-family:'Inika-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] ">
        <div>Đăng xuất</div>
        <div className="flex items-center gap-2 ">
        <Dropdown options={options} value={defaultOption} controlClassName="!border-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
