import React, { useEffect, useState } from "react";
import { Title,FormChapper } from "../../../components/poster";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as apis from "../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chapper = () => {
  const { number,name, sid } = useParams();
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
  const storyId = sid;
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);
  useEffect(() => {
    const fetchDetailStory = async () => {
      const response = await apis.apiGetStoryById(storyId);
      if (response.status === 200) {
        setDetailStory(response.data);
      }
    };
    fetchDetailStory();
  }, [data]);
  // Hàm callback để nhận dữ liệu từ child
  const handleFormSubmit = (data) => {
    console.log(data);
    data = {
      ...data,
      id_story:storyId,
      numberChapper:number
    }
    setSubmittedData(data);
  };
  useEffect(() => {
    if (submittedData) {
      const fetchPostStory = async () => {
        try {
          const response = await apis.apiPostChapper(submittedData);
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
          }else{
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
          toast.error('Ôi lỗi !!Không thêm được chương', {
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
        <Title text="Nội dung chương"></Title>
      </div>
      <div className="flex ">
        <FormChapper text={detailStory?.storyById.classifi} onSubmit={handleFormSubmit}/>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Chapper;
