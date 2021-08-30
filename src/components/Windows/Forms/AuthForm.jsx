import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {reduxForm, Field, change} from "redux-form"

import {connect} from "react-redux"
import {compose} from "redux"

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
				: type === "checkbox"
					? <div>
							<input {...input} {...props} type={type}/>
							<label htmlFor={props.id}>{props.placeholder}</label>
						</div>
					: <input {...input} {...props} type={type}/>
		}

		{
			hasError
				? <span className={additionalStylesSpanWidthError + " error-span"}>{meta.error}</span>
				: ""
		}
	</div>)

}

const AuthForm = (props) => {
	let {handleSubmit, invalid, submitting, pristine, closeAuth, change, initialValues} = props

	return (<form onSubmit={handleSubmit} className="auth-form">
		<div className="auth-form-block">
			<h2 className="auth-form__title">Вход</h2>
			<Field validate={[required]} component={CustomField} name="name" type="text" placeholder="Логин"/>
			<Field validate={[required]} component={CustomField} name="password" type="password" placeholder="Пароль"/>
			<Field component={CustomField} name="remember" type="checkbox" id="remember" placeholder="Запомнить"/>
		</div>
		<input type="submit" value="Войти" className="login_btn" disabled={invalid || submitting || pristine || props.user.is_loading}/>
	</form>)
}

const InitializeAuthForm = compose(
  reduxForm({
    form: 'auth',
    enableReinitialize: true,
  }),
  connect(
    state => ({
      ...state
    }),
  ),
)(AuthForm)


export default InitializeAuthForm
