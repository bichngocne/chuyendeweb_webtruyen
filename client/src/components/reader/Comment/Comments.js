import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import FormComment from "./FormComment";
import * as apis from "../../../apis";
import { decodeWithSecret, encodeWithSecret } from "../../../ultis/function";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import axios from "axios";
const Comments = () => {
  const sapxep = ["Mới nhất", "Cũ nhất"];

  const [comments, setComments] = useState(0);
  const { storyId } = useParams();
  const [sortOption, setSortOption] = useState("Mới nhất");
  const secretKey = "iloveyoubaby";
  const decodedIdStory = decodeWithSecret(storyId, secretKey);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // lấy danh sách comments
        const listComments = await apis.getAllCommentOfStory(decodedIdStory);
        const listCommentsData = listComments.data.comments;
        // console.log(listCommentsData.id_user);
        console.log(listCommentsData);
        // Lấy thông tin người dùng cho mỗi comment
        const commentsWithUserData = await Promise.all(
          listCommentsData.map(async (comment) => {
            const userCommentResponse = await apis.getUserComment(
              comment.id_user
            );
            const userData = userCommentResponse.data.userInfo;
            return {
              ...comment,
              user: userData,
            };
          })
        );
        // Sắp xếp comments theo tùy chọn hiện tại
        const sortedComments = commentsWithUserData.sort((a, b) => {
          if (sortOption === "Mới nhất") {
            return new Date(b.createdAt) - new Date(a.createdAt);
          } else if (sortOption === "Cũ nhất") {
            return new Date(a.createdAt) - new Date(b.createdAt);
          }
          // Thêm các tùy chọn sắp xếp khác nếu cần
          return 0;
        });
        setComments(sortedComments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [decodedIdStory, sortOption]);

  const getTimeDistance = (createdAt) => {
    return formatDistanceToNow(new Date(createdAt), {
      locale: vi,
      addSuffix: true,
    });
  };
  return (
    <div className="mt-[40px]">
      <div className="flex">
        <h3 className="font-medium text-[21px] border-b-[2px] border-black">
          BÌNH LUẬN
        </h3>
      </div>

      {/* số lượng bình luận , sắp xếp */}
      <div className="flex justify-between items-center border-b border-gray-500 pb-[15px]">
        <p className="text-blue-600 font-medium">{comments.length} bình luận</p>
        <div className="flex items-center">
          <p className="font-medium mr-3 text-[17px]">Sắp xếp :</p>
          <Dropdown
            options={sapxep}
            onChange={(selected) => setSortOption(selected.value)}
            value={"Mới nhât"}
            placeholder="Select an option"
            className="!w-[130px]"
            controlClassName="!pl-[20px] !pr-[20px] !flex !items-center gap-2"
            arrowClassName="!static"
            menuClassName=""
            optionClassName=""
          />
        </div>
      </div>
      {/* form bình luận */}
      <div>
        <FormComment />
      </div>
      {/* hiển thị bình luận */}
      <div>
        {comments &&
          comments.slice(0, 10).map((comment) => {
            const fisterName = comment.user.name.charAt(0);
            return (
              <div className="flex my-2 items-center">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-blue-700 mr-3">
                  <p className="font-bold text-[50px] !m-0 !p-0">
                    {fisterName}
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 text-[17px] font-semibold">
                    {comment.user.name}
                  </p>
                  <p>{comment.content}</p>
                  <p>{getTimeDistance(comment.createdAt)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
