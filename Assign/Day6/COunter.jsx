import {useRef,useState} from 'react'

export const Counter=()=>{
   const[count,setCount]=useState(0);
   const RefX=useRef(0);
   return (
       <>
       <h1>counter:{count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
       </>
   )
}