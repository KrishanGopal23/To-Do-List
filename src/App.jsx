import { useState } from "react"


function App() {

  const [task,settask] = useState("")
  const [tasks,settasks] = useState([])

  function handleChange(e){
    settask(e.target.value)
  }
  
  function handleAdd(e){
    e.preventDefault()
    if(task.trim() === "") return;
    settasks([...tasks, { text:task,completed:false }]);
    settask("")
  }

  function handleCheck(index) {
    // toggle completed
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    settasks(updatedTasks);
  }

  function handleDelete(index){
    const  updatedTasks = tasks.filter((t, i) =>{
      return i !== index
    }
      )
      settasks(updatedTasks);

  }

  
  return (
    

    <>

     <h1 className="text-3xl font-extrabold flex justify-center m-4 bg-blue-200 p-4 rounded-3xl" >To-Do List</h1>

      <form action="submit" className="flex gap-4 w-full justify-center">

        <input type="text" value={task} className="border-[2px] rounded-xl w-[70%] p-4 text-xl " placeholder="Add Note.. " onChange={handleChange}/>

        <button className="bg-blue-500 p-4 px-8 rounded-3xl cursor-pointer w-30 " onClick={handleAdd}>Add</button>

      </form>

      <ul>
        { 
          tasks.map((task, index) => (
            <li key={index} 
          className="text-3xl bg-blue-100 m-4 p-2 px-4 rounded-2xl relative flex justify-between items-start "
          >
            <p className={`whitespace-normal break-words w-[75%] ${
                task.completed ? "line-through text-gray-500" : ""
              }`} >{task.text}</p> 

            <div className="text-xs flex gap-x-2">
              <button className="bg-blue-500 p-2 px-4 rounded-3xl cursor-pointer" onClick={() => handleCheck(index)} >{task.completed ?'uncheck' :'check'}</button>
              <button className="bg-blue-500 p-2 px-4 rounded-3xl cursor-pointer" onClick={() => handleDelete(index)}>Delete</button>
            </div>
            
            </li> 
        ))
          }
      </ul>
    </>
  )
}

export default App
