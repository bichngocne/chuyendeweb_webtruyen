import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../ultis/icons";
import table from "../../assets/css/table.css";
const { BiEditAlt, MdOutlineDelete, RiDeviceRecoverLine } = icons;

const TableStory = (props) => {
  var iconsChange;
  if (props.text === "pendingstory") {
    iconsChange = ''
  } else if (props.text === "trashcanstory") {
    iconsChange = (
      <span>
        <RiDeviceRecoverLine size={24} />
      </span>
    );
  }  else {
    iconsChange = (
      <span>
        <BiEditAlt size={24} />
      </span>
    );
  }
  const columns = [
    { field: "STT", headerName: "STT", type:'number',width: 50 },
    { field: "firstName", headerName: "Tên truyện", width: 480 },
    { field: "lastName", headerName: "Số chương", width: 130 },
    {
      field: "age",
      headerName: "Trạng thái",
      type: "number",
      width: 130,
    },
    {
      field: "tacvu",
      headerName: "Tác vụ",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      type: "number",
      width: 200,
      renderCell: () => (
        <div className="flex gap-4 items-center">
          {iconsChange}
          <span>
            <MdOutlineDelete size={24} />
          </span>
        </div>
      ),
    },
  ];
  var rows;
  if (props.text === "trashcanstory") {
    rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    ];
  } else if (props.text === "liststory") {
    rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
  } else if (props.text === "needupdate") {
    rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
  }else if (props.text === "pendingstory") {
    rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 }
    ];
  }

  const rowsWithSTT = rows.map((row, index) => ({ ...row, STT: index + 1 }));
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
