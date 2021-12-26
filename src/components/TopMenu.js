'use strict'
import React from 'react'

export default class TopMenu extends React.Component{
	render(){
		return (
			<div id='top-menu'>
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
