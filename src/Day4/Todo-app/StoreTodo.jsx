import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const StoreTodo =({storedata})=>{
    const [task,setTask]=useState({})
    const onTrigger=(event)=>{
        setTask({title:event.target.value,
        status:false})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        storedata(task);
    }
     return( 
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write your todo" name="task" onChange={onTrigger} /> 
         <input type="submit" value="Submit" />
        </form>
               </>
     )
}