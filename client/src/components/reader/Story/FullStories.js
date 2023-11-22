import React from "react";
import icons from "../../../ultis/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as apis from "../../../apis";
import StoryUpdating from "./StoryUpdating";
import { useTheme } from '../ThemeContext';
const FullStories = () => {
    const { BiSolidHot, MdOutlineNavigateNext } = icons;
    const [categories, setCategories] = useState([]);
    const [stories, setStories] = useState([]);
    const { theme } = useTheme();
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
  return (
    <div className="mt-10 pb-20">
          <div className="flex justify-between items-center ">
            <div className="">
              <h5 className="text-[20px] font-bold flex items-center border-b border-black">
                Truyện đã hoàn thành <MdOutlineNavigateNext size={24} />
              </h5>
            </div>
          </div>
          {/* show truyện */}
          <div className="">
            <div className="grid grid-cols-8 gap-4 mt-[20px]">
              {stories &&
                stories.slice(0, 16).map((story) => {
                  return (
                    <div className=" " key={story.id}>
                      <img
                        className="w-[150px] h-[230px]"
                        src={require(`../../../assets/images/${story.image}`)}
                      />
                      <div className=" py-1 px-[2px] flex flex-col items-center">
                        <a
                          className="font-medium text-sm text-center truncate  w-[130px]"
                          href="#"
                        >
                          {story.name}
                        </a>
                        <p className="font-medium text-sm rounded-[5px] bg-[#3868E3] w-fit">
                          full - {story.total_chapper} chương
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
  )
}

export default FullStories