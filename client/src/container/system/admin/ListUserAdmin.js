import React from "react";
import { TitleAdmin, ArrangeAdmin,SearchAdmin,TableAdmin } from "../../../components/admin";
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
          <TableAdmin text="listuseradmin" />
        </div>
      </div>
    </>
  );
};

export default ListUserAdmin;
