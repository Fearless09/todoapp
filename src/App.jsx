import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish homework',
      description: 'Complete the math and science assignments',
      status: true
    },
    {
      id: 2,
      title: 'Go grocery shopping',
      description: 'Buy fruits, vegetables, and milk',
      status: false
    },
    {
      id: 3,
      title: 'Call mom',
      description: 'Discuss plans for the weekend',
      status: true
    },
    {
      id: 4,
      title: 'Prepare presentation',
      description: 'Gather data and create slides',
      status: false
    },
    {
      id: 5,
      title: 'Exercise',
      description: 'Go for a jog or hit the gym',
      status: true
    }
  ])
  const [displayAddTask, setDisplayAddTask] = useState(false)

  // Load Task From Local Storage
  function loadFromLocalStorage() {
    const storeTasks = localStorage.getItem('tasks');
    if (storeTasks) {
      setTasks(JSON.parse(storeTasks));
    }
  }

  useEffect(() => {
    loadFromLocalStorage()
  }, [])

  // Save to Local Storage
  function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  useEffect(() => {
    window.addEventListener('beforeunload', saveToLocalStorage)

    return () => {
      window.removeEventListener('beforeunload', saveToLocalStorage)
    }

  }, [tasks])

  // Add Task
  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // Toggle Status
  function toggleStatus(taskId) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: !task.status } : task))
  }

  return (
    <>
      <div className='container mt-5 p-3 pb-2'>
        <Header onDisplayAddTask={() => setDisplayAddTask(!displayAddTask)} autoClass={displayAddTask ? 'btn-danger' : 'btn-primary'} text={displayAddTask ? 'Hide Add Task' : 'Add Task'} />
        {displayAddTask && <AddTask onAddTask={addTask} />}
        {tasks.length > 0 ?
          <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleStatus={toggleStatus} />
          : <p className='lead mt-3 text-center'>No Tasks</p>
        }
      </div>
      <Footer />
    </>
  )
}

export default App
