import React, { useState } from "react";
import {
  TitleAdmin,
  ArrangeAdmin,
  SearchAdmin,
  TableStoryAdmin,
} from "../../../components/admin";
const ListStoryAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách truyện"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin setSearchTerm={setSearchTerm}/>
            <ArrangeAdmin />
          </div>
        </div>
        <div>
          <TableStoryAdmin searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default ListStoryAdmin;
