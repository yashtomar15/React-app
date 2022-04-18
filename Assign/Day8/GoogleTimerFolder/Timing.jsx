import React, { useRef} from 'react'
import styles from './timer.module.css'
export const Timing =({Timelimit})=>{
    const refTiming=useRef({});
    let timestr;
    const handleChange=(e)=>{
         timestr=e.target.value;
         if(timestr.length===6){
            refTiming.current={hour:Number(timestr.substr(0,2)),
                mins:Number(timestr.substr(2,2)),
                secs:Number(timestr.substr(4,2))}
                Timelimit(refTiming.current);
         }
    }
    return(
        <>
               <input className={styles.timerInput} type="number" name="timing" onChange={handleChange} placeholder="00h 00m 00s"  /> 
        </>
    )
}