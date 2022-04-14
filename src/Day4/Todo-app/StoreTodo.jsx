import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const StoreTodo =({storedata})=>{
    const onTrigger=(event)=>{
        storedata(event.target.task.value);
       event.preventDefault();
    }
     return( 
        <>
        <form onSubmit={onTrigger}>
        <input type="text" placeholder="write your todo" name="task" onChange={onTrigger} /> 
         <input type="submit" value="Submit" />
        </form>
               </>
     )
}