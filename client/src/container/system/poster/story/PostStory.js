import React, { useEffect, useState } from "react";
import { Title, FormStory } from "../../../../components/poster";
import * as apis from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PostStory = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);

  // Hàm callback để nhận dữ liệu từ child
  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };
  useEffect(() => {
    if (submittedData) {
      const fetchPostStory = async () => {
        try {
          const response = await apis.apiPostStory(submittedData);
          console.log(response);
          if (response.data.success) {
            setResponsePost(response.data);
            toast.success(response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.error(response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        } catch (error) {
          console.error("Error posting story:", error);
          toast.error("Ôi lỗi !!Không thêm được truyện", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
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
          <FormStory onSubmit={handleFormSubmit} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PostStory;
