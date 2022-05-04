import './card.css';

export const Card=(elm)=>{
    return (
        <>
 <div className="cardbox">
    <div className="allcontent">
<div className="restroimg">
    <img src={elm.img_url} style={{width:"120px"}}alt="restro image" />
</div>
<div className="restrocont">
    <h2 className="name">{elm.name}</h2>
    <p className="category">{elm.categories}</p>
    <p >{elm.costforone}</p>
    <p >{elm.discount}</p>
    <p>{elm.paymentmode}</p>
</div>
<div className="ratingsection">
    <button className="rating">{elm.rating}</button>
    <p>{elm.votes} {"votes"}</p>
    <p>{elm.reviews} {"reviews"}</p>
</div>
    </div>
    <div className="order_area">
        <div className="emptydiv"></div>
        <button className="orderbtn"> Order Online </button>
    </div>
</div> 
</>
    )
}