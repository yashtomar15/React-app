import React, { useState ,useEffect} from 'react';
import {Form} from './Form';
import {Display} from './Display';
import './form.css'

export const ReactForm=()=>{
// const [userdata,setUserdata]=useState({})
const [getdata,setGetdata]=useState([]);
useEffect(()=>{
    displaydata();
 },[])
 function displaydata(){
     fetch('http://localhost:3000/data')
     .then(res=>res.json())
     .then(data=>setGetdata(data)) 
     .catch(error=>console.log(error))

 }
 function Postdata(formdata){
    // userdata
      const postrequest={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
    }
      fetch('http://localhost:3000/data',postrequest)
      .then(res=> res.json())
        .then(data=>displaydata())
        // .then(data=>console.log(data))
        .catch(error=>console.log(error))
}

 const onSubmit=(formdata)=>{
    Postdata(formdata);
 }
 return(<>
     <h1>Employee Details</h1>
     <div className='container'>
     <div>
         <table className='employees'>
         <thead><tr>
             <th>NAME</th>
             <th>AGE</th>
             <th>ADDRESS</th>
             <th>SALARY</th>
             <th>DEPARTMENT</th>
             <th>MARTIAL STATUS</th>
             </tr></thead>
         <tbody>
         {  getdata.map((elm)=>
    <Display key={elm.id} {...elm} />
)} 
</tbody>
</table>
     </div>
     <div>
     <Form onSubmit={onSubmit}/>
     </div>
     </div>
     </>
 )
   
     
}