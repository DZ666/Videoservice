// Main Imports
	import React from 'react'
	import {reduxForm, Field} from "redux-form"
	import { Link } from "react-router-dom"

// Additional Imports
	// Images
		// PNG
			import logo_png from "../../assets/images/logos/archer.png"

// In a real project, I will take the validation from here and transfer it to one additional file, and I will take these files from there

// If value equals undefined then return false
const required = value => value
	? undefined
	: 'Fill in the field'

// If email is not fitting to template then returns false
const email_validation = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
	? 'Please write a correct email address'
	: undefined

// Form Field Template
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
				? <span className={"pt-10" + additionalStylesSpanWidthError}>{meta.error}</span>
				: ""
		}
	</div>)
}

// Subscribe {Footer Form}
class FF extends React.Component {
	render() {
		return (<form className="col-12 footer-form" onSubmit={this.props.handleSubmit}>
			<div className="field-wrapper">
				<Field type="text" validate={[required, email_validation]} component={CustomField} name="subscribe" placeholder="Subscribe our newsletter"/>
				<input className="submit-btn" type="submit" value=""/>
			</div>
		</form>)
	}
}

// Hooking FooterForm with reduxForm and adding to redux-form state
const FooterForm = reduxForm({form: "footer"})(FF)

// Footer Component
class Footer extends React.Component {

	// Submit Which Alerting User Email
	handleSubmit(data) {
		alert(data.subscribe)
	}

	render() {
		return (<footer className="footer">
			<div className="inner-footer">
				<a
					className="footer-logo"
					href="https://www.google.com/maps/search/426057,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0,+%D0%B3.+%D0%98%D0%B6%D0%B5%D0%B2%D1%81%D0%BA,+%D1%83%D0%BB.+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0,+246+(%D0%94%D0%9A+%C2%AB%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%83%D1%80%D0%B3%C2%BB)/@56.8532945,53.202484,17z/data=!3m1!4b1" target="_blank">
					<img src={logo_png} alt="archer"/>
				</a>
				<div className="footer-links">
					<div className="geo-link-wrapper">
						<a
							className="geo-link"
							href="https://www.google.com/maps/search/426057,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0,+%D0%B3.+%D0%98%D0%B6%D0%B5%D0%B2%D1%81%D0%BA,+%D1%83%D0%BB.+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0,+246+(%D0%94%D0%9A+%C2%AB%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%83%D1%80%D0%B3%C2%BB)/@56.8532945,53.202484,17z/data=!3m1!4b1" target="_blank"
							>
							426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
						</a>
					</div>
					<div className="tel-links-wrapper">
						<a className="tel-link" href="tel:+73412938861">+7 (3412) 93-88-61</a>,	<a className="tel-link" href="tel:+73412432929">43-29-29</a>
					</div>
					<div className="web-link-wrapper">
						<a className="web-link" href="https://htc-cs.ru">htc-cs.ru</a>
					</div>
				</div>
			</div>
		</footer>)
	}
}

export default Footer;
