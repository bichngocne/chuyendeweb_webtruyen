import React from "react";
import icons from "../../ultis/icons";

const {FcSearch} = icons;

const Search = () => {

  return (
    <div className="flex w-[300px] h-[30px] border border-solid border-[#d5757557]">
      <div className="flex-none w-[250px]  items-center flex px-3 [font-family:'Inika-Regular',Helvetica] font-normal text-[#0000008a] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap ">
        <input placeholder="Nhập tìm kiếm ..." className="border-transparent focus:border-transparent !outline-none focus:ring-0 w-full" />
      </div>
      <div className="flex-auto bg-[#D53131] flex justify-center items-center">
        <FcSearch size={24}/>
      </div>
    </div>
  );
};

export default Search;
