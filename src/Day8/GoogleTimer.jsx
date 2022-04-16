import React,{useState} from "react";
import {useRef} from 'react' ;
import { Timing } from "./Timing";
export const GoogleTimer=()=>{
    const refMin=useRef(5);
    const refSec=useRef(60); 
    const[saveSec,setSaveSec]=useState(refSec.current)
    const[saveMin,setSaveMin]=useState(refMin.current)
    const refReset=useRef({})
const StartTimer=()=>{
    refSec.current= saveSec;
    refMin.current=saveMin;
  let  id=setInterval(()=>{  
        if(refMin.current===0){
            clearInterval(id);
            return;
        }
        console.log(refSec.current);
        if(refSec.current===0){
            refSec.current=60;
            console.log(refSec.current);
            refMin.current--;
        }
        refSec.current--;
    },1000)
}
const StopTimer=()=>{
   setSaveSec(refSec.current)
   setSaveMin(refMin.current);
    refMin.current= 0
}
const ResumeTimer=()=>{
StartTimer();
}
const ResetTimer=()=>{
    let timing=refReset.current;
    if(timing.hour!==undefined){
        refMin.current=timing.mins;
        refSec.current=timing.secs;
        setSaveMin(refMin.current)
    setSaveSec(refSec.current)
    refMin.current= 0
    }else{
        StopTimer();
        refMin.current=5;
        refSec.current=60;
        setSaveMin(refMin.current)
    setSaveSec(refSec.current)
    }
}
const Timelimit=(timing)=>{
    refReset.current=timing;
refMin.current=timing.mins;
refSec.current=timing.secs;
setSaveMin(refMin.current)
setSaveSec(refSec.current)
}

    return(
        <>
       <h1>Google Timer</h1> 
           <div>
               <Timing Timelimit={Timelimit}/>
           </div>
           <div>
           <button onClick={StartTimer}>Start</button>
           <button onClick={StopTimer}>Stop</button>
           <button onClick={ResumeTimer}>Resume</button>
           <button onClick={ResetTimer}>Reset</button>
           </div>
        </>
    )
}