import React, { useState,useEffect } from "react";
import * as apis from "../../../../apis";
import { TitleAdmin,PendingAdmin } from "../../../../components/admin";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const PendingDetailAdmin = () => {
  const { data } = useSelector((state) => state.storyAdmin);
  const [detailStory, setDetailStory] = useState(null);
  const [categoryStory, setCategoryStory] = useState(null);
  const { id } = useParams();
  const storyId = id;
  useEffect(() => {
    const fetchDetailStory = async () => {
      const response = await apis.apiGetStoryByIdAdmin(storyId);
      if (response.status === 200) {
        setDetailStory(response.data);
      }
    };
    fetchDetailStory();
    const fetchCategoryStory = async () =>{
       const responseCategory = await apis.apiGetCategoryOfStoryByIdAdmin(storyId);
       if (responseCategory.status === 200) {
        setCategoryStory(responseCategory.data);
      }
    }
    fetchCategoryStory();
  }, [data]);

  var tmp = [];
  for (var i = 1; i <= detailStory?.storyById.total_chapper; i++) {
    tmp.push(i);
  }
  return (
    <>
    <div>
      <div className="flex flex-row justify-between px-[30px]">
        <TitleAdmin text="Thông tin chi tiết truyện phê duyệt"></TitleAdmin>
      </div>
      <div>
        <PendingAdmin  detailStory={detailStory} categoryStory={categoryStory}/>
      </div>
      </div>
    </>
  );
};

export default PendingDetailAdmin;