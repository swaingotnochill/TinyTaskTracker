import Header from './components/Header'
import Tasks from './components/Tasks';

import { useState } from 'react';
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
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
