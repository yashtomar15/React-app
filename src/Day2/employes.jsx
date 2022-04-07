import {Card} from './card.jsx'
const data={
    name:"yash",
    qualification:"web dev",
    organisation:'masai',
    gender:"male",
    img_url:"https://ca.slack-edge.com/T02QFJUB5DF-U02RMJKKALR-65b30c6aaf82-512"
}

const data2={
    name:"priyanshu",
    qualification:"doctor",
    organisation:"AIMS",
    gender:"male",
}
 const Employee=()=>{
    return(
        <>
        <Card  {...data} />
        <Card {...data2} />
        </>
    )
}

export default Employee;