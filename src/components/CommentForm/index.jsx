import React from 'react'
import { reduxForm, Field } from "redux-form"

import {connect} from "react-redux"


const required = value => value
  ? undefined
  : 'Заполните поле'

const email_validation = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Please write a correct email address'
  : undefined

const maxLength = max => value => value && value.length > max
  ? `Maximum number of characters is ${max}`
  : undefined

const minLength = min => value => value && value.length < min
  ? `Minimum number of characters is ${min}`
  : undefined

const min3 = minLength(3)
const min11 = minLength(11)
const max50 = maxLength(50)
const max255 = maxLength(255)

const CustomField = ({input, meta, type, ...props}) => {
    let hasError = meta.error && meta.touched
    let additionalStylesWrapper = props.forwrapper !== undefined ? ` ${props.forwrapper} ` : ""
    let additionalStylesSpanWidthError = props.forspan !== undefined ? ` ${props.forspan} ` : ""
    return (
      <div className={"field comment-field-form " + ( hasError ? " error " : "") + additionalStylesWrapper }>
        {
          type === "textarea"
          ? <textarea {...input} {...props}></textarea>
          : <input {...input} {...props} type={type} />
        }

        { hasError ? <span className={"error-span pt-10" + additionalStylesSpanWidthError}>{meta.error}</span> : "" }
      </div>
    )

}

class Comment extends React.Component {
	render () {
		return (<form onSubmit={this.props.handleSubmit} className={"comment-form" + (!this.props.user.is_auth ? " hidden" : "")}>
			<Field type="textarea" validate={[required]} component={CustomField} name="comment" placeholder={"Введите комментарий..."} className="comment-field"/>
			<input type="submit" className="comment-submit" value="Опубликовать"/>
		</form>)
	}
}

const CommentFormConnection = connect(state => ({...state}) )(Comment)

const CommentForm = reduxForm({form: 'CommentForm'})(CommentFormConnection)

export default CommentForm
