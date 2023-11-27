import React, { useEffect, useState } from "react";
import {
  Arrange,
  ButtonSave,
  Title,
  InforStory,
} from "../../../../components/poster";
import * as apis from "../../../../apis";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import icons from "../../../../ultis/icons";
const { AiOutlineStar, AiFillStar } = icons;

const Story = () => {
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
  const [categoryStory, setCategoryStory] = useState(null);
  const [imgStory, setImgStory] = useState([]);
  const { name, sid } = useParams();
  const storyId = sid;
  useEffect(() => {
    const fetchDetailStory = async () => {
      const response = await apis.apiGetStoryById(storyId);
      if (response.status === 200) {
        setDetailStory(response.data);
      }
    };
    fetchDetailStory();
    const fetchCategoryStory = async () => {
      const responseCategory = await apis.apiGetCategoryOfStoryById(storyId);
      console.log(responseCategory.data.foundStory[0]);
      if (responseCategory.status === 200) {
        setCategoryStory(responseCategory.data.foundStory);
      }
    };
    fetchCategoryStory();
  }, [data]);
  var tmp = [];
  for (var i = 1; i <= detailStory?.storyById.total_chapper; i++) {
    tmp.push(i);
  }
  return (
    <>
      <div className="flex flex-col">
        <Title text="Thông tin truyện"></Title>
        <div className="flex gap-10">
          <div className="flex-none w-auto">
            <img
              className="object-contain h-[375px]"
              src={`http://localhost:5000/api/static/uploads/${detailStory?.storyById.image}`}
              alt="Story Image"
            />
          </div>
          <InforStory detailStory={detailStory} categoryStory={categoryStory} />
        </div>
        <Title text="Danh sách chương"></Title>
        <Arrange text="Bộ lọc" />
        <div className="my-5 flex flex-col">
          <div className="columns-2 gap-[80px]">
            {tmp.map(function (i) {
              const targetUrl = `${window.location.href}/chapper/${i}`;
              return (
                <div className="py-5 flex justify-between" key={i}>
                  <div className="flex gap-3 items-center">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <span key={i}>Chương {i}</span>
                  </div>
                  <span>
                    <NavLink to={targetUrl} className="hover:text-blue-600">
                      Thêm nội dung
                    </NavLink>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
