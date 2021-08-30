import React from 'react'

import {withRouter} from "react-router-dom";

import {connect} from "react-redux"

import MainPage from "./MainPage"

class MainPageComponent extends React.Component {
	render() {
		return <MainPage {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

const withMainPageComponent = withRouter(MainPageComponent)

export default connect(mapStateToProps, mapDispatchToProps)(withMainPageComponent)
