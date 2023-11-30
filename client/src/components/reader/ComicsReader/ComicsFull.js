import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apis from "../../../apis";
import {encodeWithSecret } from "../../../ultis/function";
const ComicsFull = () => {
  const [comicsFulls , setComicsFulls] =  useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicsFullData = await apis.getFullComicsStory();
        setComicsFulls(comicsFullData.data.comicsFull);
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
        TRUYỆN ĐÃ HOÀN THÀNH
      </h5>
      <Link to="#">Xem tất cả</Link>
    </div>

    {/* list comics */}
    <div className="grid grid-cols-5 gap-7 mt-5 justify-items-center">
      {comicsFulls.slice(0, 10).map((comicFull, index) => {
         const secret = "iloveyoubaby"
         const encodedIdStory = encodeWithSecret(comicFull.id , secret)
       
        return (
          <div key={index}>
            <img
              src={`http://localhost:5000/api/static/uploads/${comicFull.image}`}
              className="object-cover h-[300px] w-[220px] mb-2"
            />
            <Link to={`/reader/detailComic/${encodedIdStory}`} className="font-medium">
              {comicFull.name}
            </Link>
            <p className=" text-gray-500">
              Chapter : {comicFull.total_chapper}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default ComicsFull