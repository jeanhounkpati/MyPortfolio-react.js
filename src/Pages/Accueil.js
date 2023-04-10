import React from 'react'
import '../Styles/Pages/Accueil.css';
import Naviguation from '../Components/Naviguation';


function Accueil(){
	return(
		<div className= 'accueil'>
		<h1>Bienvenue sur la page d accueuil</h1>
		<button>telecharger le CV</button>
		<p>
		Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Odit expedita odio illum laudantium vel vero quos praesentium nostrum molestias fugit itaque, voluptate corporis modi doloribus reiciendis inventore laborum, excepturi, debitis.
		</p>
		<Naviguation/>
		
		</div>
		
		
		)
}
export default Accueil