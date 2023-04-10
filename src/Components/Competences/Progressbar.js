import React from 'react'


const Progressbar=(props)=>  {
		return (
			<div className = {props.className}>
				<h3>{props.title}</h3>
				
				<div className='years'>
					<span>Années d'experiences</span>
					<span>1 an</span>
					<span>2 ans</span>				
				</div>

			
   				<div>
	            {
	               props.languages.map((item)=>{
	                  let xpyears = 2;
	                  let progressbar = item.xp/xpyears*100+'%';
	                  return(
	                     <div key = {item.id} className = "languagelist">
	                        <li>{item.value}</li>
	                        <div className = "progressbar" style={{width:progressbar}}>
	                        </div>
	                     </div>

	                  )
	               })
	            }
	            </div>
			</div>

		);

};
export default Progressbar;
