import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../ultis/menuForPoster";
const activeStyle =
  "text-[#001dff] flex gap-3 px-[30px] pt-[40px]";
const notActiveStyle =
  "flex gap-3 px-[30px] pt-[40px]";
const SidebarLeft = () => {
  return (
    <div className="flex flex-col">
      {sidebarMenu.map((item) => (
        <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
        >
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLeft;
