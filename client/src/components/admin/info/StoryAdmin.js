import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../../../apis";
const StoryAdmin = ({ detailStory, categoryStory }) => {
  const [showMore, setShowMore] = useState(false);
  const [UserStory, setUserStory] = useState(null);
  const { data } = useSelector((state) => state.storyAdmin);
  // useEffect(() => {
  //   const fetchUserStory = async () => {
  //     const responseUser = await apis.apiGetUserOfStoryById(
  //       detailStory?.storyById.id_user
  //     );
  //     if (responseUser.status === 200) {
  //       setUserStory(responseUser.data);
  //     }
  //   };
  //   fetchUserStory();
  // }, [data]);
  useEffect(() => {
    const fetchUserStory = async () => {
      try {
        const userId = detailStory?.storyById.id_user;
        if (userId) {
          const responseUser = await apis.apiGetUserOfStoryByIdAdmin(userId);

          if (responseUser.status === 200 && responseUser.data.foundUser) {
            setUserStory(responseUser.data.foundUser.name);
          } else {
            console.error("Invalid or missing data in API response:", responseUser);
            // Handle the case where the data is not as expected
          }
        }
      } catch (error) {
        console.error("Error fetching user story:", error);
        // Handle the error condition
      }

    }
    fetchUserStory();});
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const limitedText = String(detailStory?.storyById?.description);
  return (
    <div
      className={`mx-[35px] my-[15px] bg-[#d9d9d9] rounded-xl ${
        limitedText.length <= 1800 ? "h-[604px]" : "h-auto"
      }`}
    >
      <div className="p-[40px]">
        <div className="flex">
          <img className="w-[150px] h-[185px] mr-[40px]" src={`http://localhost:5000/api/static/uploads/${detailStory?.storyById?.image}`}/>
          <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px]">
            <div className="pb-2.5">
              Tên truyện:{detailStory?.storyById.name}
            </div>
            <div className="py-2.5">Thể loại:{categoryStory?.categoryStory.map((element) => {
            return element.category.name + " ";
          })}</div>
            <div className="py-2.5">
              Tác giả:{detailStory?.storyById.author}
            </div>
            <div className="py-2.5">Người đăng:{UserStory}</div>
            <div className="pt-2.5">
              Số chương:{detailStory?.storyById.total_chapper}
            </div>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="font-bold text-[16px]">Nội dung:</div>
          <div>
            {showMore ? limitedText : `${limitedText.substring(0, 1800)} `}
            {limitedText.length > 1800 && (
              <button onClick={toggleShowMore} className="text-pink-600">
                {showMore ? "[ Ẩn đi ]" : "[ Xem thêm ]"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAdmin;
