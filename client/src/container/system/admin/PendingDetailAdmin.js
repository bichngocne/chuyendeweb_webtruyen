import React from "react";
import { TitleAdmin,StoryAdmin,PendingAdmin } from "../../../components/admin";
const PendingDetailAdmin = () => {
  return (
    <>
    <div>
      <div className="flex flex-row justify-between px-[30px]">
        <TitleAdmin text="Thông tin chi tiết truyện phê duyệt"></TitleAdmin>
      </div>
      <div>
        <PendingAdmin/>
      </div>
      </div>
    </>
  );
};

export default PendingDetailAdmin;