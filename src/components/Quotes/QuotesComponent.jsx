// Default Iimports
import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

// Additional Imports
	// Actions Imports
		import { openQuotesReview, closeQuotesReview } from "../../redux/actions/action.actions.js"
	// Components
		import Quotes from "./Quotes"

class QuotesComponent extends React.Component {
  render () {
    return <Quotes {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

// Integrate open and close quotes actions
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
  openQuotesReview: (id) => {
      dispatch(openQuotesReview(id))
    },
    closeQuotesReview: (id) => {
      dispatch(closeQuotesReview(id))
    }
  }
}

// Hooking QuotesComponent with "withRouter"
let withQuotesComponent = withRouter(QuotesComponent)

// Connecting QuotesComponent with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withQuotesComponent)
