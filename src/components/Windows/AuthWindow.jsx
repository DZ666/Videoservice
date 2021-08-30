import React, { createRef, useEffect } from 'react'

import {withCookies, Cookies} from 'react-cookie'

import {withRouter} from "react-router-dom"

import {connect} from "react-redux"

import AuthForm from "./Forms/AuthForm"

import { auth } from "../../redux/actions/auth.actions.js"

class AuthWindow extends React.Component {
	constructor(props) {
		super(props)
		this.modalRef = createRef()
		this.state = {
			is_auth_accepted: false
		}
	}

	handleClickOutside(event) {
		if (event.target.className === "modal-auth") {
			this.props.closeAuth()
		}
	}

	authSubmit(e) {
		e.preventDefault()
		this.props.Auth(this.props.form.auth.values)
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside.bind(this))
	}

	componentDidUpdate(prevProps) {
		if (this.props.user.is_auth && !this.state.is_auth_accepted) {
			this.setState({
				is_auth_accepted: true
			})
			this.props.closeAuth()
		}
	}

	render() {
		return (<div ref={this.modalRef} className="modal-auth">
			<AuthForm handleSubmit={this.authSubmit.bind(this)} user={this.props.user}/>
		</div>)
	}
}

// All Redux State
const mapStateToProps = (state) => {
	return {
		...state
	}
}

// If this website needs additional functionality in the future, I will add it here
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		Auth: (data) => {
			dispatch(auth(data))
		}
	}
}

// Adding withRouter from React Router Dom
const withAuthWindow = withRouter(AuthWindow)

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(withAuthWindow))
