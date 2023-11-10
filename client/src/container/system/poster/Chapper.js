import React, { useEffect, useState } from "react";
import { Title,FormChapper } from "../../../components/poster";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as apis from "../../../apis";

const Chapper = () => {
  const { number,name, sid } = useParams();
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
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
  return (
    <>
      <div className="flex flex-col">
        <Title text="Nội dung chương"></Title>
      </div>
      <div className="flex ">
        <FormChapper text={detailStory?.storyById.classifi}/>
      </div>
    </>
  );
};

export default Chapper;
