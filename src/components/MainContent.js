'use strict'
import React from 'react'

export default class MainContent extends React.Component{
	state = {
		fetch: null,
	}

	fetch_json(){
		fetch('https://randomuser.me/api/?page=1&results=10&seed=abc')
			.then(response => response.json())
			.then(data => {
				console.log(data);

				this.setState({
					fetch: data
				})
			})
		;
	}

	componentDidMount(){
		this.fetch_json();
	}

	map_results(){
		var fetch = this.state.fetch;

		if(fetch){
			return fetch['results'].map((result, i) => (
				<div key={i} className='box-outer'>
					<div className='box border-radius relative'>
						<div className='margin02'>
							<img src={result.picture.large} />
							<div className='margin01 font01'>{result.name.title} {result.name.first} {result.name.last}</div>
							<div className='margin01'>
								<i className='fas fa-envelope'></i>
								{result.email}
							</div>
							<div className='margin01'>
								<i className='fas fa-user'></i>
								{result.dob.age}
							</div>
						</div>
						<div className='design design-medium design01'></div>
						<div className='design design-medium design06'></div>
						<div className='design design-small design02'></div>
						<div className='design design-small design07'></div>
						<div className='design design-large design03'></div>
						<div className='design design-large design04'></div>
						<div className='design design-large design05'></div>
					</div>
				</div>
			));
		}

		return "";
	}

	render(){
		return (
			<div>
				{this.map_results()}
			</div>
		);
	}
}
