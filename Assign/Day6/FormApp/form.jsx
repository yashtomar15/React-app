import React, { useRef } from 'react';
import { useState } from 'react';
import style from './form.module.css'
import {v4 as uuidv4} from 'uuid'
export const Form=()=>{
    const [formdata,setFormdata]=useState({});
     const refDatabase=useRef({})
     const refKey=useRef(0)

    const onTrigger=(e)=>{
const inputname=e.target.name;
setFormdata({...formdata,
[inputname]:e.target.value});
    }

    const handleSubmit=(e)=>{
        refDatabase.current={...refDatabase.current,[formdata]:formdata};
        console.log(refDatabase.current);
        e.preventDefault();
    }
// console.log(formdata)
return (
    <>
    <div className={style.container}>
    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" placeholder='your name' onChange={onTrigger} />
        <br></br>
        <label>Password</label>
        <input type="password" name="password" placeholder='write password' onChange={onTrigger} />
       <div>
        <label>Age</label>
        <input type="number" name="age" onChange={onTrigger} />
        </div>
        <div>
        <label>DOB</label>
        <input type="date" name="dob" onChange={onTrigger} />
        </div>
        <div>
        <label>Showpassword</label>
        <input type="checkbox" name="showpassword" onChange={onTrigger} />
        </div>
        <div>
            <label>Resume</label>
            <input type="file" name="file" onChange={onTrigger} />
        </div>
        <input type="submit" name="submit" ></input>
    </form>
    </div>
    </>
)
}