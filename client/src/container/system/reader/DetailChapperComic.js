import React from "react";
import { Header, RedirectChaper, RedirectChaperComics } from "../../../components/reader";
import { useState, useEffect } from "react";
import * as apis from "../../../apis";
import {decodeWithSecret , encodeWithSecret } from "../../../ultis/function";
import { useParams } from "react-router-dom";
const DetailChapperComic = () => {
  const [listFile, setListFile] = useState([]);
  const { chapperId } = useParams();
  const secretKey ="iloveyoubaby"
  const decodedchapperId = decodeWithSecret(chapperId, secretKey);
  useEffect(() => {
    const fetchData = async () => {
      const listFileData = await apis.getFileOfChapper(decodedchapperId);
      setListFile(listFileData.data.ListFile);
    };
    fetchData();
  }, [decodedchapperId]);
  return (
    <div>
      <div className="bg-[#0e2234]">
        <Header />
      </div>
      <div className=" bg-gray-400">
        <div className="max-w-[1000px] mx-auto">
          <div>
            <RedirectChaperComics />
          </div>
          <div>
            {listFile.length > 0 ? (
              listFile.map((file) => {
                return (
                  <img
                    src={`http://localhost:5000/api/static/uploads/${file.name}`}
                    className="w-[1200px]"
                  />
                );
              })
            ) : (
              <p> không có dữ liệu </p>
            )}
          </div>
          <div>
            <RedirectChaperComics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChapperComic;
