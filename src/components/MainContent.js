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
					<div className='box border-radius'>
						<img src={result.picture.large} />
						<div className='box-right'>
							<div>
								<i className='fas fa-envelope'></i>
								<div className='font01'>{result.name.title} {result.name.first} {result.name.last}</div>
								<div>{result.email}</div>
								<div className='age'>{result.dob.age}</div>
							</div>
						</div>
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
