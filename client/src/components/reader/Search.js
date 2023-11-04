import React from "react";
import icon from "../../ultis/icons"

const Search = () => {

    const {BiSearchAlt} = icon
  return(
     <div className="">
        <form className="flex bg-white items-center">
            <input className="text-black outline-none p-[5px]" placeholder="Tìm kiếm ....." />
            <BiSearchAlt size={24}/>
        </form>
     </div>
  );
};
export default Search;
