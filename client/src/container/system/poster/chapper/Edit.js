import React, { useEffect, useState } from "react";
import { Title, FormChapper, ButtonSave } from "../../../../components/poster";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as apis from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { encryptData } from "../../../../ultis/function";

const EditChapper = () => {
  const { number, name, sid } = useParams();
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
  const [chapper, setChapper] = useState([]);
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
    //get api chapper
    const fetchDetailChapper = async () => {
      const response = await apis.apiDetailChapper(storyId, number);
      if (response.status === 200) {
        setChapper(response.data.chapper);
      } else {
        // console.log(response.response.data);
        toast.error(response.response.data.message, {
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
    fetchDetailChapper();
  }, []);
  const handleFormSubmit = (data) => {
    // console.log(chapper);
    data = {
      ...data,
      id_chapper: encryptData(
        chapper.id,
        process.env.REACT_APP_SECRET_KEY_ID_STORY ||
          "this is secret"
      )
    };
    // console.log(data);
    setSubmittedData(data);
  };
  useEffect(() => {
    if (submittedData) {
      const fetchUpdateChapper = async () => {
        try {
          console.log(submittedData);
          const response = await apis.apiUpdateChapper(submittedData);
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
          toast.error("Ôi lỗi !!Không cấp nhật được chương", {
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

      fetchUpdateChapper();
    }
  }, [submittedData]);
  // console.log(chapper);
  if (chapper && chapper.content) {
    var content = chapper.content;
    content = content.replace(/\n/g, "<br />");
  }
  // const chapperSend = chapper;
  // console.log(chapperSend);
  return (
    <>
      <div className="flex flex-col">
        <Title text="Nội dung chương"></Title>
      </div>
      {0 < number && number <= detailStory?.storyById?.total_chapper ? (
        <div className="flex">
          <FormChapper
            text={detailStory?.storyById.classifi}
            onSubmitChapper={handleFormSubmit}
            chapper={chapper}
          />
        </div>
      ) : (
        <div className="text-[15px] text-red-500 text-center">
          Không tồn tại chương {number} trong truyện này!! Vui lòng kiểm tra lại
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default EditChapper;
