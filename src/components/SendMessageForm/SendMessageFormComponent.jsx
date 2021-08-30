// Default Imoprts
	import React from 'react'

	import { withRouter } from "react-router-dom";

	import { connect } from "react-redux"

// Additional Imports
	// Actions
		import { sendMessage } from "../../redux/actions/action.actions.js"
	// Components
		import SendMessageForm from "./SendMessageForm"

class SendMessageFormComponent extends React.Component {

  sendMessage(data) {
    console.log(data)
  }

  render () {
    return <SendMessageForm onSubmit={this.sendMessage.bind(this)} />
  }
}

let mapStateToProps = (state) => {
  return {}
}

// Integrate open and close review actions
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (data) => {
      dispatch(sendMessage(data))
    }
  }
}

// Hooking VideoComponent with "withRouter"
let withSendMessageFormComponent = withRouter(SendMessageFormComponent)

// Connecting VideoComponent with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSendMessageFormComponent)
