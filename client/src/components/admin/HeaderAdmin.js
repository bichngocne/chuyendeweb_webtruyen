import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SettingAccoutAdmin from "./SettingAccoutAdmin";
const HeaderAdmin = () => {
  return (
    <div className="flex justify-end items-center  bg-[#d9d9d9] border-b border-black h-[81px] pr-[72px]">
        <SettingAccoutAdmin/>
    </div>
  );
};

export default HeaderAdmin;
