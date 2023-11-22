import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import icon from "../../ultis/icons";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as apis from "../../apis";
const ListType = () => {
  const { AiOutlineMenuUnfold } = icon;
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    // Gọi hàm getAllCategories thay vì axios
    apis
      .getAllCategories()
      .then((response) => {
        setCategories(response.data.categories);
        // console.log(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []); // Chạy một lần sau khi mount component

  // Hàm xử lý khi thay đổi dropdown
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  const selectedCategoryID = selectedOption.value; // Lấy giá trị của thể loại đã chọn
  navigation(`/type-story/${selectedCategoryID}`); // Chuyển đến trang thể loại tương ứng
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
          value={"Thể loại truyện"}
          placeholder="Select an option"
          className="!static"
          controlClassName="!text-white !border-none !outline-none !bg-transparent !pl-[3px] !pr-[15px] "
          arrowClassName="!hidden"
          menuClassName="!left-0 !bg-[#14425d]  !w-[100%] !text-white !max-h-[400px] !overflow-hidden !border-none !w-[400px] grid grid-cols-3 "
          optionsClassName="text-white !hover:bg-gray-200 !hover:text-black !hover:!text-white !hover:!bg-[#14425d] !hover:!font-semibold !hover:!font-bold"
        />
      </div>
    </div>
  );
};

export default ListType;
