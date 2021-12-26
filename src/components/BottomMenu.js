'use strict'
import React from 'react'
import {react_objs} from '../functions'

export default class BottomMenu extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			displayed: true,
			active_page: 1,
		}

		react_objs.top_menu = this;
	}

	draw_page_numbers(){
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		return arr.map((el, i) => (
			<div
				key={i}
				className={'page-number text-center' + (this.state.active_page == el ? " active" : "")}
				onClick={() => this.set_active_page(el)}
			>{el}</div>
		))
	}

	set_active_page(num){
		this.setState({
			active_page: num,
		});
	}

	render(){
		return (
			<div id='bottom-menu' className={'font01 color01 border-radius' + (this.state.displayed ? " transform-none" : "")}>
				<div className='flex-center'>
					{this.draw_page_numbers()}
				</div>
			</div>
		);
	}
}
