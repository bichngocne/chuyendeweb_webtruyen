import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../ultis/icons";
import table from "../../assets/css/table.css";
import * as actions from "../../store/actions";
import { createSlug, encryptData, callDetail } from "../../ultis/function";
const { BiEditAlt, MdOutlineDelete, RiDeviceRecoverLine } = icons;

const TableStory = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.story);
  const columns = [
    { field: "STT", headerName: "STT", type: "number", width: 50 },
    {
      field: "name",
      headerName: "Tên truyện",
      width: 400,
      renderCell: (params) => callDetail(params, params.row.name),
    },
    {
      field: "total_chapper",
      headerName: "Số chương",
      type: "number",
      width: 160,
    },
    {
      field: "status_approve",
      headerName: "Trạng thái",
      type: "number",
      width: 130,
      valueGetter: (params) => (params.row.status_approve ? "Full" : "Đang ra"),
    },
    {
      field: "classifi",
      headerName: "Phân loại",
      type: "number",
      width: 130,
      valueGetter: (params) => (params.row.classifi === 0 ? "Truyện chữ" : "Truyện tranh"),
    },
    {
      field: "tacvu",
      headerName: "Tác vụ",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      type: "number",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-4 items-center">
          {iconsChange(params)}
          <span>
            <MdOutlineDelete size={24} />
          </span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (props.text === "trashcanstory") {
    } else if (props.text === "liststory") {
      dispatch(actions.getStories());
    } else if (props.text === "needupdate") {
      // Xử lý logic cho trường hợp "needupdate" ở đây
    } else if (props.text === "pendingstory") {
      // Xử lý logic cho trường hợp "pendingstory" ở đây
    }
  }, []);
  const [rowsWithSTT, setRowsWithSTT] = useState([]);
  useEffect(() => {
    if (props.text === "trashcanstory") {
    } else if (props.text === "liststory") {
      if (data) {
        const updatedData = data.map((data, index) => ({
          ...data,
          STT: index + 1,
        }));
        setRowsWithSTT(updatedData);
      }
    } else if (props.text === "needupdate") {
    } else if (props.text === "pendingstory") {
      // Xử lý logic cho trường hợp "pendingstory" ở đây
    }
  }, [data, props.text]);
  var iconsChange;
  if (props.text === "pendingstory") {
    iconsChange = "";
  } else if (props.text === "trashcanstory") {
    iconsChange = (params) => (
      <span>
        <RiDeviceRecoverLine size={24} />
      </span>
    );
  } else {
    iconsChange = (params) =>
      callDetail(
        params,
        <span>
          <BiEditAlt size={24} />
        </span>
      );
  }

  return (
    <div className="pt-[35px]">
      <div style={{ height: 420, width: "100%" }}>
        <DataGrid
          rows={rowsWithSTT}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default TableStory;
