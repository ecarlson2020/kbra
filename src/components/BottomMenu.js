'use strict'
import React from 'react'
import {react_objs} from '../functions'

export default class BottomMenu extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			displayed: true,
		}

		react_objs.top_menu = this;
	}

	render(){
		return (
			<div>BottomMenu</div>
		);
	}
}
