import React from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis"
const StoryUpdating = () => {
  const { BiSolidHot, MdOutlineNavigateNext } = icons;
  const [categories, setCategories] = useState([]);
  const [stories, setStories] = useState([]);
  const [storyCategories, setStoryCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả"); // Trạng thái thể loại được chọn

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách categories
        const categoriesResponse = await apis.getAllCategories();
        setCategories(categoriesResponse.data.categories);

        // Lấy danh sách stories
        const storiesResponse = await apis.getAllStories();
        setStories(storiesResponse.data.stories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi fetchData khi component được mount
    fetchData();
  }, []);
  

  useEffect(() => {
    if (stories.length > 0) {
      // Lấy danh sách storyIds từ danh sách truyện
      const storyIds = stories.map((story) => story.id);

      // Tạo mảng chứa tất cả các truy vấn thể loại
      const categoryRequests = storyIds.map((storyId) => {
        return axios
          .get(`http://localhost:5000/api/story_categories/${storyId}`)
          .then((res) => res.data.storyCategory);
      });

      // Thực hiện tất cả các truy vấn bằng Promise.all
      Promise.all(categoryRequests)
        .then((results) => {
          // results là một mảng chứa danh sách thể loại của từng truyện
          setStoryCategories(results);
        })
        .catch((err) => console.error(err));
    }
  }, [stories]);
  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected.value); // Cập nhật trạng thái thể loại được chọn
  };
      // Lọc danh sách truyện dựa trên thể loại được chọn
  const filteredStories = selectedCategory === "Tất cả"
  ? stories
  : stories.filter((story) => {
      const storyCategoriesForStory = storyCategories
        .filter((category) => category.id_story === story.id)
        .map((category) => category.Category.name);
      return storyCategoriesForStory.includes(selectedCategory);
    });
  return (
    <div>
      <div className="flex items-start justify-between mt-10">
        {/* left */}
        <div className="w-[75%]">
          <div className="flex justify-between items-center">
            <div className=" font-bold text-lg">Truyện mới cập nhập</div>
            <div className="">
              <div>
                <Dropdown
                  options={categories.map((category) => {
                    const options = category.name.split(","); // Tạo mảng từ chuỗi
                    return options;
                  })}
                  onChange={handleCategoryChange}
                  value={"Tất cả"}
                  placeholder="Select an option"
                  className=""
                  controlClassName="!pl-[3px] !pr-[15px] !flex !items-center !justify-between gap-2 w-[150px]"
                  arrowClassName="!static"
                  menuClassName="!max-h-[300px]"
                  optionClassName=""
                />
              </div>
            </div>
          </div>
          {/* show truyen */}
          <div>
            <div className=" mt-[10px]">
              <table className="border-t border-black w-[100%]">
                <tbody>
                  {stories.slice(0, 16).map((story) => {
                    // Lọc danh sách thể loại cho truyện cụ thể
                    const storyCategoriesForStory = storyCategories
                      .filter((category) => category.id_story === story.id)
                      .map((category) => category.Category.name);
                      const updatedAt = new Date(story.updatedAt); // Chuyển updatedAt sang đối tượng Date
                      const currentTime = new Date(); // Lấy thời gian hiện tại
                      
                      const timeDifference = currentTime - updatedAt; // Tính khoảng thời gian giữa updatedAt và hiện tại (đơn vị miligiây)
                      
                      const secondsDifference = Math.floor(timeDifference / 1000); // Đổi đơn vị sang giây
                      const minutesDifference = Math.floor(secondsDifference / 60); // Đổi đơn vị sang phút
                      const hoursDifference = Math.floor(minutesDifference / 60); // Đổi đơn vị sang giờ
                      const daysDifference = Math.floor(hoursDifference / 24); // Đổi đơn vị sang ngày
                      
                      let timeAgo;
                      if (daysDifference > 1) {
                        timeAgo = `${daysDifference} ngày trước`;
                      } else if (hoursDifference > 1) {
                        timeAgo = `${hoursDifference} giờ trước`;
                      } else {
                        timeAgo = `${minutesDifference} phút trước`;
                      }
                    return (
                      <tr key={story.id}>
                        <td className="border border-black border-l-0 border-t-0 border-dashed pr-3 flex items-center">
                          <MdOutlineNavigateNext size={24} /> {story.name}
                        </td>
                        <td className="border border-black border-l-0 border-t-0 border-dashed px-3 ">
                          {storyCategoriesForStory==true ? storyCategoriesForStory.join(", "):"Không hiển thị thể loại "}
                        </td>
                        <td className="border border-black border-t-0 border-dashed px-3">
                          Chương {story.total_chapper}
                        </td>
                        <td className="border border-black border-t-0 border-dashed px-3">
                        {timeAgo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="pl-3">
          {/* Truyện đang đọc */}
          <div className="border border-black px-2 pb-2">
            <h5 className="font-bold text-lg py-[8px] border-b border-black flex ">
              TRUYỆN ĐANG ĐỌC
            </h5>
            <div>
              {stories &&
                stories.slice(0, 6).map((story, index) => {
                  return (
                    <a
                      key={story.id}
                      className={`py-[3px] flex items-center border-black border-dashed ${
                        index === 5 ? "" : "border-b"
                      }`}
                    >
                      <MdOutlineNavigateNext size={24} />
                      {story.name}
                    </a>
                  );
                })}
            </div>
          </div>

          {/* thế loại truyện */}
          <div className="border border-black px-2 pb-2 mt-2">
            <h5 className="font-bold text-lg py-[8px] border-b border-black flex ">
              THỂ LOẠI TRUYỆN
            </h5>
            <div className="grid grid-cols-2">
              {categories.slice(0, 12).map((category, index) => {
                return (
                  <a key={category.id} className="py-[3px]">
                    {category.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryUpdating;
