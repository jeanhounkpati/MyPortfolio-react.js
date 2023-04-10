import React from 'react'
import Naviguation from '../Components/Naviguation';
import '../Styles/Pages/Contact.css';

function Contact(){
	return(
		<div className='contact'>	
		
		<Naviguation/>
		<div className = 'renseignements'>
		<h1>Bienvenue sur la page contact</h1>
		<button>
			Contacter nous sur le 99-74-22-41 / 91 80 37 66
		</button>		
		</div>	
		</div>
		
		)
}
export default Contact