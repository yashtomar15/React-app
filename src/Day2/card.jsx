import './card.css';

const rightstyle={
   fontSize:"20px",
   color:"green"
}
export const Card =(props)=>{
    console.log(props);
const{name,organisation,gender,qualification,img_url}=props
    return (
        <div className="cardcontent">
<div className='left_content'>
    <img src={img_url} alt={name}/>
</div>
 <div className="right_content">
 <h1 style={{backgroundColor:"pink"}}>Name:{name}</h1>
 <h2>Qualification:{qualification}</h2>
 <h2>Organisation:{organisation}</h2>
 <h2>Gender:{gender}</h2>
        </div>
        </div>
    )
}