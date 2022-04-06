import React from 'react';
import Mobileos from './Components/moboleOS.js'
import Mobilemfg from './Components/mobilemfg.js'

class Reactapp extends React.Component{
    render(){
        return (
            <>
            <div><Mobileos /></div>
            <div><Mobilemfg /></div>
            </>
        )
    }
}

export default Reactapp;