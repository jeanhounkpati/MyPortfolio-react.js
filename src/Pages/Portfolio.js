import React from 'react'
import Naviguation from '../Components/Naviguation';
import Projectlist from '../Components/Portfolio/Projectlist';
import '../Styles/Pages/Portfolio.css';

function Portfolio(){
	return(
		<div className="portfolio">		
		<h1>Bienvenue sur ma page de portfolio </h1>
		<Naviguation/>
		<Projectlist/>					
		</div>
		
		)
}
export default Portfolio