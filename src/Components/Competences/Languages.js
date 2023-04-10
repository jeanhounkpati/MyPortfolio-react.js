// import React from 'react'


// function Languages(){
// 	return(
// 		<div className="languages">	
// 		<h1>LANGUAGES ET FRAMEWORKS</h1>	
// 		j'ai appris baeucoup de Languages				
// 		</div>
		
// 		)
// }
// export default Languages



import React,{Component} from 'react'
import Progressbar from './Progressbar'
import '../../Styles/Components/Competences/Languages.css';

class Languages extends Component {
	state={
		languages:[
		{id:1,value:"Html",xp:1.8},
		{id:2,value:"Css",xp:2},
		{id:3,value:"Javascript",xp:1},
		{id:4,value:"Python",xp:1.2},
		{id:5,value:"Php",xp:1.4}

		],
		frameworks:[
		{id:1,value:"Django",xp:1.8},
		{id:2,value:"Symfony",xp:1.8},
		{id:3,value:"React",xp:1.8},
		{id:4,value:"Bootstrap",xp:1.8},
		{id:5,value:"Material UI",xp:1.8}
		]
	}
	render() {
		let {languages,frameworks} = this.state;
		return (
			<div className='languagesframeworks'>

			<Progressbar
			title="Languages"
			languages = {languages}
			className = "languageDisplay"
			
			/>

			<Progressbar
			title="Frameworks & Bibliotheques"
			languages = {frameworks}
			className = "rameworksDisplay"
			
			/>
				
			</div>
		)
	}
}

export default Languages