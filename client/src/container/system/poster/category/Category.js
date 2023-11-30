import React, { useEffect, useState } from "react";
import * as apis from "../../../../apis";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../../../ultis/icons";
import { Title, Arrange, Search } from "../../../../components/poster";
import { Outlet } from "react-router-dom";
const { BiEditAlt } = icons;
const columns = [
  { field: "STT", headerName: "STT", width: 100 },
  { field: "name", headerName: "Tên thể loại", width: 530 },
  {
    field: "tacvu",
    headerName: "Tác vụ",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    type: "number",
    width: 200,
    renderCell: () => (
      <div className="flex gap-4 items-center">
        <span>
          <BiEditAlt size={24} />
        </span>
      </div>
    ),
  },
];

const Category = () => {
  const dispatch = useDispatch();
  const [rowsWithSTT, setRowsWithSTT] = useState([]);
  // const { data } = useSelector((state) => state.app);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await apis.getAllCategories();
      console.log(response);
      if (response.status === 200) {
        setRowsWithSTT(response.data.categories);
      }
    };
    fetchCategory();
  }, []);
  // console.log(data);
  // console.log(text);
  useEffect(() => {
    if (rowsWithSTT) {
      const updatedData = rowsWithSTT.map((row, index) => ({
        ...row,
        STT: index + 1,
      }));
      setRowsWithSTT(updatedData);
    }
  }, [rowsWithSTT]);
  return (
    <>
      <div className="flex flex-col">
        <Title text="Danh sách thể loại truyện"></Title>
        <div className="flex justify-between items-center">
          <Arrange text="Sắp xếp"/>
          <Search />
        </div>
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
      </div>
    </>
  );
};

export default Category;