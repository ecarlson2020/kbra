'use strict'
import React from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'
import MainContent from './MainContent'

export default class App extends React.Component{
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
