import { useState } from "react"
import SingleTask from "./SingleTask"
const Tasks = ({tasks, onDelete, onToggle}) => {
    const showTaskText = (obj) => {
        return <SingleTask key={obj.id} task={obj} onDelete={onDelete} onToggle={onToggle}/>
    }
  return (
    <>
        {tasks.map(showTaskText)}
    </>
  )
}

export default Tasks
