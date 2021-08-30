import React, {useEffect, useState} from 'react'

import {reduxForm, Field, change} from "redux-form"

import {connect} from "react-redux"
import {compose} from "redux"

import { rename } from "../../redux/actions/auth.actions.js"

const required = value => value
	? undefined
	: 'Заполните поле.'

const CustomField = ({
	input,
	meta,
	type,
	focus_el,
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
				? <textarea ref={el => focus_el = el} {...input} {...props}></textarea>
				: type === "checkbox"
					? <div>
							<input ref={el => focus_el = el} {...input} {...props} type={type}/>
							<label htmlFor={props.id}>{props.placeholder}</label>
						</div>
					: <input ref={el => focus_el = el} {...input} {...props} type={type}/>
		}

		{
			hasError
				? <span className={additionalStylesSpanWidthError + " error-span"}>{meta.error}</span>
				: ""
		}
	</div>)

}

const Rename = (props) => {
	let {
		handleSubmit,
		invalid,
		submitting,
		pristine,
		closeAuth,
		change,
		initialValues,
		focus_el,
		close_rename
	} = props
	return (<form onBlur={handleSubmit} onSubmit={handleSubmit} className="rename-form">
		<Field validate={[required]} onBlur={close_rename} focus_el={focus_el} component={CustomField} name="login" type="text"/>
	</form>)
}

// const InitializeRenameForm = compose(
// 	reduxForm({
// 		form: 'rename',
// 		enableReinitialize: true
// 	})(Rename),
// 	connect(state => ({
// 		...state,
// 		initialValues: {
// 			login: state.user.user_data.name
// 		}
// 	})),
// )(Rename)

const RenameForm = reduxForm({form: 'renameForm'})(Rename)

const InitializeRenameForm = connect(state => ({
	initialValues: {
		login: state.user.user_data.name
	}}),{ rename: rename })(RenameForm)

export default InitializeRenameForm
