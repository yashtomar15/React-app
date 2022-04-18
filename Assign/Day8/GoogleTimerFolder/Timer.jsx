import React,{useState} from "react";
import {useRef} from 'react' ;
import { Timing } from "./Timing";
import styles from './timer.module.css'
export const Timer=()=>{
    const refHour=useRef(0);
    const refMin=useRef(5);
    const refSec=useRef(60); 
    const[saveSec,setSaveSec]=useState(refSec.current)
    const[saveMin,setSaveMin]=useState(refMin.current)
    const[saveHour,setSaveHour]=useState(refHour.current)
    const refReset=useRef({})
    const [start,setStart]=useState(true); 
    const [show,setShow]=useState(false);
const StartTimer=()=>{
    setShow(false);
    setStart(false);
    refSec.current= saveSec;
    refMin.current=saveMin;
    refHour.current=saveHour;
    let id=setInterval(()=>{  
        if((refMin.current===0) && (refSec.current===0) && (refHour.current===0)){
            clearInterval(id);
            return;
        }
        console.log(refSec.current);
        setSaveSec(refSec.current);
        if(refSec.current===1){
            if(refMin.current>0){
                refMin.current--;
                refSec.current=61;
            }else{
                refSec.current=1;
                console.log("mins-",refMin.current)
            }
        }
            if(refMin.current===0){
                if(refHour.current>0){
                    refHour.current--;
                    refMin.current=60;
                }
       
            console.log("hour-",refHour.current);
        }
        refSec.current--;
    },1000)
}
const StopTimer=()=>{
    setStart(true);
   setSaveSec(refSec.current)
   setSaveMin(refMin.current);
   setSaveHour(refHour.current);
    refHour.current= 0;
    refMin.current= 0;
    refSec.current= 0;
}
const ResetTimer=()=>{
    setStart(true);
    let timing=refReset.current;
    if(timing.hour!==undefined){
        refHour.current=timing.hour;
        refMin.current=timing.mins;
        refSec.current=timing.secs;
        setSaveMin(refMin.current)
        setSaveHour(refHour.current)
    setSaveSec(refSec.current)
    refMin.current= 0
    refSec.current= 0
    refHour.current= 0
    }else{
        refHour.current=0;
        refMin.current=5;
        refSec.current=60;
        setSaveMin(refMin.current)
    setSaveSec(refSec.current)
    setSaveHour(refHour.current)
    refMin.current= 0
    refSec.current= 0
    refHour.current= 0
    }
}
const Timelimit=(timing)=>{
    refReset.current=timing;
refMin.current=timing.mins;
refHour.current=timing.hour;
refSec.current=timing.secs;
setSaveMin(refMin.current)
setSaveHour(refHour.current)
setSaveSec(refSec.current)
}
const changeInput=()=>{
    setShow(true);
    StopTimer();
}
    return(
        <>
           <div>
               { show ?(
               <Timing Timelimit={Timelimit}/>
               ):(
        <button className={styles.timerInput} onClick={changeInput}> 
        <div className={styles.timinglive}>{saveHour}h   {saveMin}m  {saveSec}s</div>
        </button> )
}
        </div>
           <div>
          {start ?(
           <button onClick={StartTimer}>Start</button>
          ):(
           <button onClick={StopTimer}>Stop</button>
          )
          }
           <button onClick={ResetTimer}>Reset</button>
           </div>
        </>
    )
}