import React from 'react'
import { reduxForm, Field } from "redux-form"

const required = value => value
  ? undefined
  : 'Fill in the field'

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
      <div className={"field " + ( hasError ? " error " : "") + additionalStylesWrapper }>
        {
          type === "textarea"
          ? <textarea {...input} {...props}></textarea>
          : <input {...input} {...props} type={type} />
        }

        { hasError ? <span className={"pt-10" + additionalStylesSpanWidthError}>{meta.error}</span> : "" }
      </div>
    )

}


class SendMessage extends React.Component {
  render () {
    return (
      <section className="send-data-form col-lg-4 col-sm-12">
        <form onSubmit={this.props.handleSubmit} className="container inner-quotes col-12">
          <div className="title-wrapper col-12">
            <h2 className="title dark-color send-data-form__title">GIVE US A GOOD NEWS</h2>
          </div>
          <div className="fields">
            <Field validate={[required, min3, max50]} type="text" component={CustomField} name="name" placeholder="Name" required />
            <Field validate={[required, email_validation]} type="email" component={CustomField} name="email" placeholder="email" required />
            <Field validate={[required, min3, max50]} type="text" component={CustomField} name="subject" placeholder="Subject" required />
            <Field validate={[required, min11, max255]} type="textarea" component={CustomField} name="message" placeholder="Your Message" required />
            <div className="field-submit">
              <input className="submit-btn" type="submit" value="SUBMIT" />
            </div>
          </div>
        </form>
      </section>
    )
  }
}

const SendMessageForm = reduxForm({
  form: "sendMessage",
})(SendMessage)

export default SendMessageForm
