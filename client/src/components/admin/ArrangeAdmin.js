import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ArrangeAdmin = () => {
  const options = [,"Theo tên", "Ngày đăng", "Số chương"];
  const defaultOption = options[0];
  return (
    <div className="w-[120px] mx-[10px] z-[1]">
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Sắp xếp"
        controlClassName="!p-[4.5px] border-none"
        arrowClassName=""
        className=" !text-white bg-[#C0E9DD] text-[14px] [font-family:'Roboto'] h-[30px]"
      />
    </div>
  );
};

export default ArrangeAdmin;
