'use strict'
import React from 'react'
import {react_objs} from '../functions'

export default class TopMenu extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			displayed: true,
		}

		react_objs.bottom_menu = this;
	}

	render(){
		return (
			<div id='top-menu' className={(this.state.displayed ? "transform-none" : "")}>
				<div id='top-menu-inner'>
					<div className='margin03 font03'>
						<img src='/logo512.png' />
						<span>Evan Carlson - Technical Challenge</span>
					</div>
				</div>
			</div>
		);
	}
}
