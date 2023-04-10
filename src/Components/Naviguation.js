import React from 'react'
import '../Styles/Components/Naviguation.css';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import BuildIcon from '@material-ui/icons/Build';

function Naviguation(){
	return(
		<div className = "naviguation">

      <div>
        <img src="./cv profil.jpg" alt="pictures"/>
      </div>
  		<div >
        <ul>
        <li>
        <NavLink exact to ="/" activeClassName = "navActive">
        <HomeIcon color="primary"/>
        <span>Acccueil</span>
        </NavLink>
        </li>
         <li>
         <NavLink exact to ="/competences" activeClassName = "navActive">
        <BuildIcon color="primary"/>
        <span>Competences</span>
        </NavLink>
        </li>
        <li>
        <NavLink exact to ="/portfolio" activeClassName = "navActive">
        <CallIcon color="primary"/>
        <span>Porfolio</span>
        </NavLink>
        </li>
        <li>
         <NavLink exact to ="/contact" activeClassName = "navActive">
        <CallIcon color="primary"/>
        <span>Contacts</span>
        </NavLink>
        </li>

        </ul>		
		  </div>
		</div>		
		
		)
}
export default Naviguation