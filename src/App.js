import Header from './components/Header'
import Tasks from './components/Tasks';

import { useState } from 'react';
import AddTask from './components/AddTask';
const App = () => {


  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Learning React",
        day: "June 23",
        reminder: true,
    },
    {
        id: 2,
        text: "Job",
        day: "June 23",
        reminder: false,
    },
    {
        id: 3,
        text: "Rest",
        day: "June 23",
        reminder: true,
    },
])
// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000)+1;
  const newTask = {...task, id: id};
  setTasks([...tasks, newTask]);
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {
    ...task, reminder : !task.reminder
  } : task))
}
const [showAddButton, setShowAddButton] = useState(false);

  return (
    <div className="App">
      <Header onAdd={()=>setShowAddButton(!showAddButton)} showAdd={showAddButton}/>
      {showAddButton && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle={toggleRemainder} /> : 'No Tasks. Cheers!'}
    </div>
  );
}

export default App;
