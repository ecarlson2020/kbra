'use strict'
import React from 'react'

export default class Loading extends React.Component{
	render(){
		return (
			<div className={"loading" + (this.props.is_displayed ? "" : " hide")}>
				<img className='border-radius' src='/images/loading.gif' />
			</div>
		)
	}
}
