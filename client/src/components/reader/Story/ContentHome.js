import React from "react";
import icons from "../../../ultis/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StoryUpdating from "./StoryUpdating";
const ContentHome = () => {
  const { BiSolidHot, MdOutlineNavigateNext } = icons;
  const [categories, setCategories] = useState([]);
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/stories")
      .then((res) =>setStories(res.data.stories))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-[#f0f8ff]">
      <div className="max-w-[1280px] mx-auto">
        {/* truyện hot */}
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
                  options={categories.map((category) => {
                    const options = category.name.split(","); // Tạo mảng từ chuỗi
                    return options;
                  })}
                  value={"Thể loại truyện"}
                  placeholder="Select an option"
                  className=""
                  controlClassName="!pl-[3px] !pr-[15px] !flex !items-center gap-2"
                  arrowClassName="!static"
                  menuClassName="!max-h-[300px]"
                  optionClassName=""
                />
              </div>
            </div>
          </div>
          {/* show truyện */}
          <div className="">
            <div className="grid grid-cols-8 gap-4 mt-[10px]">
              {stories && stories.slice(0, 16).map((story) => {
                return (
                  <div className="relative " key={story.id}>
                    <img
                      className=""
                      src={require(`../../../assets/images/${story.image}`)}
                    />
                    <div className="absolute bottom-0 left-0 right-0 py-1 px-[2px] bg-slate-300 opacity-80 z-1 ">
                      <p className="font-medium text-sm text-center">
                        {story.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* truyện mới cập nhập */}
       <div><StoryUpdating/></div>

        {/* truyện đã hoàn thành */}
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
              {stories && stories.slice(0, 16).map((story) => {
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
      </div>
    </div>
  );
};
export default ContentHome;
