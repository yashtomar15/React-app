import {useState} from 'react';

 const Button=()=>{
    //  const name="yash";
const[count,setCount]=useState(0);
const handleInc=()=>{
setCount(count+1);
// school="masai transformationn  in education"
}
const handleDec=()=>{
    setCount(count-1);
    // name="sonu";
}
    return (<>
    <h1>{count}</h1>
    <button onClick={()=>handleInc()}>INc</button>
    <button onClick={()=>handleDec()}>Dec</button></>
        
    )
}

export default Button;