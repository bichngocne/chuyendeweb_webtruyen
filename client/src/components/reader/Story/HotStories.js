import React from "react";
import icons from "../../../ultis/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as apis from "../../../apis";
import StoryUpdating from "./StoryUpdating";
import { useTheme } from "../ThemeContext";
const HotStories = () => {
  const { BiSolidHot } = icons;
  const [categories, setCategories] = useState([]);
  const [Stories, setStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentCategoryStories, setCurrentCategoryStories] = useState([]);
  const [hotStoriesByCategory, setHotStoriesByCategory] = useState([]);
  const [displayedStories, setDisplayedStories] = useState([]);
  const { id_category } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách categories
        const categoriesResponse = await apis.getAllCategories();
        setCategories(categoriesResponse.data.categories);

        // Lấy danh sách hot stories
        const hotStoriesReponse = await apis.getHotStories();
        setDisplayedStories(hotStoriesReponse.data.hotStories.slice(0, 16));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi fetchData khi component được mount
    fetchData();
  }, []);

  const handleCategoryChange = async (selectedOption) => {
    const categoryId = selectedOption.value;
    console.log(categoryId);
    try {
      const hotStoriesByCategoryResponse = await apis.getHotStoriesByCategory(
        categoryId
      );
      // console.log(hotStoriesByCategoryResponse.data.HotStoriesByCategory[categoryId]);
      setDisplayedStories(hotStoriesByCategoryResponse.data.HotStoriesByCategory[categoryId].slice(0, 16));
    } catch (error) {
      console.error("Lỗi khi truy xuất dữ liệu:", error);
    }
  };
  return (
    <div>
      <div className=" py-[20px]">
        <div className="flex justify-between items-center">
          <div className="">
            <h5 className="text-[20px] font-bold flex items-center gap-1 border-b border-black">
              Truyện hot <BiSolidHot size={24} />
            </h5>
          </div>
          <div className="">
            <div>
              <Dropdown
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                onChange={(selectedOption) =>
                  handleCategoryChange(selectedOption)
                }
                placeholder="Thể loại truyện"
                className="!w-[170px] "
                placeholderClassName=""
                controlClassName="!pl-[10px] !pr-[15px] !flex !items-center gap-2"
                arrowClassName="!static"
                menuClassName="!max-h-[300px] "
                optionClassName=""
              />
            </div>
          </div>
        </div>
        {/* show truyện */}
        <div className="">
          <div className="grid grid-cols-8 gap-4 mt-[10px]">
            {displayedStories.length>0 ?( displayedStories.map((story) => (
              <Link to={`/story/${story.id}`} className="relative">
                <img
                  className=""
                  src={require(`../../../assets/images/${story.image}`)}
                  alt={story.name}
                />
                <div className="absolute bottom-0 left-0 right-0 py-1 px-[2px] bg-slate-300 opacity-80 z-1">
                  <p className="font-medium text-sm text-center">
                    {story.name}
                  </p>
                </div>
              </Link>
            ))):(<p>Chưa có truyện thuộc thể loại này</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotStories;
