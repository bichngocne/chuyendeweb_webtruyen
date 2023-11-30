import React, { useState } from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin,TablePendingAdmin } from "../../../components/admin";
const ListPendingAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách chờ duyệt"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin setSearchTerm={setSearchTerm}/>
            <ArrangeAdmin />
          </div>
        </div>
        <div>
        <TablePendingAdmin searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default ListPendingAdmin;
