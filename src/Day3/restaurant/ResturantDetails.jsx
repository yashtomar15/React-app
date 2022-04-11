import details from './data.json'
import {Card} from './Card'
import {useState} from 'react'
import { AddRestro } from './addrestro'

export const RestaurantDetails=()=>{
const [data, setData]=useState(details);
const [restro,setRestro]=useState(false);
const contstyle={
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)'
}
const handlerclick=()=>{
    setRestro(true);
}
return(<>
<h1>Restaurants</h1>

<div className='container'>
    <button onClick={handlerclick} >Add restraunt</button>
{restro ? <div className='addrestro'>
       <AddRestro />  
    </div> :
<div style={contstyle}>
 {data.map(elm=>{
return <Card {...elm} />
 })}
 </div>
}
 </div>

</>)
}