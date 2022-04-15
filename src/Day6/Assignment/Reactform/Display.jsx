import React from "react";

export const Display=({name,salary,age,address,department,martialstatus})=>{
return (
    <>
    <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{salary}</td>
        <td>{department}</td>
        <td>{martialstatus}</td>
    </tr>
    </>
)
}