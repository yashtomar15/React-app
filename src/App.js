import React from 'react';
import Button from './Day2/button.jsx';
import {Input} from './Day2/input.jsx';
import  Employee  from './Day2/employes.jsx';
import {Todo} from './Day2/todo.jsx';
export const App =()=>{
    return (
        <>
        <div className='App'>
        <h1 className='studentfrom'>Student Form</h1>

        {/* <Button /> */}
        {/* <Todo /> */}
        <Employee />
    
        </div>
        </>
    )
}