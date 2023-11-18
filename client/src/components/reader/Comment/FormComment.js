import React, { useEffect, useState } from "react";
import icons from "../../../ultis/icons";
const FormComment = () => {
  const { BsFillStarFill } = icons;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="py-7">
      <form className="flex flex-col items-start">
        <textarea
          name="query"
          className="w-[80%] h-[150px] focus:outline-none border p-4"
          placeholder="Viết bình luận ..."
        />
        <div className="flex gap-2 my-4">
          <p className="font-medium text-[18px]">Đánh giá:</p>
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={`p-0 m-0 ${
                    index <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <BsFillStarFill size={26} />
                </button>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className="border px-6 py-3 rounded-[5px] bg-blue-800 text-[18px] font-medium"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default FormComment;
