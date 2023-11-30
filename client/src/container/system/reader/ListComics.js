import React from "react";
import {
  ComicsFull,
  ComicsUpdate,
  Header,
  HotComics,
} from "../../../components/reader";

const ListComics = () => {
  return (
    <div>
      <div className="bg-[#0e2234]">
        <Header />
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <HotComics />
        </div>
        <div>
          <ComicsUpdate />
        </div>
        <div>
          <ComicsFull />
        </div>
      </div>
    </div>
  );
};

export default ListComics;
