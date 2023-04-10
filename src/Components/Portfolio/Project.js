import React,{Component} from 'react'
import '../../Styles/Components/Portfolio/Project.css';


export default class Project extends Component {
	render() {
		let{name,languagesicons,source,info,picture} = this.props.item;
		return (
			<div className = 'project'>
				<div className = 'icons'>
				{languagesicons.map(icon=>
					<i className = {icon} key = {icon}></i>
					)}
					</div>
				<h3>{name}</h3>
				<img src={picture} alt="image"/>
				<span className = 'infos'>
				</span>
			</div>
		);
	}
}