import React, { useEffect, useState } from "react";
import { Title, FormChapper, ButtonSave } from "../../../../components/poster";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as apis from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var storySession = sessionStorage.getItem("story");

const Chapper = () => {
  const { number, name, sid } = useParams();
  const { data } = useSelector((state) => state.story);
  const [detailStory, setDetailStory] = useState(null);
  const [detailStoryForImg, setDetailStoryForImg] = useState(null);
  const [chapper, setChapper] = useState([]);
  const storyId = sid;
  const [submittedData, setSubmittedData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);
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
  // console.log(detailStory.storyById.total_chapper);
  // console.log();
  // console.log(chapper.chapper === null);
  // Hàm callback để nhận dữ liệu từ child
  const handleFormSubmit = (data) => {
    // console.log(data);
    setDataForm(data);
    data = {
      ...data,
      id_story: storyId,
      numberChapper: number,
    };
    setSubmittedData(data);
  };
  useEffect(() => {
    if (submittedData) {
      if (submittedData.classifi === 0) {
        const fetchPostStory = async () => {
          try {
            const response = await apis.apiPostChapper(submittedData);
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
            console.error("Error posting story:", error);
            toast.error("Ôi lỗi !!Không thêm được chương", {
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
      } else {
        const fetchPostStoryForImg = async () => {
          try {
            dataForm.append("id_story", storyId);
            dataForm.append("numberChapper", number);
            const response = await apis.apiPostChapperImg(dataForm);
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
            console.error("Error posting story:", error);
            toast.error("Ôi lỗi !!Không thêm được chương", {
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

        fetchPostStoryForImg();
      }
    }
  }, [submittedData]);
  // console.log(chapper);
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
        chapper === undefined ? (
          <div className="flex">
            <FormChapper
              text={detailStory?.storyById.classifi}
              onSubmit={handleFormSubmit}
            />
          </div>
        ) : (
          <div className="block">
            <div className="text-center text-[24px] text-[#690]">
              Chương {number} : {chapper?.title}
              <div className="h-[35px] float-right">
                <NavLink to={window.location.href + "/edit"}>
                  <ButtonSave text="Chỉnh sửa" />
                </NavLink>
              </div>
            </div>
            {chapper?.content === null ? (
              <div className="w-full mt-10">
                {chapper?.files.map((item) => (
                  <div className="w-full flex justify-center">
                    <img
                      className="object-contain"
                      src={`http://localhost:5000/api/static/uploads/${item.name}`}
                      alt="chapper Image"
                      key={item.name}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="text-[15px] [font-family:'Roboto Condensed',Tahoma,sans-serif] py-5"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        )
      ) : (
        <div className="text-[15px] text-red-500 text-center">
          Không tồn tại chương {number} trong truyện này!! Vui lòng kiểm tra lại
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Chapper;
