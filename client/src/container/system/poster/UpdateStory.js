import React from 'react'
import { Title, Arrange,Search,TableStory } from "../../../components/poster";
const UpdateStory = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text="Thùng rác"></Title>
        <div className="flex justify-between items-center">
          <Arrange />
          <Search/>
        </div>
        <TableStory text="needupdate"/>
      </div>
    </>
  )
}

export default UpdateStory