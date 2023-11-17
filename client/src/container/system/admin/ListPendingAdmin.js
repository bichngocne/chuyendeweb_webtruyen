import React, { useEffect } from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin,TablePendingAdmin } from "../../../components/admin";
const ListPendingAdmin = () => {

  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách chờ duyệt"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin />
            <ArrangeAdmin />
          </div>
        </div>
        <div>
        <TablePendingAdmin/>
        </div>
      </div>
    </>
  );
};

export default ListPendingAdmin;
