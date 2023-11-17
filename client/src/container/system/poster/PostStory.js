import React, { useEffect, useState } from "react";
import { Title,FormStory } from "../../../components/poster";
import * as apis from "../../../apis";
const PostStory = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null)

  // Hàm callback để nhận dữ liệu từ child
  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };
  useEffect(() => {
    if (submittedData) {
      const fetchPostStory = async () => {
        try {
          
          const response = await apis.apiPostStory(submittedData);
          if (response.status === 200) {
            setResponsePost(response.data);
          }
        } catch (error) {
          console.error("Error posting story:", error);
        }
      };

      fetchPostStory();
    }
  }, [submittedData]);
  return (
    <>
      <div className="flex flex-col">
        <Title text="Đăng truyện"></Title>
        <div className="flex justify-between items-center">
          <FormStory onSubmit={handleFormSubmit}/>
        </div>
      </div>
    </>
  );
};

export default PostStory;
