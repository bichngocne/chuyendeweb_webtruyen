import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import icons from "../../../ultis/icons";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";

const { MdOutlineDelete } = icons;
const TableAdmin = ({ searchTerm }) => {
  var iconsChange;
  var columns;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categoryAdmin);
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
        headerName: "Tên thể loại",
        width: 800,
        align: "center",
        headerAlign: "center",
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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path fill="url(#edita)" d="M0 .333h21.67v21.333H0z" />
                <defs>
                  <pattern
                    id="edita"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use
                      href="#editb"
                      transform="matrix(.00984 0 0 .01 .008 0)"
                    />
                  </pattern>
                  <image
                    id="editb"
                    width="100"
                    height="100"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiElEQVR4nO2dsYvUQBhHn1iICFoI2mhrIYLCNeafkKtsLLQSLMQDKzsbRbBSsBSsLdTWRgQVGxtRK0GuthDl5Bo9IoGxPG43m9n8dvc9mG6TnczLZPN9mW8DIiIiIiIiIiKLxCHgJvAe2AK2gU/AXeDY2J1bNc4Bm0C7S/sFXBi7k6tCUwa83aPtAJfH7uyy00woQymBMpQSKEMpgTKUEihDKYEylBIo43/7a5ySJaQt+zeiD5NyZ5oOCdWlfHSQs6T87tEfAdaAHxWEdPuUoJnyrm9nlpETAVI2KhzXQnK+DOztEaV8Aw5WOLaFldGWNoaUbtuzFY5taX6c7w24r0lkdCfFyrO2xwDOQ4oyphy4mlKU0fMsriFFGTP++A4pRRkD3QkNIUUZA8cKs0hRxi5xxqytb5zStZWnqZSZ7TNTVp6m8rMLpYQ93WuVkiWjVUqejFYpeTJapeTJaMv393nItXQ0ITJMoaOMKBpnRg6NMnJolJGDMoJQRhDKCEIZQSgjCGUEoYwglBGEMoJQRhDKCEIZQSgjCGUEoYwglBFEtyrjFfC1/CnkWAsSmrEHIpEjwH1lZLEf+O7MyOK1l6ksnrmILYsnrijM4oF3U1l0NXuutQ3ihgufs7hk0JfFGSPw+XF0ws89Nx1SnwPlrTOTFrKcBi4C14BbpcL1EfAYeFHyX+amZmB94OqifcBDE4X9eVqh5OuUWdt+HC5vKRu6Dq+bJT9NoU/PlYrFkR8ssJyelxUrVk/OsO1K0r1y4Y9lxIuXCrG2e068teA+i60ps7ebU0T00oMvE0jYLnHKeonoZYRb3p1yObta4hSZs5TP5fL1BrgOHJ9nB0REREREREREmBv/ACooBi2txpOLAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>{" "}
            Sửa đổi
            <MdOutlineDelete size={24} /> Xóa
          </div>
        ),
        width: 200,
      },
    ];

  useEffect(() => {
      dispatch(actions.getCategories());
  }, []);

  const [filteredData, setFilteredData] = useState([]);
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

    function removeDiacritics(str) {
      const withoutDiacritics = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return withoutDiacritics.replace(/[^\w\s]/gi, "");
  }
      useEffect(() => {
        // Lọc dữ liệu khi giá trị tìm kiếm thay đổi
        const updatedFilteredData = rowsWithSTT.filter((data) =>
          Object.values(data).some(
            (value) =>
              value &&
              typeof value === "string" &&
              removeDiacritics(value.toLowerCase()).includes(removeDiacritics(searchTerm.toLowerCase()))
          )
          
        );
        setFilteredData(updatedFilteredData);
      }, [searchTerm, rowsWithSTT]);
    return (
      <div className="px-[35px] py-[15px] [font-family:'Roboto-Regular',Helvetica]">
        <div className="h-[605px] w-full flex items-center bg-[#d9d9d9] rounded-lg">
          <DataGrid
          rows={filteredData}
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
  }
export default TableAdmin;
