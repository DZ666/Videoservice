// Default Imports
	import React from 'react'

	import { withRouter } from "react-router-dom";

	import { connect } from "react-redux"

// Additional Imports
	// Actions Funcs
		import { openReview, closeReview } from "../../redux/actions/action.actions.js"
	// Components
    	import Team from "./Team.jsx"

class TeamComponent extends React.Component {
  render () {
    return <Team {...this.props} openReview={this.props.openReview.bind(this)} closeReview={this.props.closeReview.bind(this)} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

// Integrate open and close review actions
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openReview: (id) => {
      dispatch(openReview(id))
    },
    closeReview: (id) => {
      dispatch(closeReview(id))
    }
  }
}

// Hooking VideoComponent with "withRouter"
let withTeamComponent = withRouter(TeamComponent)

// Connecting VideoComponent with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTeamComponent)
