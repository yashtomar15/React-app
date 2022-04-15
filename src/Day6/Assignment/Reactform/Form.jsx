import React, {useState} from "react";

export const Form=({onSubmit})=>{
    const [formdata,setFormdata]=useState({});
    
     const handleChange=(e)=>{
        const inputname=e.target.name;
        if (inputname=="martialstatus"){
           if(e.target.checked===true){
                setFormdata({...formdata,[inputname]:'Yes'})
           }else{
            setFormdata({...formdata,[inputname]:'No'})
           }
          }else{
            setFormdata({...formdata,[inputname]:e.target.value});
        }
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    // setDatabase({...database,formdata});
    onSubmit(formdata);
    // console.log(formdata);
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
            <select type="select" name="department" onChange={handleChange}>
                <option>select</option>
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