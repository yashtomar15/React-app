import './card.css';

export const Card=({name,button,date,logo_url,device,backgroundColor})=>{
   return(
    //    <div className="container">
       <div style={{backgroundColor}}className='cardbox'>
     <div className="cardContent">
 <p className="date">{date}</p>
 <button className='button'>{button}</button>
 <h1>{name}</h1>
 <h4>{device}</h4>
     </div>
     <div className="cardLogo">

<div  className='logoimg' ><img style={{width:"70px"}} src={logo_url} alt="logo" /></div>
<div className='Arrowimg'><img  style={{width:"40px"}}  src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="right arrow" /></div>
     </div>
       </div>
    //    </div>
   )
}