import React from 'react'
import Naviguation from '../Components/Naviguation';
import Hobbies from '../Components/Competences/Hobbies';
import Otherskills from '../Components/Competences/Otherskills';
import Languages from '../Components/Competences/Languages';
import Experience from '../Components/Competences/Experience';
import '../Styles/Pages/Competences.css';



function Competences(){
	return(
		<div>
		<div className="competences">
		<Naviguation/>				
		<Hobbies/>	
		<Otherskills/>	
		<Languages/>
		<Experience/>	
		</div>
		</div>
		)
}
export default Competences