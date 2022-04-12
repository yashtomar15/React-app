import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const StoreTodo =({data,todo,set})=>{
    // const [todo,setTodo]=useState("")
    const task={
        title:todo,
        status:false,
        id:uuidv4()
    }
     return( 
        <>
        <input placeholder="write your todo" value={todo} onChange={(e)=> set(e.target.value)} /> 
        <button >Save Todo</button>
               </>
     )
}