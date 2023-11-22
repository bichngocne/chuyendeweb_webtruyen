import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../../ultis/icons";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import * as apis from "../../../apis";

const { MdOutlineDelete } = icons;
const TableAdmin = (props) => {
  var columns;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.storyAdmin);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const updatedData = await Promise.all(
          data.map(async (row, index) => {
            try {
              const userId = row.id_user;
              const response = await apis.apiGetUserOfStoryByIdAdmin(userId);
              const userName = response.data.foundUser.name; // Thay "name" bằng trường tên người dùng của bạn
              return { ...row, STT: index + 1, user_name: userName };
            } catch (error) {
              console.error("Error fetching user data:", error);
              return { ...row, STT: index + 1, user_name: "Error" };
            }
          })
        );
        setRowsWithSTT(updatedData);
      }
    };

    fetchData();
  }, [data]);
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
      headerName: "Tên truyện",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "author",
      headerName: "Tác giả",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "user_name",
      headerName: "Người đăng",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status_approve",
      headerName: "Trạng thái duyệt",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const status = params.value;
        return status ? "Đã phê duyệt" : "Chưa phê duyệt";
      },
    },
    {
      field: "createdAt",
      headerName: "Ngày đăng",
      width: 100,
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
      renderCell: (params) => (
        <div className="flex gap-4 items-center justify-center">
          <Link to={`detail-pending-admin/${params.row.id}`} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
                viewBox="0 0 17 16"
              >
                <path fill="url(#viewa)" d="M.417 0h16.25v16H.417z" />
                <defs>
                  <pattern
                    id="viewa"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use
                      href="#viewb"
                      transform="matrix(.01067 0 0 .01 -.067 0)"
                    />
                  </pattern>
                  <image
                    id="viewb"
                    width="100"
                    height="100"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            Xem
          </Link>
          <MdOutlineDelete size={24} /> Xóa
        </div>
      ),
      width: 170,
    },
  ];

  useEffect(() => {
    dispatch(actions.getStoriesPendingAdmin());
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
