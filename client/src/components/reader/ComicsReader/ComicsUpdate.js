import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apis from "../../../apis";
import { formatDistanceToNow } from "date-fns";
import {encodeWithSecret } from "../../../ultis/function";
import { vi } from "date-fns/locale";
const ComicsUpdate = () => {
  const [comicsUpdates, setComicsUpdates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicsUpdateData = await apis.getUpdateComicsStory();
        setComicsUpdates(comicsUpdateData.data.comicsUpdate);
      } catch (error) {
        console.error("error fetch data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-between pt-3 border-b ">
        <h5 className="font-medium text-[19px] border-b border-black">
          TRUYỆN MỚI CẬP NHẬT
        </h5>
        <Link to="#">Xem tất cả</Link>
      </div>

      {/* list comics */}
      <div className="grid grid-cols-5 gap-7 mt-5 justify-items-center">
        {comicsUpdates.slice(0, 10).map((comicsUpdate, index) => {
            const secret = "iloveyoubaby"
            const encodedIdStory = encodeWithSecret(comicsUpdate.id , secret)
          
          return (
            <div key={index}>
              <img
                src={`http://localhost:5000/api/static/uploads/${comicsUpdate.image}`}
                className="object-cover h-[300px] w-[220px] mb-2"
              />
              <Link to={`/reader/detailComic/${encodedIdStory}`}  className="font-medium">
                {comicsUpdate.name}
              </Link>
              <p className=" text-gray-500">
                Chapter : {comicsUpdate.total_chapper}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsUpdate;
