import React from 'react'

import Header from "./Header"


import { openAuth } from "../../redux/actions/action.actions.js"

class HeaderComponent extends React.Component {

	seekForVideo(props) {
		props.preventDefault()
	}

	componentDidMount() {
		this.props.removeTabActions("input")
		this.props.removeTabActions("a")
	}

	render() {
		return <Header {...this.props} handleSubmit={this.seekForVideo.bind(this)}/>
	}
}

export default HeaderComponent
