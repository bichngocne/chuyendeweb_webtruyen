import React from "react";
import { useEffect, useState } from "react";
import * as apis from "../../apis";
import icons from "../../ultis/icons";
import { useNavigate, useParams, Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const RedirectChaper = () => {
  const { FaListAlt, GrFormPrevious, GrFormNext } = icons;
  const [chapper, setChapper] = useState([]);
  const [listChappers, setListChappers] = useState([]);
  const [showListChapters, setShowListChapters] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const { chapperId } = useParams();
  const { storyId } = useParams();
  const [currentChapter, setCurrentChapter] = useState(chapperId);
  const navigation = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const listChapper = await apis.getAllChapperOfStory(storyId);
        setListChappers(listChapper.data.chappers);

        const chapperData = await apis.getChaperByIdR(chapperId);
        setChapper(chapperData.data.chapperInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [chapperId, storyId]);
  // dropdown
  const options = listChappers.map((chapper, index) => ({
    label: `Chương ${chapper.number_chapper}`,
    value: chapper.id,
  }));
  const toggleChapters = () => {
    setShowListChapters(!showListChapters);
  };
  const handleChange = (values) => {
    const selectedValue = values[0];
    if (selectedValue) {
      const selectedChapper = listChappers[selectedValue.value];
      setSelectedChapter(selectedChapper);
    }
    navigation(`/chapper/${storyId}/${values.value}`);
  };

  // chương trước và chương sau
  const totalChapters = listChappers.length;
  const currentIndex = parseInt(chapper.number_chapper, 10);
  const currenIdChapter = parseInt(chapper.id, 10);
  const handleNextChapter = () => {
    if (currentIndex < totalChapters) {
      const nextChapter = currentIndex + 1;
      const nextChapterId = listChappers[nextChapter - 1]?.id;
      if (nextChapter) {
        navigation(`/chapper/${storyId}/${nextChapterId}`);
      }
    }
  };
  const handlePreChapter = () => {
    if (currentIndex > 1) {
      const preChapter = currentIndex - 1;
      const preChapterId = listChappers[preChapter - 1]?.id;
      if (preChapter) {
        navigation(`/chapper/${storyId}/${preChapterId}`);
      }
    }
  };
  //   if (chapper.id_story !== storyId) {
  //   navigation("/notfound");
  // }
  return (
    <div className="flex gap-2 justify-center my-3 items-start ">
      <div
        onClick={handlePreChapter}
        className={`${
          currentIndex === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <a className="flex gap-1 items-center bg-[#27BB24] px-3 py-2 rounded-[7px] text-[17px]  font-medium">
          <GrFormPrevious size={24} /> Chương trước
        </a>
      </div>
      <div className="">
        {showListChapters ? (
          <div className=" w-[200px] bg-[#27BB24] ">
            <Dropdown
              options={options}
              onChange={handleChange}
              valueField="value"
              labelField="label"
              closeOnSelect
              placeholder={
                selectedChapter
                  ? `Chương ${selectedChapter.number_chapper}`
                  : `Chương ${chapperId}`
              }
              className="!pr-2 !font-medium"
              placeholderClassName="!pl-2 !text-black"
              controlClassName="!border-none !outline-none  !bg-[#27BB24]  !flex !items-center !justify-between"
              arrowClassName=" !hidden"
              menuClassName="!max-h-[300px]  !font-medium !bg-[#27BB24] "
            />
          </div>
        ) : (
          <div
            className="bg-[#27BB24] px-3 py-2 rounded-[7px]"
            onClick={toggleChapters}
          >
            <FaListAlt size={24} />
          </div>
        )}
      </div>

      <div
        onClick={handleNextChapter}
        className={`${
          currentIndex === totalChapters ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <a className="flex gap-1 items-center bg-[#27BB24] px-3 py-2 rounded-[7px] text-[17px]  font-medium ">
          Chương sau <GrFormNext size={25} />
        </a>
      </div>
    </div>
  );
};

export default RedirectChaper;
