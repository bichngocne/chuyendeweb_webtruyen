import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Arrange = (props) => {
  var options = [];
  if (props.text === "Sắp xếp") {
    options = [props.text, "Theo tên", "Ngày đăng", "Số chương"];
  } else if (props.text === "Bộ lọc") {
    options = [props.text, "Tất cả", "Chương đã đăng", "Chương chưa đăng"];
  }
  const defaultOption = options[0];
  return (
    <div className="w-[200px] bg-[#C0E9DD]">
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder={props.text}
        menuClassName="!bg-[#C0E9DD]"
        controlClassName="!bg-[#C0E9DD]"
        className=" !text-white"
      />
    </div>
  );
};

export default Arrange;
