import './card.css';

export const AddRestro=()=>{
    const formstyle={
        display:'flex',
        flexDirection:'column',
    }
    return (
        <>
        <form style={formstyle} className='addrestroform'>
        <input type={"text"} placeholder="restraunt" />
        <input type={"text"} placeholder="image url" />
        <input type="text" placeholder="payment type" />
        <input type="number" placeholder="type rating" />
        <input type="number" placeholder="type votes" />
        <input type="number"  placeholder="type reviews" /> 
        <input type={"text"} placeholder="type cost for people" />
        <input type={"submit"} placeholder="ADD" />
        </form>
         </>
    )
}