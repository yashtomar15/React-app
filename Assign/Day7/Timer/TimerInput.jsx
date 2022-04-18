import React from "react";
import {useState} from 'react';

export const TimerInput= ({timelimit})=>{
const [timing,setTiming]=useState({});
const handleSubmit=(e)=>{
e.preventDefault();
timelimit(timing);
}
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="number" name="initialtime" onChange={(e)=> setTiming({...timing,[e.target.name]:e.target.value})}/>
        <input type="number" name="endtime" onChange={(e)=> setTiming({...timing,[e.target.name]:e.target.value})}/>
        <input type="submit" value="start" />
        </form> 
        </>
    )
}