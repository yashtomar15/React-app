import React,{useRef} from "react";
import {useState} from 'react';
import styles from './timer.module.css'
export const StopWatch=()=>{
    const refS=useRef(0);
    const refM=useRef(0);
    const refMsec =useRef(0);
const[milsec,setMilsec]=useState(refMsec.current);
const[sec,setSec]=useState(refS.current);
const[min,setMin]=useState(refM.current);
const[start,setStart]=useState(true);

   const  Startwatch=()=>{
       setStart(false);
       refMsec.current=milsec;
       refS.current=sec; refM.current=min;
        let id=setInterval(() => {
            if(refMsec.current===-1){
                clearInterval(id);
            }
            if(refMsec.current===100){
                refMsec.current=0
                refS.current++;
                setSec(refS.current);
                console.log(refS.current)
            }
            if(refS.current===60){
                refS.current=1;
               refM.current++;
               setMin(refM.current);
               console.log(refM.current);
            }
            refMsec.current++;
            setMilsec(refMsec.current);
        },10)
    }
    const Stopwatch=()=>{
        setStart(true);
setMilsec(refMsec.current);
setMin(refM.current);
setSec(refS.current);
refMsec.current=-1;
refS.current=0;
refM.current=0;
    }
    const Resetwatch=()=>{
        setStart(true);
        refMsec.current=-1;
     refM.current=0;
       refS.current=0;
       setMilsec(0);
        setSec(0);
        setMin(0); 
    }
    return (
        <>
        <div className={styles.timerInput}>
        <div className={styles.stoplive}> {sec}s  {milsec}</div>
        </div>
        { start ?(
        <button className={styles.start} onClick={Startwatch}>Start</button>
        ):(
        <button onClick={Stopwatch}>Stop</button>
        )
}
        <button onClick={Resetwatch}>Reset</button>
        </>
    )
}