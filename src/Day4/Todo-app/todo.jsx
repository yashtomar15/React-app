import { useEffect, useState } from "react";
import {StoreTodo} from './StoreTodo'
import {Display} from './Display'
import styles from './Todo.module.css'
import { v4 as uuidv4 } from 'uuid';
import Pagination from '@material-ui/lab/Pagination'

export const Todo=()=>{
  const [data,setData]=useState([]);
  // const[todo,setTodo]=useState({});

    useEffect(()=>{
      fetch('http://localhost:3000/data')
      .then(res=>res.json())
      .then(Data=>setData(Data))
      .catch(error=>console.log(error))
      // console.log(data);
    },[])

function postdata(task){
  const requestOptions={
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(task)
};
fetch('http://localhost:3000/data',requestOptions )
.then(res=> res.json())
// .then(Data=>setData(Data))
.catch(error=> console.log(error)); 
}

  const storedata=(task)=>{
postdata(task);
// console.log(query);
   }

    return (
      <>
      <h1>Todo</h1>
      <div className={styles.container}>
      <div>
        <h1>TODO</h1>
        <table>
          <thead>
            <tr><th>TASK</th>
              <th>STATUS</th></tr>
              </thead>
              <tbody>
     {
      data.map((elm) =>
      <Display key={elm.id} {...elm}  />
       )
     }   
     </tbody> 
     </table> 
        </div>
        <div>
          <h1>FORM</h1>
<StoreTodo storedata={storedata} />
        </div>
        </div>
        <div className={styles.pagination}>
          <Pagination  count={5} />
        </div>
        </>
    )
    }


    



