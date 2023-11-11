import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icon from "../../../ultis/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link , useNavigate  } from "react-router-dom";
const ListType = () => {
  const { AiOutlineMenuUnfold } = icon;
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate(); // Lấy đối tượng history từ React Router

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  // Hàm xử lý khi thay đổi dropdown
  const handleCategoryChange = (selectedOption) => {
    const selectedCategory = selectedOption.value; // Lấy giá trị của thể loại đã chọn
    navigation(`/type-story/${selectedCategory}`); // Chuyển đến trang thể loại tương ứng
  };
  return (
    <div>
      {/* thể loại */}
      <div className="flex items-center relative">
        <AiOutlineMenuUnfold size={24} color="white" />
        <Dropdown
        options={categories.map((category) => ({
            value: category.id,
            label: category.name.split(",")[0],
          }))}
          onChange={handleCategoryChange}
          // onChange={this._onSelect}
          value={"Thể loại truyện"}
          placeholder="Select an option"
          className="!static"
          controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px] "
          arrowClassName="!hidden"
          menuClassName="!left-0 !bg-[#14425d]  !w-[100%] !text-white !max-h-[400px] !overflow-hidden !border-none !w-[400px] grid grid-cols-3 "
          DropdownoptionClassName="text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
        />
      </div>
    </div>
  );
};

export default ListType;
