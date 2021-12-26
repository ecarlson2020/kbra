'use strict'
import React from 'react'

export default class Loading extends React.Component{
	get_middle(){
		var loading_status = this.props.loading_status;
		
		if(loading_status === 'error'){
			return <div className='font01'>There was an error loading the page results. Please check your internet connection and try again.</div>
		}
		else if(loading_status === 'gif'){
			return <img src='/images/loading.gif' />
		}
	}
	render(){
		return (
			<div className={"loading border-radius" + (this.props.loading_status !== 'done' ? "" : " hide")}>
				{this.get_middle()}
			</div>
		)
	}
}
