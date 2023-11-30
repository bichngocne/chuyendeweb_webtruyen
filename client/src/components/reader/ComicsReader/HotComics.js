import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apis from "../../../apis";
import {encodeWithSecret } from "../../../ultis/function";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
const HotComics = () => {
  const [hotComics, setHotComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotComicsData = await apis.getHotComicsStory();
        setHotComics(hotComicsData.data.hotComics);
      } catch (error) {
        console.error("error fetch data", error);
      }
    };
    fetchData();
  }, []);
  const getTimeDistance = (createdAt) => {
    return formatDistanceToNow(new Date(createdAt), {
      locale: vi,
      addSuffix: true,
    });
  };
  return (
    <div>
      <div className="flex justify-between pt-3 border-b ">
        <h5 className="font-medium text-[19px] border-b border-black">
          TRUYỆN ĐANG HOT
        </h5>
        <Link to="#">Xem tất cả</Link>
      </div>

      {/* list comics */}
      <div className="grid grid-cols-5 gap-7 mt-5 justify-items-center">
        {hotComics.slice(0, 10).map((hotComic , index) => {
          const secret = "iloveyoubaby"
          const encodedIdStory = encodeWithSecret(hotComic.id , secret)
        
          return (
            <div key={index}>
              <img
                src={`http://localhost:5000/api/static/uploads/${hotComic.image}`}
                className="object-cover h-[300px] w-[220px] mb-2"
              />
             <Link to={`/reader/detailComic/${encodedIdStory}`} className="font-medium">{hotComic.name}</Link>
             <div className="flex gap-2">
                <p className="text-[15px] text-gray-500">Chapter : {hotComic.total_chapper}</p>
                <p className="text-[15px] text-blue-600">{getTimeDistance(hotComic.createdAt)}</p>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotComics;
