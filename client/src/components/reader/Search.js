import React, { useEffect, useState } from "react";
import icon from "../../ultis/icons";
import * as apis from "../../apis";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchItems, setSearchItems] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { BiSearchAlt } = icon;
  const [showResults, setShowResults] = useState(false);
  const fetchData = (value) => {
    apis
      .getAllStoryR()

      .then((res) => {
        // console.log(res);
        if (res.status !== 200) {
          throw new Error(`Lỗi HTTP! Trạng thái: ${res.status}`);
        }
        // Truy cập dữ liệu từ res.data.stories
        const stories = res.data.stories;
        const filteredResults = stories.filter((item) =>
          formatTitle(item.name)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        );

        setSearchResults(filteredResults);
        setShowResults(filteredResults.length > 0);
        console.log(filteredResults);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
      });
  };
  const handleChange = (value) => {
    setSearchItems(value);
    fetchData(value);
  };

  const formatTitle = (name) => {
    return name
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  return (
    <div className="">
      <form className="flex bg-white items-center">
        <input
          className="text-black outline-none py-[5px] px-3"
          placeholder="Tìm kiếm ....."
          value={searchItems}
          onChange={(e) => handleChange(e.target.value)}
        />
        <BiSearchAlt size={24} />
      </form>

      <div className="absolute bg-white mt-1 z-10 w-[100%] flex flex-col">
        {searchItems && searchResults.length > 0
          ? searchResults.slice(0, 10).map((result) => (
                <Link to={`/story/${result.id}`} className="border-b px-3 pt-[5px]" >{formatTitle(result.name)}</Link>
            ))
          : searchItems && <p>Không có truyện mà bạn muốn tìm</p>}
      </div>
    </div>
  );
};
export default Search;
