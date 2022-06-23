import Header from './components/Header'
import Tasks from './components/Tasks';
import About from './components/About';
import { useState , useEffect } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {


  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:8000/tasks')
  const data = await res.json()
  return data
}

// Fetch a single Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`)
  const data = await res.json()
  return data
}

// delete tasks
const deleteTask = async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=> task.id !== id))
  const data = await res.json()
  return data
}

// add task
const addTask = async (task) => {
  const res = await fetch('http://localhost:8000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(task)
})
  const data = await res.json()
  setTasks([...tasks, data])

}

// patch task
// const patchTask = async (task) => {
//   const res = await fetch(`http://localhost:8000/tasks/${task.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(task)
//   })
//   const data = await res.json()
//   setTasks(tasks.map((task)=> task.id === data.id ? data : task))
// }


const toggleRemainder = async (id) => {
  const getTask = await fetchTask(id)
  const updatedTask = {...getTask, reminder: !getTask.reminder}
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })
  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? {
    ...task, reminder : data.reminder
  } : task))

}
const [showAddButton, setShowAddButton] = useState(false);

  return (
  // <Router>
  <div className="App">
      <Header onAdd={()=>setShowAddButton(!showAddButton)} showAdd={showAddButton}/>
      {showAddButton && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle={toggleRemainder} /> : 'No Tasks. Cheers!'}

      {/* <Route path="/" exact render={(props) => (
        <>
      {showAddButton && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle={toggleRemainder} /> : 'No Tasks. Cheers!'}
        </>
      )} /> */}
      {/* <Route path="/about" component={About} />
      <Footer/> */}
    </div>
    // </Router>
  );
}

export default App;
