import React, { useEffect, useState } from "react";
import { Arrange, ButtonSave, Title } from "../../../components/poster";
import * as apis from "../../../apis";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import icons from "../../../ultis/icons";
import path from "../../../ultis/path";
const { AiOutlineStar, AiFillStar } = icons;

const Story = () => {
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
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
  }, [data]);

  const columns = 2;
  const chunkSize = Math.ceil(
    Number(detailStory?.storyById.total_chapper) / columns
  );
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
              src="https://tsxx.info/wp-content/uploads/2023/10/IMG_8687.jpg"
              className="object-contain h-[355px]"
            />
          </div>
          <div className="flex-auto">
            <div className="block">
              <div className="flex justify-center h-auto pb-4 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[25px] tracking-[1.00px] leading-[20px] border-b-2">
                {detailStory?.storyById.name}
              </div>
              <div className="text-[18px] mt-5 [font-family:'Inter-Medium',Helvetica] flex gap-5">
                <span>Tác giả :</span>
                <span>{detailStory?.storyById.author}</span>
              </div>
              <div className="text-[18px] mt-5 [font-family:'Inter-Medium',Helvetica] flex gap-5">
                <span>Tình trạng :</span>
                <span>
                  {detailStory?.storyById.status_chapter ? "Full" : "Đang ra"}
                </span>
              </div>
              <div className="text-[18px] mt-5 [font-family:'Inter-Medium',Helvetica] flex flex-col gap-2">
                <p className="w-full">Nội dung :</p>
                <p>"{detailStory?.storyById.description}"</p>
              </div>
            </div>
            <div className="text-[18px] mt-5 [font-family:'Inter-Medium',Helvetica] flex gap-5">
              <span>Thể loại :</span>
              <span>Ngôn tình, kiếm hiệp</span>
            </div>
            <div className="text-[18px] mt-5 [font-family:'Inter-Medium',Helvetica] flex justify-between">
              <div className="flex justify-start gap-5">
                <span>Tổng số chương :</span>
                <span>{detailStory?.storyById.total_chapper}</span>
              </div>
              <div className="h-[35px]">
                <NavLink to={path.STORY__NAME__ID_UPDATE}>
                  <ButtonSave text="Chỉnh sửa" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Title text="Danh sách chương"></Title>
        <Arrange text="Bộ lọc" />
        <div className="my-5 flex flex-col">
          <div className="columns-2 gap-[80px]">
            {tmp.map(function (i) {
              return (
                <div className="py-5 flex justify-between" key={i}>
                  <div className="flex gap-3 items-center">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <span key={i}>Chương {i}</span>
                  </div>
                  <span>
                    <NavLink
                      to={path.CHAPPER__NAME__ID}
                      className="hover:text-blue-600"
                    >
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
