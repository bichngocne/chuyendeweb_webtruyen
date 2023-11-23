import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonSave } from "../../../components/poster";
import { useSelector } from "react-redux";

const InforStory = ({ detailStory, categoryStory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(categoryStory);
  return (
    <div className="flex-auto">
      <div className="block">
        <div className="flex justify-center  h-auto pb-4 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[25px] tracking-[1.00px] leading-[20px] border-b-2">
          <div className="flex flex-col">
            {detailStory?.storyById.name}
            <span className="text-[10px] text-blue-400 flex justify-center">
              [
              {detailStory?.storyById.classifi === 0
                ? "Truyện chữ"
                : "Truyện tranh"}
              ]
            </span>
          </div>
        </div>
      </div>
      <div className="text-[15px] mt-3 [font-family:'Inter-Medium',Helvetica] flex gap-5">
        <span>Tác giả :</span>
        <span>{detailStory?.storyById.author}</span>
      </div>
      <div className="text-[15px] mt-3 [font-family:'Inter-Medium',Helvetica] flex gap-5">
        <span>Tình trạng :</span>
        <span>
          {detailStory?.storyById.status_chapter ? "Full" : "Đang ra"}
        </span>
      </div>
      <div className="text-[15px] mt-3 [font-family:'Inter-Medium',Helvetica] flex gap-5">
        <span>Thể loại :</span>
        <span>
          {categoryStory?.map((element) => {
            return element.category.name + " ";
          })}
        </span>
      </div>
      <div className="text-[15px] mt-3 [font-family:'Inter-Medium',Helvetica] flex flex-col gap-2">
        <p className="w-full">Nội dung :</p>
        <p>
          {detailStory?.storyById?.description ? (
            <span>
              {isExpanded
                ? detailStory.storyById.description
                : `${detailStory.storyById.description.substring(0, 590)}...`}
              <span className="text-blue-600" onClick={toggleExpand}>
                {isExpanded ? " [Ẩn]" : " [Xem thêm]"}
              </span>
            </span>
          ) : null}
        </p>
      </div>
      <div className="text-[15px] mt-3 [font-family:'Inter-Medium',Helvetica] flex justify-between items-center">
        <div className="flex justify-start gap-5">
          <span>Tổng số chương :</span>
          <span>{detailStory?.storyById.total_chapper}</span>
        </div>
        <div className="h-[35px]">
          <NavLink>
            <ButtonSave text="Chỉnh sửa" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InforStory;
