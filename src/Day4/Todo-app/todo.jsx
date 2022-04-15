import { useEffect, useState } from "react";
import {StoreTodo} from '../StoreTodo'
import {Display} from '../Display'
import styles from './Todo.module.css'
import { v4 as uuidv4 } from 'uuid';
export const Todo=()=>{
    useEffect(()=>{
        
        // const requestOptions={
        //     method:'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body: JSON.stringify(todo)
        // };
        fetch('https://json-server-mocker-masai.herokuapp.com/tasks' )
        .then(res=> res.json())
        .then(Data=>setData(Data))
        .catch(error=> console.log(error));   
    },[])

    const [data,setData]=useState([]);
    const[todo,setTodo]=useState('');

  const storeData=(query)=>{
setTodo(query);
// var obj={
//     task:todo,
//     status:false,
//     id:uuidv4()
// }
console.log(query);
   }

    return (
    <>
    <h1>My Todo's</h1>
    <div className={styles.container} >
        <div className="savedtodo">
    {data &&
      data.map((elm,index)=>{
        <Display key={elm.id} {...elm} index={index} />
        // console.log(elm)
       } )
} </div>
<div className="storetodo">
<StoreTodo storedata={storeData} />
</div>
</div>
    </>
    )   
}

