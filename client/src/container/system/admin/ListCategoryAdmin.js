import React from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin,TableCategoryAdmin } from "../../../components/admin";
const ListCategoryAdmin = () => {
  return (
    <>
    <div>
      <div className="flex flex-row justify-between px-[30px]">
        <TitleAdmin text="Danh sách thể loại"></TitleAdmin>
        <div className="flex items-center">
          <SearchAdmin/>
          <ArrangeAdmin />
        </div>
      </div>
      <div>
      <TableCategoryAdmin />
      </div>
      </div>
    </>
  );
};

export default ListCategoryAdmin;
