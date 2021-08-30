// Main Imports
import React from 'react'
import {withRouter} from "react-router-dom"

import {connect} from "react-redux"

import { reset } from "redux-form"

// Components
import App from "./App"
import {clearAlert, successAlert} from "../../redux/actions/alert.actions.js"

import {openWindow, closeWindow, openAuth, closeAuth, seek_for_video, remove_founded} from "../../redux/actions/action.actions.js"
import { save_user_name, logout, auto_auth } from "../../redux/actions/auth.actions.js"

import { withAlert } from "react-alert"

import {clearErrors} from "../../redux/actions/error.actions.js"

// Additional Imports
// Styles
import "../../assets/sass/Main.sass"
import "../../assets/sass/Header.sass"
import "../../assets/sass/Content.sass"
import "../../assets/sass/Footer.sass"
import "../../assets/sass/Modal.sass"
import "../../assets/sass/Film.sass"
import "../../assets/sass/Channel.sass"

// App Component with Redux Integration
class AppComponent extends React.Component {

	removeTabActions(element) {
		if (document.querySelector(element)) {
			document.querySelector(element).addEventListener('keydown', function(e) {
				if (e.which == 9) {
					e.preventDefault();
				}
			})
		}
	}

	componentWillMount() {
		this.props.auto_auth()
	}

	componentDidMount() {
		this.removeTabActions("input")
		this.removeTabActions("a")
	}

	componentDidUpdate(prevProps) {
		const {error, alert} = this.props

		if (this.props.Alert !== prevProps.Alert && this.props.Alert.isShow && this.props.Alert.additionalInfo === "AUTH") {

			this.props.alert.success(this.props.Alert.msg)
			this.props.clearAlert()
		}

		if (this.props.Alert !== prevProps.Alert && this.props.Alert.isShow && this.props.Alert.additionalInfo === "AUTH_ERROR") {

			this.props.alert.error(this.props.Alert.msg)
			this.props.clearAlert()
		}

		if (this.props.Alert !== prevProps.Alert && this.props.Alert.isShow && this.props.Alert.additionalInfo === "MAKING_COMMENT_ERROR") {

			this.props.alert.error(this.props.Alert.msg)
			this.props.clearAlert()
		}

		if (this.props.Alert !== prevProps.Alert && this.props.Alert.isShow && this.props.Alert.additionalInfo === "SEEKING_FAILED") {

			this.props.alert.error(this.props.Alert.msg)
			this.props.clearAlert()
		}
	}

	render() {
		return  <App {...this.props} removeTabActions={this.removeTabActions.bind(this)}/>
	}
}

// All Redux State
let mapStateToProps = (state) => {
	return {
		...state,
	}
}

// If this website needs additional functionality in the future, I will add it here
let mapDispatchToProps = (dispatch, ownProps) => {
	return {
		openAuth: () => {
			dispatch(openAuth())
		},
		closeAuth: () => {
			dispatch(closeAuth())
		},
		logout: () => {
			dispatch(logout())
		},
		save_user_name: ({name, id}) => {
			dispatch(save_user_name({name, id}))
		},
		auto_auth: () => {
			dispatch(auto_auth())
		},
		SeekForVideo: (name) => {
			dispatch(seek_for_video(name))
			dispatch(reset("seekForVideo"))
		},
		remove_founded: () => {
			dispatch(remove_founded())
		},
		scrollTo: (target) => {
			if (document.querySelector(target)) {
				document.querySelector(target).scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "center",
				});
			}
		},
		clearAlert, successAlert, clearErrors
	}
}

// Adding withRouter from React Router Dom
let withAppComponent = withAlert()(withRouter(AppComponent))

// Connecting React JSX component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(withAppComponent)
