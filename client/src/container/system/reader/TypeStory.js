import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components/reader";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import bia from "../../../assets/images";
import axios from "axios";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis";
import { useTheme } from '../../../components/reader/ThemeContext';
const TypeStory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState(""); // Sử dụng state để lưu tên thể loại
  const { theme } = useTheme();
const{BsFillPenFill,BiSolidBookBookmark} = icons
  useEffect(() => {
    apis
      .getAllCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  const { categoryId } = useParams();
  const [stories, setStories] = useState([]);
  useEffect(() => {
   apis.getStoryOfCategory(categoryId)
      .then((res) => {
        setStories(res.data.stories);
        console.log(res.data.stories); // In ra dữ liệu truyện
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div>
      <div className="bg-[#0e2234]">
        <Header />
      </div>
      <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
       <div className="max-w-[1280px] mx-auto pt-9 "  >
       <div className="mx-[50px] flex gap-6">
          {/* left */}
          <div className="grow ">
            <div className="flex">
              <h1 className="uppercase font-medium  border-b-[2px] border-black ">
                truyện {categoryName}
              </h1>
            </div>
            {stories.length > 0 ? (
            stories.map((story) => (
              <ul key={story.id} className="flex py-3 border-t gap-3 relative">
                <img
                  src={require(`../../../assets/images/${story.story.image}`)}
                  alt={story.story.image}
                  className="w-[130px] h-[60px] object-cover"
                />
                <li className="flex flex-col gap-2">
                  <Link to={`/story/${story.id}`} className="flex gap-[5px]">
                    <BiSolidBookBookmark size={24}/>
                    {story.story.name}</Link>
                  <a className="flex gap-[5px]"><BsFillPenFill size={24}/> {story.story.author}</a>
                </li>
                <li className="absolute right-0">{story.story.total_chapper} chương</li>
              </ul>
              ))
              ) : (
                <p>Hiện tại chưa có truyện thuộc thể loại này.</p>
              )}
          </div>
            
          {/* right */}
          <div className="bg-teal-600 px-3 pb-4 h-[100%]">
            <h3 className="font-medium border-b mt-[2px]">THỂ LOẠI TRUYỆN</h3>
            <ul className="flex flex-col mt-2">
              {categories.map((category)=>(
                <Link to={`/type-story/${category.id}`}>{category.name}</Link>
              ))}
              
            </ul>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default TypeStory;
