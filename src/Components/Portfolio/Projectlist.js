import React from 'react';
import {portfoliodata} from '../../data/Portfoliodata';
import Project from './Project';
import '../../Styles/Components/Portfolio/Projectlist.css';

export default class Projectlist extends React.Component {
	state = {
			projects:portfoliodata
		};
	render() {
		let {projects} = this.state;
		
		return (
			<div className = 'portfoliocontent'>
				<ul className = 'radiodisplay'>

				</ul>
				<div className = 'projectlist'>
					{
						projects.map(item=>{

						return(
							<Project
							key = {item.id}
							item={item}
							/>
						)
						})

					}
				</div>
				
			</div>
		)
	}
}