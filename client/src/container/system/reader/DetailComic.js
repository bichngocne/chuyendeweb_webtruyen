import React, { useEffect, useState } from "react";
import { Footer, Header, Comments, ChapperListComics } from "../../../components/reader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import hinh from "../../../assets/images";
import icons from "../../../ultis/icons";
import {decodeWithSecret , encodeWithSecret } from "../../../ultis/function";
import * as apis from "../../../apis";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
const DetailComic = () => {
  const { FaStarOfLife } = icons;
  const [detailComic, setDetailComic] = useState([]);
  const [listChapper, setListChapper] = useState([]);
  const { storyId } = useParams();

  const secretKey ="iloveyoubaby"
  const decodedIdStory = decodeWithSecret(storyId, secretKey);
  useEffect(() => {
    const fetchData = async () => {
      const detailComicData = await apis.getComicById(decodedIdStory);
      setDetailComic(detailComicData.data.Comic);

      const story_id = detailComicData.data.Comic.id;
      const listChapperData = await apis.getAllChapperOfStory(story_id);
      setListChapper(listChapperData.data.chappers);
    };
    fetchData();
  }, [decodedIdStory]);

  const getTimeDistance = (createdAt) => {
    return formatDistanceToNow(new Date(createdAt), {
      locale: vi,
      addSuffix: true,
    });
  };
  return (
    <div>
      <div className="bg-[#0e2234]">
        <Header />
      </div>

      <div className="max-w-[1180px] mx-auto">
        {/* thông tin truyện */}
        <div className="mt-3">
          <div className="flex font-medium border-b">
            <p className=" border-b-[2px] border-black">THÔNG TIN TRUYỆN</p>
          </div>
          <div className="flex mt-3 gap-3">
            <div className="basis-1/5">
              <img
                src={`http://localhost:5000/api/static/uploads/${detailComic.image}`}
                className=""
              />
            </div>
            <div className="basis-4/5">
              <h3 className="font-medium text-[19px] uppercase text-center border-b border-black">
                {detailComic.name}
              </h3>
              <div>
                <p className="flex mt-2">
                  <p className="font-medium pr-2">Tác giả : </p>{" "}
                  {detailComic.author}
                </p>
                <p className="flex">
                  <p className="font-medium pr-2">Tình trạng : </p>
                  {detailComic.status_chapter === 1
                    ? "Đã hoàn thành"
                    : "Đang ra"}
                </p>
                <p>
                  <p className="font-medium">Nội dung : </p>
                  {detailComic.description}
                </p>
              </div>
            </div>
          </div>
         <ChapperListComics/>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto">
        <Comments />
      </div>
    </div>
  );
};

export default DetailComic;
