import React from 'react'
import { Title, Arrange,Search,TableStory } from "../../../components/poster";
const TrashcanStory = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Thùng rác"></Title>
        <div className="flex justify-between items-center">
          <Arrange text="Sắp xếp"/>
          <Search/>
        </div>
        <TableStory text="trashcanstory"/>
      </div>
    </>
  )
}

export default TrashcanStory