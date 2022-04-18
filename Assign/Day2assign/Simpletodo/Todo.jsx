import { useState } from "react";
import { TodoList } from "./todolist";
import './todo.css'

export const SimpleTodo=()=>{
const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);
const handlerchange=(e)=>{
    var temp=e.target.value;
    setTask(temp);
//  console.log(e.target.value);
}
const handleradd=()=>{
    setTodos([...todos,task]);
}
// console.log(todos)
  return(
      <div className="todoapp">
          <h2>Note your TODO</h2>
      <input type={"text"} className="inputbox" value={task} placeholder={"write your todo"} onChange={handlerchange} />
      <button  className="buttonadd" onClick={handleradd}>+</button>
      <div><TodoList data={todos} item={task}/></div>
      </div>
  )
}