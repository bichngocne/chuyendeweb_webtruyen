import React, { useEffect, useState } from "react";
import { Footer, Header, Comments } from "../../../components/reader";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import hinh from "../../../assets/images";
import icons from "../../../ultis/icons";
import {decodeWithSecret , encodeWithSecret } from "../../../ultis/function";
import * as apis from "../../../apis";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
const ChapperListComics = () => {
  const { FaStarOfLife } = icons;
  const [listChapper, setListChapper] = useState([]);
  const { storyId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [chappersPerPage] = useState(14);
  const secretKey ="iloveyoubaby"
  const decodedIdStory = decodeWithSecret(storyId, secretKey);
  useEffect(() => {
    const fetchData = async () => {
      const listChapperData = await apis.getAllChapperOfStory(decodedIdStory);
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
  const indexOfLastChapper = currentPage * chappersPerPage;
  const indexOfFirstChapper = indexOfLastChapper - chappersPerPage;
  const currentChappers = listChapper.slice(
    indexOfFirstChapper,
    indexOfLastChapper
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* danh sách chương */}
      <div className="mt-4">
        <h3 className="flex font-medium text-[20px] ">
          <p className="border-b border-black">DANH SÁCH CHƯƠNG</p>
        </h3>
        <div className="mt-4">
          {listChapper.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-10">
              {currentChappers.map((chapper) => {
                  const secret = "iloveyoubaby"
                  const encodedIdChapper = encodeWithSecret(chapper.id , secret)
                const encodedIdStory = encodeWithSecret(decodedIdStory , secret)
                return(
                <div
                  key={chapper.id}
                  className="flex items-center justify-between"
                >
                  <Link to={`/reader/detailComic/${encodedIdStory}/${encodedIdChapper}`} className="flex py-1">
                    <FaStarOfLife size={18} />
                    <p className="mr-2 font-medium pl-2">
                      Chương {chapper.number_chapper}
                    </p>
                    <p>{chapper.title}</p>
                  </Link>
                  <p className="text-blue-600">
                    {getTimeDistance(chapper.createdAt)}
                  </p>
                </div>
              )})}
            </div>
          ) : (
            <p>Hiện truyện vẫn chưa có chương </p>
          )}

          {/* Hiển thị phân trang */}
          <div className="mt-4">
            <ul className="flex  justify-center">
              {Array.from({
                length: Math.ceil(listChapper.length / chappersPerPage),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    currentPage === index + 1 ? "font-bold bg-blue-600" : ""
                  } border px-3 `}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapperListComics;
