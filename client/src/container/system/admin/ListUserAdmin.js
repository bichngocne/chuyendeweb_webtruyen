import React from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin, TableUserAdmin } from "../../../components/admin";
const ListUserAdmin = () => {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between px-[30px]">
          <TitleAdmin text="Danh sách người dùng"></TitleAdmin>
          <div className="flex items-center">
            <SearchAdmin />
            <ArrangeAdmin />
          </div>
        </div>
        <div>
        <TableUserAdmin/>
        </div>
      </div>
    </>
  );
};

export default ListUserAdmin;
