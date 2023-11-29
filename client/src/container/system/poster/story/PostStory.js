import React, { useEffect, useState } from "react";
import { Title, FormStory } from "../../../../components/poster";
import * as apis from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
const PostStory = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);
  const [detailStory, setDetailStory] = useState(null);
  const [categoryStory, setCategoryStory] = useState(null);
  const { sid } = useParams();
  // get data story if have

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };
  useEffect(() => {
    if (sid) {
      const fetchDetailStory = async () => {
        const response = await apis.apiGetStoryById(sid);
        // console.log(response.data);
        if (response.status === 200) {
          setDetailStory(response.data);
        }
      };
      fetchDetailStory();
      const fetchCategoryStory = async () => {
        const responseCategory = await apis.apiGetCategoryOfStoryById(sid);
        console.log(responseCategory.data.foundStory[0]);
        if (responseCategory.status === 200) {
          setCategoryStory(responseCategory.data.foundStory);
        }
      };
      fetchCategoryStory();
      console.log(categoryStory);
    }
    if (submittedData) {
      // console.log(detailStory);
      if (categoryStory) {
        const fetchUpdateStory = async () => {
          try {
            const version = Number(detailStory?.storyById.version) + 1;
            submittedData.append("id_story",sid);
            submittedData.append("version",version);
            const response = await apis.apiUpdateStory(submittedData);
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
        fetchUpdateStory();
      } else {
        const fetchPostStory = async () => {
          try {
            const response = await apis.apiPostStory(submittedData);
            // console.log(response);
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
        fetchPostStory();
      }
    }
   
  }, [submittedData]);
  return (
    <>
      <div className="flex flex-col">
        <Title text="Đăng truyện"></Title>
        <div className="flex justify-between items-center">
          <FormStory
            onSubmit={handleFormSubmit}
            dataStory={detailStory}
            dataCategoryStory={categoryStory}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PostStory;
