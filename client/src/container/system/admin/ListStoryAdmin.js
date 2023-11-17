import React from "react";
import {
  TitleAdmin,
  ArrangeAdmin,
  SearchAdmin,
  TableAdmin,
} from "../../../components/admin";
const ListStoryAdmin = () => {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách truyện"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin />
            <ArrangeAdmin />
          </div>
        </div>
        <div>
          <TableAdmin text="liststoryadmin" />
        </div>
      </div>
    </>
  );
};

export default ListStoryAdmin;
