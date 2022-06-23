import { useState } from "react"
import SingleTask from "./SingleTask"
const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
        {tasks.map((task, index) => (<SingleTask key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Tasks
