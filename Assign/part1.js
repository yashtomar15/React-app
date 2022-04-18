import React from 'react';
import {Joinus} from './Componentjsx/joinus.jsx';
import {Login} from './Componentjsx/login.jsx';
import {Search} from './Componentjsx/search.jsx';
import {Home} from './Componentjsx/home.jsx';
import {Setting} from './Componentjsx/setting.jsx';
import {Contact} from './Componentjsx/contactus.jsx';
import {Help} from './Componentjsx/help.jsx';
import {Download} from './Componentjsx/download.jsx';
import Reactapp from './Reactmenu.js'
import './card2.css'
class Part1 extends React.Component{
     render(){return (<div>
         <div><Reactapp /></div>
         <div className='mainbox'>
             <div className='firsbox'><div>< Joinus /></div>
             <div>< Login /></div>
             <div>< Search /></div>
             <div>< Home /></div></div>
             <div className='secondbox'>
             <div>< Setting /></div>
             <div>< Contact/></div>
             <div>< Help /></div>
             <div>< Download /></div>
             </div>
         </div>

     </div>);
     }
}

export {Part1};