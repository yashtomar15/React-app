import { useState } from "react";

export const Counter=({value})=>{
    // var Value=props.value;
const [count,setCount]=useState(value);
// const handleINc=()=>{
// setCount(count+1);
// }
const handleDec=()=>[
    setCount(count-1)
]
console.log(count)
    return (<>
    <h1>CounterApp</h1>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)} >INcrement</button>
    <button onClick={()=> handleDec()}>DEcrement</button>
    <button onClick={()=> setCount(count*2)}>Double</button>
    </>)
}