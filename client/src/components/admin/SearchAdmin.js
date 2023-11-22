import React from "react";

const SearchAdmin = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex w-[300px] h-[30px] border border-solid rounded-[15px] mr-[30px]">
      <div className="flex-none w-[250px]  items-center flex px-3 [font-family:'Inika-Regular',Helvetica] font-normal text-[#0000008a] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap ">
        <input
          placeholder="Nhập tìm kiếm ..."
          onChange={handleSearch}
          className="border-transparent focus:border-transparent !outline-none focus:ring-0 w-full"
        />
      </div>
      <div className="flex-auto flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path fill="url(#searcha)" d="M.336 0h20v20h-20z" />
          <defs>
            <pattern
              id="searcha"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use href="#searchb" transform="scale(.01)" />
            </pattern>
            <image
              id="searchb"
              width="100"
              height="100"
              href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SearchAdmin;
