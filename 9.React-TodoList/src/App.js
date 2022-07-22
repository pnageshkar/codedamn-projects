import './App.css';
import { useState,useRef } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const inputTask = useRef(null)

  const addTask = ()=> {
    setTodoList([...todoList,{task:currentTask , completed:false}])
    inputTask.current.value = ""
    setCurrentTask("")
  }
  const deleteTask =(taskTodelete)=> {
    setTodoList(todoList.filter((task)=> task.task !== taskTodelete))
  }

  const completeTask = (taskToComplete) => {
    setTodoList ( todoList.map((task) => {
      return ( task.task === taskToComplete
        ? {task:taskToComplete , completed:true}
        : {task:task.task , completed:task.completed}

      )
    }))

  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          ref={inputTask}
          name=""
          id=""
          placeholder="Task"
          onChange={(e) => setCurrentTask(e.target.value)}
          onKeyDown = {(e) => {
            if (e.keyCode === 13)
             addTask()
            }}
          value={currentTask}
        />
        <button onClick={addTask}>Add Task</button>
        <hr />
        <ul>
          {
            todoList.map((value,index)=> {
              return (
              <div id="task">
                <li key={index}>{value.task}</li>
                <button onClick={()=> {completeTask(value.task)}}>Mark Complete</button>
                <button onClick={()=> {deleteTask(value.task)}}>X</button>
                { value.completed ? (
                  <h2>Task Completed</h2>
                ) : (
                  <h2>Task Pending</h2>
                )

                }
              </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
