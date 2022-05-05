import React from 'react';
import {createRoot} from 'react-dom/client'
import {App} from './App.js'
import { BrowserRouter } from 'react-router-dom';
 
var container=document.getElementById("root");
var root=createRoot(container);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>);