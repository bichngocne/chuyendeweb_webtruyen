import React, { useState } from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin, TableUserAdmin } from "../../../components/admin";
const ListUserAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách người dùng"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin setSearchTerm={setSearchTerm}/>
            <ArrangeAdmin />
          </div>
        </div>
        <div>
        <TableUserAdmin searchTerm={searchTerm}/>
        </div>
      </div>
    </>
  );
};

export default ListUserAdmin;
