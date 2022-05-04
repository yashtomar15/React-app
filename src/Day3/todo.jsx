

export const Todo =({title,status,id,handlerDelete})=>{
    const handlerDeletefn=()=>{
            handlerDelete(id)
    }
    return (<>
<h3 >{title}</h3>
<h3>id-{id}</h3>
<button onClick={handlerDeletefn}>Delete</button>
</>
    )
}