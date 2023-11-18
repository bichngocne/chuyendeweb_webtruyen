import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icons from "../../ultis/icons";
import { useTheme } from "./ThemeContext";

const Setup = () => {
  const danhSach = [
    {
      type: "group",
      name: "Tài Khoản",
      items: [
        { value: "updatePassword", label: "Thông tin tài khoản" },
        { value: "Logout", label: "Đăng xuất" },
      ],
    },
    {
      type: "group",
      name: "Màu nền",
      items: [
        { value: "light", label: "Màu sáng" },
        { value: "dark", label: "Màu xám" },
      ],
    },
    {
      type: "group",
      name: "Ngôn ngữ",
      items: [
        { value: "english", label: "Tiếng Anh" },
        { value: "vietnamese", label: "Tiếng Việt" },
      ],
    },
  ];

  const { AiFillSetting } = icons;
  const [bgColor, setBgColor] = useState('#fff');
  const [textColor, setTextColor] = useState('#000');
  const { theme, updateTheme } = useTheme();

  const handleOptionChange = (selectedOption) => {
    switch (selectedOption.value) {
      case 'light':
        updateTheme({ bgColor: '#fff', textColor: '#000' }); // Màu sáng
        break;
      case 'dark':
        updateTheme({ bgColor: '#b3b3b3', textColor: '#000' }); // Màu tối
        break;
      default:
        break;
    }
  };
  return (
    <div className="ml-3" >
      <div className="flex items-center relative ">
        <AiFillSetting size={24} color="white" />
        <Dropdown
          options={danhSach}
          value={"Cài đặt"}
          onChange={(selectedOption) =>
            handleOptionChange(selectedOption)
          }
          placeholder="Select an option"
          className="!static pl-1"
          controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px]"
          arrowClassName="!hidden"
          menuClassName="!bg-[#14425d] !left-0 !w-[200px] !text-white !max-h-[400px] !overflow-hidden !border-none"
          optionClassName="!text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
        />
      </div>
    </div>
  );
};

export default Setup;
