import { useState } from "react"
import SingleTask from "./SingleTask"
const Tasks = ({tasks}) => {
    const showTaskText = (obj) => {
        return <SingleTask key={obj.id} task={obj}/>
    }
  return (
    <>
        {tasks.map(showTaskText)}
    </>
  )
}

export default Tasks
