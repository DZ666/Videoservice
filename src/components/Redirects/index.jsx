import React from 'react'

import { Redirect, Switch } from "react-router-dom"

class Redirects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			founded_film: null
		}
	}

	remove_founded() {
		this.setState({
			founded_film: null
		})
		this.props.remove_founded()
	}

	setFounded(film) {
		this.setState({
			founded_film: film
		})
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.actions.founded_film !== null) {
			this.setFounded(nextProps.actions.founded_film)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.founded_film !== null) {
			this.remove_founded()
		}
	}

	render () {
		if (this.state.founded_film !== null) {
			return <Redirect to={"/film/" + (this.state.founded_film + 1)} />
		}
		return null
	}
}

export default Redirects
