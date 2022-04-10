import { useState } from 'react';
import {Card} from './Card';
import {v4 as uuidv4} from 'uuid'

var arr=[
    {date:"28/10/2020",backgroundColor:'#efa41c', logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",button:"Case Study",name:"Amazon Gift Pay",device:"Desktop - Mobile"},
    {date:"28/10/2020",backgroundColor:'#efa41c',logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",button:"Case Study",name:"Amazon Gift Pay",device:"Desktop - Mobile"},
    {date:"13 Sep 2020",logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png",button:"Case Study",name:"Apple Gift Payment",device:"MacOS - Mobile"}
];

export const CardDetails=()=>{
    const [details,setDetails]=useState(arr);
 return (details.map(elm=>{
     return <Card key={uuidv4()} {...elm} />
  }) );
}