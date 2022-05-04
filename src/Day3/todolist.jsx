import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {Todo} from './todo';

export const TodoList =()=>{
    const [task,setTask]=useState("");
    const [todos,setTodo]=useState([]);
   const[isLoggedin,setLoggedin]=useState(false);
    const handlerChange=(e)=>{
         setTask(e.target.value);
    }
 const handlerlogin=()=> setLoggedin(true);
// turnary operator
//     if(isLoggedin){
//       return (<div>
//           <div>first login from here</div>
//           <button onClick={handlerlogin}>Login</button>
//           </div>
//       )
//     }
 const handlerAdd=()=>{
     const taskrepo={
         title:task,
         status:"false",
         id:uuidv4(),
     }
     setTodo([...todos,taskrepo])
 }
const handlerDelete=(id)=>{
    var updatedtodos=todos.filter(item=>   item.id !==id)
    setTodo(updatedtodos);
   
}
const iserror=true;;
    return !isLoggedin ? (
        <><div>first login here</div>
        <button onClick={handlerlogin} >Login</button>
        </>
    ): !iserror ?(<>error occuring..</>):(
        <div>
        <h1>Todolist</h1>
        <input type={"text"} placefolder="write todo"  value={task} onChange={handlerChange} />
        <button onClick={handlerAdd} >Add</button>
         {todos.map((item)=>{
             return <Todo key={item.id} handlerDelete={handlerDelete} {...item} />
         })}
        </div>
    )
}