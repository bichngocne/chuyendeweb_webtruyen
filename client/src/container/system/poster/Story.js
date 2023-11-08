import React, { useEffect } from "react";
import { Title } from "../../../components/poster";
import * as apis from "../../../apis";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Story = () => {
  const { data } = useSelector((state) => state.story);
  const { name, sid } = useParams();
  const storyId = sid;
  useEffect(() => {
    const fetchDetailStory = async () => {
      const response = await apis.apiGetStoryById(storyId);
      console.log(response);
    };

    fetchDetailStory();
  }, [data]);

  return (
    <>
      <div className="flex flex-col">
        <Title text="Thông tin truyện"></Title>
        <div className="">Story</div>
      </div>
    </>
  );
};

export default Story;
