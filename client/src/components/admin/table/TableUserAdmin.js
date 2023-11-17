import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../../ultis/icons";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";

const { MdOutlineDelete } = icons;
const TableAdmin = (props) => {
  var iconsChange;
  var columns;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userAdmin);
  columns = [
    {
      field: "STT",
      headerName: "STT",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Tên người dùng",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "id_role",
      headerName: "Phân quyền",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const role = params.value;
        return role == 1 ? "Reader" : "Poster";
      },
    },
    {
      field: "createdAt",
      headerName: "Ngày Đăng ký",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const date = new Date(params.value);
        const formattedDate = date.toLocaleDateString("vi-VN");
        return formattedDate;
      },
    },
    {
      field: "tacvu",
      headerName: "Tác vụ",
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: () => (
        <div className="flex gap-4 items-center">
          {iconsChange}
          <MdOutlineDelete size={24} /> Xóa
        </div>
      ),
      width: 200,
    },
  ];

  useEffect(() => {
    //gọi hàm get
    dispatch(actions.getUsers());
  }, []);

  const [rowsWithSTT, setRowsWithSTT] = useState([]);
  useEffect(() => {
    if (data) {
      const updatedData = data.map((row, index) => ({
        ...row,
        STT: index + 1,
      }));
      setRowsWithSTT(updatedData);
    }
  }, [data]);

  return (
    <div className="px-[35px] py-[15px] [font-family:'Roboto-Regular',Helvetica]">
      <div className="h-[605px] w-full flex items-center bg-[#d9d9d9] rounded-lg">
        <DataGrid
          rows={rowsWithSTT}
          rowHeight={38}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5]}
        />
      </div>
    </div>
  );
};
export default TableAdmin;
