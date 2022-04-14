import React, { useState ,useEffect} from 'react';

export const ReactForm=()=>{
    const [formdata,setFormdata]=useState({});
    const [database,setDatabase]=useState(false);
useEffect(()=>{

      async function Postdata(){
          try{
            const response=await fetch('http://localhost:3000/data',{
                method:'POST',
                headers:{'Content-Type':'application/json','Accept': 'application/json',},
                body:JSON.stringify({formdata})
            })
           const data=await response.json();
           console.log(data); 
          }catch(error){
                console.log(error);
          }
    }
    Postdata();
 },[database])

 
    const handleChange=(e)=>{
        const inputname=e.target.name;
        setFormdata({...formdata,[inputname]:e.target.value});
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    setDatabase({...database,formdata});
}


    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <label> Name</label>
            <input type="text" name="name" placeholder='write your name'     onChange={handleChange}       />
        </div>
        <div> 
            <label> Age</label>
            <input type="number" name="age" placeholder='write your age'      onChange={handleChange}    />
        </div>
        <div>
            <label>Address</label>
            <input type="text" name="address" placeholder='write your address'  onChange={handleChange}  />
        </div>
        <div>
            <label>Department</label>
            <select>
                <option>Software Enginner</option>
                <option>Goverment</option>
                <option>Doctor</option>
                <option>Advocate</option>
            </select>
        </div>
        <div>
            <label>Salary</label>
            <input type="number" name="salary" placeholder='write your salary'   onChange={handleChange}  />
        </div>
        <div>
            <label> Martial status</label>
            <input type="checkbox" name="martialstatus" placeholder='write your status'   onChange={handleChange}  />
        </div>
        <div>
            <input type='submit' name='submit' />
        </div>
        </form>
        </>
    )
}