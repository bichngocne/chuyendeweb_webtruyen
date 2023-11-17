import React from "react";
import logowebtruyen from '../../assets/logowebtruyen.png'
import { Link, NavLink } from "react-router-dom";
import { sidebarMenuAdmin } from "../../ultis/menuForAdmin";

const SidebarLeft = () => {
  return (
    <div className="flex flex-col w-[260px]">
    <div className="flex items-center justify-center py-[15px] px-[15px] border-b border-black">
            <Link to="/admin"><img className="h-[50px] w-auto" src={logowebtruyen}/></Link>
          </div>
      {sidebarMenuAdmin.map((item) => (
        <NavLink to={item.path} key={item.path} end={item.end}>
          <div className="flex hover:bg-sky-200 px-[15px] items-center py-[20px]">
            <span className="w-[29px] h-[30px] mr-[15px]">{item.icon}</span>
            <span className="[font-family:'Inika-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">{item.text}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLeft;
