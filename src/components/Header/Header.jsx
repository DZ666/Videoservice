import React from 'react'

// Dom Data
import {Link} from "react-router-dom"

// Images
import Logo_png from "../../assets/images/logos/logo.png"

import {reduxForm, Field} from "redux-form"

import {connect} from "react-redux"

import RenameForm from "./RenameForm"

const required = value => value
	? undefined
	: 'Заполните поле.'

const CustomField = ({
	input,
	meta,
	type,
	...props
}) => {
	let hasError = meta.error && meta.touched
	let additionalStylesWrapper = props.forwrapper !== undefined
		? ` ${props.forwrapper} `
		: ""
	let additionalStylesSpanWidthError = props.forspan !== undefined
		? ` ${props.forspan} `
		: ""
	return (<div className={"field " + (
			hasError
			? " error "
			: "") + additionalStylesWrapper}>
		{
			type === "textarea"
				? <textarea {...input} {...props}></textarea>
				: <input {...input} {...props} type={type}/>
		}

		{
			hasError
				? <span className={additionalStylesSpanWidthError + " error-span"}>{meta.error}</span>
				: ""
		}
	</div>)

}

let SeekForVideo = (props) => {
	let {handleSubmit, invalid, submitting, pristine, user} = props
	return (<form onSubmit={handleSubmit} className={"inner-header__navigation" + (user.is_auth ? " auth-nav" : "")}>
		<Field type="text" validate={[required]} name="search_value" component={CustomField} className="search_field" placeholder="Поиск..."/>
		<input type="submit" className="search_submit" value="Найти" disabled={invalid || submitting || pristine}/>
	</form>)
}

let SeekForVideoForm = connect(state => ({...state}))(SeekForVideo)

SeekForVideoForm = reduxForm({form: 'seekForVideo'})(SeekForVideoForm)


class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			is_nav_open: false,
			is_renaming: false
		}
		this.nav = React.createRef()
		this.focus_el = React.createRef()
		this.focus = this.focus.bind(this)
		this._isMounted = false
	}

	focus() {
		document.querySelector(".rename-form").querySelector("input").focus()
	}

	async closeNav() {
		await this.setState({is_nav_open: false})
	}

	async openNav() {
		await this.setState({is_nav_open: true})
	}

	async save_user_name(target) {
		target.preventDefault()
		if (!this.props.form.renameForm.syncErrors) {
			await this.props.save_user_name({name: this.props.form.renameForm.values.login, id: this.props.user.user_data.id})
		}
	}

	rename() {
		this.setState({is_renaming: true})
	}

	close_rename() {
		this.setState({is_renaming: false})
	}

	SeekForVideo(event) {
		event.preventDefault()
		this.props.SeekForVideo(this.props.form.seekForVideo.values.search_value)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)

		this.mounted = false
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.is_renaming) {
			this.focus()
		}
	}

	componentDidMount() {
		this.mounted = true

		if (this.mounted) {
			document.addEventListener('mousedown', this.handleClickOutside)
		}
	}

	render() {
		return (<header className="header">
			<div className="inner-header">
				<div className="header-logo__nav-wrapper">
					<Link className="inner-header__logotype" to="/">
						<img src={Logo_png} alt="video-logo"/>
						<span className="logo-name">Видеосервис</span>
					</Link>
					<SeekForVideoForm handleSubmit={this.SeekForVideo.bind(this)}/>
					{
						this.props.user.is_auth
							? <div className={"name_logout" + (this.state.is_renaming ? " showed_rename_form" : "")}>
									<RenameForm handleSubmit={this.save_user_name.bind(this)} focus_el={this.focus_el} close_rename={this.close_rename.bind(this)}/>
									<input onClick={this.rename.bind(this)} type="text" readOnly="readOnly" value={this.props.user.user_data.name} className="user-name"/>
									<input onClick={this.props.logout} type="submit" className="logout_btn" value="Выйти"/>
								</div>
							: <input onClick={this.props.openAuth} type="submit" className="login_btn" value="Войти"/>
					}
				</div>
			</div>
		</header>)
	}
}

export default Header
