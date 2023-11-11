import React from 'react'
import { Title, Arrange,Search,TableStory } from "../../../components/poster";
const UpdateStory = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Truyện cần cập nhật"></Title>
        <div className="flex justify-between items-center">
          <Arrange text="Sắp xếp"/>
          <Search/>
        </div>
        <TableStory text="needupdate"/>
      </div>
    </>
  )
}

export default UpdateStory