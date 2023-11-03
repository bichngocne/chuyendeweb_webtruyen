import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Arrange = () => {
  const options = ["Sắp xếp","Theo tên", "Ngày đăng", "Số chương"];
  const defaultOption = options[0];
  return (
    <div className="w-[200px] bg-[#C0E9DD]">
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Sắp xếp"
        menuClassName="!bg-[#C0E9DD]"
        controlClassName="!bg-[#C0E9DD]"
        className=" !text-white"
      />
    </div>
  );
};

export default Arrange;
