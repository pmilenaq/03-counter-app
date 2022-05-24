import React from 'react';
//AHORA
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

//ReactDOM.render( <PrimeraApp/>, divRoot );
createRoot(document.getElementById('root')).render(<CounterApp value ={10} />)