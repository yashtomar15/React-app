import React from 'react';
import {useState} from 'react'
import {useEffect} from 'react'

export const AddHouse = () => {
const [data,setData]=useState({});
useEffect=()=>{
  
  }
  const postdata= async (data)=>{
    // console.log(data);
    try{
    var res=await fetch("http://localhost:8080/posts",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      })
      var data=await res.json();
      console.log(data);
    }
    catch(error){
           console.log(error);
    }
  }
const handleChange=(e)=>{
var inputname=e.target.className;

if(e.target.type==="checkbox"){
  if(e.target.checked===true){
    setData({...data,[inputname]:"Yes"})
  }else{
    setData({...data,[inputname]:"No"})
  }
}else{
  setData({...data,[inputname]:e.target.value})
}
}
const handleSubmit=(e)=>{
  e.preventDefault();
  postdata(data);
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange}   />
        <br />
        <label>ownerName</label>
        <input type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input  type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input type="checkbox" className="married"onChange={handleChange} />
        <br />
        <label>image</label>
        <input  type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
