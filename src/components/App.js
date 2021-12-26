'use strict'
import React from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'
import MainContent from './MainContent'
import {react_objs, my_scroll} from '../functions'

export default class App extends React.Component{
	componentDidMount(){
		my_scroll.init(window);
	}

	render(){
		return (
			<div className="App">
				<TopMenu />
				<BottomMenu />
				<MainContent />
			</div>
		);
	}
}
