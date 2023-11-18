import React, { useEffect, useState } from "react";
import { Footer, Header, Comments } from "../../../components/reader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import hinh from "../../../assets/images";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis";
import { useTheme } from '../../../components/reader/ThemeContext';
const DetailStory = () => {
  const [detailStory, setDetailStory] = useState([]);
  const navigation = useNavigate(); // Lấy đối tượng history từ React Router
  const { storyId } = useParams();
  const [categoryNames, setCategoryNames] = useState([]);
  const [stories, setStories] = useState([]);
  const [chappers, setChappers] = useState([]);
  const { theme } = useTheme();
  const { FaStarOfLife } = icons;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy thông tin về câu chuyện
        const detailStoryResponse = await apis.getStoryByIdR(storyId);
        const storyData = detailStoryResponse.data.stories;
        console.log(storyData);

        // Lấy thông tin người đăng
        const id_user = storyData.id_user;
        const userDataResponse = await apis.getUserPost(id_user);
        const userData = userDataResponse.data.userInfo;

        // Đặt dữ liệu vào state
        setDetailStory({
          ...storyData,
          authorName: userData.name,
        });

        // Lấy thể loại của câu chuyện
        const categoryResponse = await apis.getCategoryofStory(storyId);
        const categoryNames = categoryResponse.data.storyCategory.map(
          (item) => item.Category.name
        );
        setCategoryNames(categoryNames);

        // Lấy danh sách tất cả câu chuyện
        const allStoryResponse = await apis.getAllStoryR();
        setStories(allStoryResponse.data.stories);

        // Lấy danh sách chương truyện
        const chapperResponse = await apis.getAllChapperOfStory(storyId);
        setChappers(chapperResponse.data.chappers);
        console.log(chapperResponse.data.chappers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [storyId]);

  // màu nền cho stt truyện hot
  const getBackgroundColor = (index) => {
    if (index === 0) {
      return "bg-red-500";
    } else if (index === 1) {
      return "bg-yellow-500";
    } else if (index === 2) {
      return "bg-green-500";
    }
    return ""; // Mặc định không có màu nền
  };

  return (
    <div className="">
      <div className="bg-[#0e2234]">
        <Header />
      </div>
      <div className="bg-[#f0f8ff]" style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
        <div className="max-w-[1280px] mx-auto pt-9">
          {/* thông tin truyện */}
          <div>
            <div className="flex py-2">
              <h3 className="font-medium text-[20px] border-b border-black">
                THÔNG TIN TRUYỆN
              </h3>
            </div>
            <div className="flex justify-between w-[100%]">
              {/* xem detail, chương  */}
              <div className="w-[100%]">
                {/* chi tiết truyện */}
                <div className="flex w-[100%]">
                  <div>
                    <img
                      src={
                        detailStory?.image
                          ? require(`../../../assets/images/${detailStory.image}`)
                          : "sai"
                      }
                      alt={detailStory.image}
                      className=""
                    />
                    {/* tac gia */}
                    <div className="mt-[30px]">
                      <div className="flex">
                        <p className="font-medium pr-2">Tác giả: </p>
                        <p> {detailStory.author}</p>
                      </div>
                      <div className="flex">
                        <p className="font-medium pr-2">Thể loại: </p>
                        {categoryNames.map((categoryName, index) => (
                          <p key={index}>{categoryName}</p>
                        ))}
                      </div>
                      <div className="flex">
                        <p className="font-medium pr-2">Trạng thái: </p>
                        <p>
                          {
                            (detailStory.status_chapter = false
                              ? "Đang ra"
                              : "Hoàn thành")
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] text-center px-[50px]">
                    <h5 className="font-bold text-[18px] border-b border-black">
                      {detailStory.name}
                    </h5>
                    <div>đánh giá</div>
                    <div className="flex">
                      <p className="font-medium pr-2">Người đăng : </p>
                      <p> {detailStory.authorName}</p>
                    </div>
                    <div className="flex ">
                      <p className="font-medium  pr-2">Thể loại : </p>
                      {categoryNames.map((categoryName, index) => (
                        <p key={index}>{categoryName}</p>
                      ))}
                    </div>
                    <div className="flex">
                      <p className="font-medium  pr-2 text-start basis-1/6">
                        Mô tả :
                      </p>
                      <p className="text-start "> {detailStory.description}</p>
                    </div>
                  </div>
                </div>
                {/* chương */}
                <div className="mt-[30px]">
                  <div>
                    <h3 className="font-bold text-[20px]">DANH SÁCH CHƯƠNG</h3>
                  </div>
                  <div>
                    {chappers.length > 0 ? (
                      <div>
                        {chappers.map((chapper) => (
                          <div key={chapper.id} className="flex items-center">
                            <FaStarOfLife size={18} />
                            <p className="mr-2 font-medium">
                              Chương {chapper.number_chapper} :{" "}
                            </p>
                            <p>{chapper.title}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>Chưa có chương truyện nào</p>
                    )}
                  </div>
                </div>
              </div>
              {/* truyện đang hot */}
              <div className="w-[300px]">
                <div className="flex py-[3px]">
                  <h5 className="border-b border-black font-bold ">
                    TRUYỆN ĐANG HOT
                  </h5>
                </div>
                <div>
                  <div>
                    <ul>
                      {stories.slice(0, 10).map((story, index) => (
                        <li
                          key={story.id}
                          className="flex gap-2 border-b border-dashed border-black"
                        >
                          <p
                            className={`rounded-full text-center my-3 p-1 w-[35px] border ${getBackgroundColor(
                              index
                            )}`}
                          >
                            {index + 1}
                          </p>{" "}
                          {/* Số thứ tự */}
                          <p className="truncate w-[200px] flex items-center">
                            {story.name}
                          </p>{" "}
                          {/* Tên truyện */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bình luận */}
          <div>
            <Comments />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStory;
