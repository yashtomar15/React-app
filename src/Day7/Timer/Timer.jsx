import React, { useState } from "react";
import { useRef } from "react";
import { TimerInput } from "./TimerInput";

export const Timer=()=>{
   const refInitialtime=useRef(0);
    const refEndtime=useRef(0)
const [initTime,setInitTime]=useState(0);
    const timelimit=(timing)=>{
        refInitialtime.current=Number(timing.initialtime);
        refEndtime.current=Number(timing.endtime);

        const id=setInterval(()=>{
        if(refInitialtime.current===refEndtime.current){
            clearInterval(id)
        }
        setInitTime(refInitialtime.current);
        refInitialtime.current++;
        
        },1000)
    }
    return(
        <>
        <h1> Timer</h1>
        < TimerInput timelimit={timelimit} />
        <h3>{initTime}</h3>
        </>
    )
}