import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import FormComment from "./FormComment";
// import { fetchAllComments } from "../../services/comment-service";
const Comments = () => {
  const sapxep = ["Mới nhât", "Cũ nhất"];

  const [comments, setComments] = useState(0);

  // useEffect(() => {
  //   fetchAllComments().then((response)=>{
  //   setComments(response.data);
  //   console.log(response.data);
  //  })
  // }, []);
  return (
    <div className="mt-[40px]">
      <div className="flex">
        <h3 className="font-medium text-[21px] border-b-[2px] border-black">
          BÌNH LUẬN
        </h3>
      </div>

      {/* số lượng bình luận , sắp xếp */}
      <div className="flex justify-between items-center border-b border-gray-500 pb-[15px]">
        <p className="text-blue-600 font-medium">4 bình luận</p>
        <div className="flex items-center">
          <p className="font-medium mr-3 text-[17px]">Sắp xếp :</p>
          <Dropdown
            options={sapxep}
            value={"Mới nhât"}
            placeholder="Select an option"
            className=""
            controlClassName="!pl-[20px] !pr-[20px] !flex !items-center gap-2"
            arrowClassName="!static"
            menuClassName="!max-h-[300px]"
            optionClassName=""
          />
        </div>
      </div>
      {/* form bình luận */}
      <div>
        <FormComment />
      </div>
      {/* hiển thị bình luận */}
      <div>Hiển thị bình luận

      </div>
    </div>
  );
};

export default Comments;
