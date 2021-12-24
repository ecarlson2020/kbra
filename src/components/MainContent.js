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
			return fetch['results'].map(result => (
				<div key={result.id.value}>
					<div>{result.name.title}</div>
					<div>{result.name.first}</div>
					<div>{result.name.last}</div>
					<div>{result.email}</div>
					<img src={result.picture.large} />
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
