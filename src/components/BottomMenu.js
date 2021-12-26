'use strict'
import React from 'react'
import {react_objs} from '../functions'

export default class BottomMenu extends React.Component{
	draw_page_numbers(){
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		return arr.map((el, i) => (
			<div
				key={i}
				className={'page-number text-center' + (this.props.page_num == el ? " active" : "")}
				onClick={() => this.set_active_page(el)}
			>{el}</div>
		))
	}

	set_active_page(num){

		//https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page
		window.history.pushState("object or string", "Title", "/?page=" + num);

		react_objs.app.fetch_json(num);
	}

	render(){
		return (
			<div id='bottom-menu' className='font01 color01 border-radius'>
				<div className='flex-center'>
					{this.draw_page_numbers()}
				</div>
			</div>
		);
	}
}
