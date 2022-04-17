import React from 'react';
import {useState} from 'react';
import {Timer} from './Timer.jsx';
import { StopWatch } from './Stopwatch';

export const GoogleTimer=()=>{
    const[timer,setTimer]=useState(true);
    const handleTimer=()=>{
     setTimer(true);
    }
    const handleWatch=()=>{
        setTimer(false)
    }
    return(
        <>
        <h1>Google Timer</h1>
        <button onClick={handleTimer}>Timer</button>
        <button onClick={handleWatch}>Stopwatch</button> 
        {timer ?(
        <div> 
      <Timer timer={timer}/>
        </div>) : (
        <div> 
         <StopWatch />
        </div> )
}
        </>
    )
}