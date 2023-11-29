import React, { useEffect, useState } from "react";
import {
  Title,
  FormChapper,
  ButtonSave,
  FormChapper2,
} from "../../../../components/poster";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as apis from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { encryptData } from "../../../../ultis/function";
import FromChapper2 from "../../../../components/poster/form/FromChapper2";



const EditChapper = () => {
  const { number, name, sid } = useParams();
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
  const [chapper, setChapper] = useState([]);
  const storyId = sid;
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);
  var storySession = sessionStorage.getItem("story");
  const [dataForm, setDataForm] = useState(null);
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
      if (storySession === 0) {
        const response = await apis.apiDetailChapper(storyId, number);
        // console.log(response);
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
      } else {
        const response = await apis.apiDetailChapperForImgStory(
          storyId,
          number
        );
        if (response.status === 200) {
          setChapper(response.data.chapper[0]);
        } else {
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
      }
    };
    fetchDetailChapper();
  }, []);
  const handleFormSubmit = (data) => {
    setDataForm(data);
    data = {
      ...data,
      version: chapper.version + 1,
      id_chapper: encryptData(
        chapper.id,
        process.env.REACT_APP_SECRET_KEY_ID_STORY || "this is secret"
      ),
    };
    // console.log(data);
    setSubmittedData(data);
  };

  useEffect(() => {
    if (submittedData) {
      if (storySession == 0) {
        const fetchUpdateChapper = async () => {
          try {
            const response = await apis.apiUpdateChapper(submittedData);
            // console.log(submittedData);
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
            // console.error("Error posting story:", error.response.data);
            toast.error(error.response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setTimeout(()=>{
              window.location.reload(false);

            },2000)
          }
        };
        fetchUpdateChapper();
      }
      if (storySession == 1) {
        const fetchUpdateChapterStoryForImg = async () => {
          try {
            dataForm.append(
              "id_chapper",
              encryptData(
                chapper.id,
                process.env.REACT_APP_SECRET_KEY_ID_STORY || "this is secret"
              )
            );
            dataForm.append("version", chapper.version + 1);
            const response = await apis.apiUpdateChapperForImgStory(dataForm);
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
            window.location.reload(false);
            // console.error("Error posting story:", error);
            toast.error(error.response.data.message, {
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
        fetchUpdateChapterStoryForImg();
      }
    }
  }, [submittedData]);
  if (chapper && chapper.content) {
    var content = chapper.content;
    content = content.replace(/\n/g, "<br />");
  }
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
