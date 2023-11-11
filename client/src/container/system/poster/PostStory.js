import React from "react";
import { Title,FormStory } from "../../../components/poster";
const PostStory = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Đăng truyện"></Title>
        <div className="flex justify-between items-center">
          <FormStory/>
        </div>
      </div>
    </>
  );
};

export default PostStory;
