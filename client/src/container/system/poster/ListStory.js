import React from "react";
import { Title, Arrange,Search,TableStory } from "../../../components/poster";
import path from "../../../ultis/path";
const ListStory = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Danh sách truyện"></Title>
        <div className="flex justify-between items-center">
          <Arrange />
          <Search/>
        </div>
        <TableStory/> 
      </div>
    </>
  );
};

export default ListStory;
