import React from "react";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
const StoryUpdating = () => {
  const { BiSolidHot, MdOutlineNavigateNext } = icons;
  const [categories, setCategories] = useState([]);
  const [storiesUpadeting, setStoriesUpadeting] = useState([]);
  const [storyCategories, setStoryCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả"); // Trạng thái thể loại được chọn
  const [storyCategoriesMap, setStoryCategoriesMap] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách categories
        const categoriesResponse = await apis.getAllCategories();
        setCategories(categoriesResponse.data.categories);

        // Lấy danh sách stories đang update
        const storiesResponse =await apis.getWordStoriesUpdating();
        const dataStories = storiesResponse.data.storiesUpdating;
        setStoriesUpadeting(storiesResponse.data.storiesUpdating);
       
        const storyIds = dataStories.map((story) => story.story.id);
        const storyCategoriesMap = {};
        for (const storyId of storyIds) {
          // Gọi API getCategoryofStory với id_story
          const storyCategoriesResponse = await apis.getCategoryofStory(
            storyId
          );
          const storyCategories = storyCategoriesResponse.data.storyCategory;
          // Kiểm tra xem storyCategories có dữ liệu hay không
          if (storyCategories.length > 0) {
            storyCategoriesMap[storyId] = storyCategories.map(
              (category) => category.Category.name
            );
           } else {
            storyCategoriesMap[storyId] = [];
          }
        }
        setStoryCategoriesMap(storyCategoriesMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi fetchData khi component được mount
    fetchData();
  }, []);

  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected.value); // Cập nhật trạng thái thể loại được chọnz
  };
  // lấy thời gian 
  const getTimeDistance = (createdAt) => {
    return formatDistanceToNow(new Date(createdAt), {
      locale: vi,
      addSuffix: true,
    });
  };
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
                <tbody >
                  {storiesUpadeting.slice(0,16).map((story) => {
                    // Lọc danh sách thể loại cho truyện cụ thể
                    const storyId = story.story.id;
                    const storyCategoriesForStory=storyCategoriesMap[storyId] || [];
                    return (
                      <tr key={storyId}>
                        <Link  to={`/story/${story.story.id}`} className="border border-black border-l-0 border-t-0 border-dashed pr-3 flex items-center">
                          <MdOutlineNavigateNext size={24} /> {story.story.name}
                        </Link>
                        <td className="border border-black border-l-0 border-t-0 border-dashed px-3 ">
                          {storyCategoriesForStory.length > 0
                            ? storyCategoriesForStory.join(", ")
                            : "Không hiển thị thể loại"}
                        </td>
                        <td className="border border-black border-t-0 border-dashed px-3">
                          Chương {story.number_chapper}
                        </td>
                        <td className="border border-black border-t-0 border-dashed px-3">
                          {getTimeDistance(story.story.createdAt)}
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
              {storiesUpadeting &&
                storiesUpadeting.slice(0, 6).map((story, index) => {
                  return (
                    <a
                      key={story.story.id}
                      className={`py-[3px] flex items-center border-black border-dashed ${
                        index === 5 ? "" : "border-b"
                      }`}
                    >
                      <MdOutlineNavigateNext size={24} />
                      {story.story.name}
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
