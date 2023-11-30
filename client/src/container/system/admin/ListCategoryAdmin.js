import React, { useState } from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin,TableCategoryAdmin } from "../../../components/admin";
const ListCategoryAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div>
      <div className="flex flex-row justify-between px-[30px]">
        <TitleAdmin text="Danh sách thể loại"></TitleAdmin>
        <div className="flex items-center">
          <SearchAdmin setSearchTerm={setSearchTerm}/>
          <ArrangeAdmin />
        </div>
      </div>
      <div>
      <TableCategoryAdmin  searchTerm={searchTerm} />
      </div>
      </div>
    </>
  );
};

export default ListCategoryAdmin;
