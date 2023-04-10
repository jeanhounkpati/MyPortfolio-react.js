import React from 'react';
import './App.css';
import Competences from './Pages/Competences';
import Contact from './Pages/Contact';
import Accueil from './Pages/Accueil';
import Notfound from './Pages/Notfound';
import Portfolio from './Pages/Portfolio';
import {BrowserRouter, Route,Switch} from "react-router-dom";
 

function App() {
  return (
  	<>
  	<BrowserRouter>
  	<Switch>
    <Route path= "/" exact component ={Accueil}></Route>
    <Route path= "/contact" component ={Contact}></Route> 
    <Route path= "/competences" component ={Competences}></Route> 
    <Route path= "/portfolio" component ={Portfolio}></Route>
    <Route component ={Notfound}></Route>  
 	</Switch>
  	</BrowserRouter>
  	</>  	   
  );
}

export default App;
