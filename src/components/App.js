'use strict'
import React from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'
import MainContent from './MainContent'
import {react_objs, my_scroll} from '../functions'

export default class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			page_num: null,
			fetch: null,
		}

		react_objs.app = this;
	}

	fetch_json(page_num){
		fetch("https://randomuser.me/api/?page=" + page_num + "&results=10&seed=abc")
			.then(response => response.json())
			.then(data => {
				console.log(page_num, data);

				this.setState({
					page_num: page_num,
					fetch: data,
				})
			})
		;
	}

	componentDidMount(){

		//use page from url, otherwise default to page 1
		const search = window.location.search;
		const my_match = search ? search.match(/\?page=\d+/g) : '';
		const page_num_from_url = my_match && my_match[0] ? +my_match[0].match(/\d+/) : '';

		//scroll effect for top and bottom menu
		my_scroll.init(window);

		//fetching json data from api
		this.fetch_json(page_num_from_url ? page_num_from_url : 1)
	}

	render(){
		return (
			<div className="App">
				<TopMenu />
				<MainContent fetch={this.state.fetch} />
				<BottomMenu page_num={this.state.page_num} />
			</div>
		);
	}
}
