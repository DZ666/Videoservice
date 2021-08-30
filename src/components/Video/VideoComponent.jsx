// Default Imports
  import React from 'react'

  import { withRouter } from "react-router-dom";

  import { connect } from "react-redux"

// Additional imports
  // Actions Funcs
    import { openWindow, closeWindow } from "../../redux/actions/action.actions.js"
  // Components
    import Video from "./Video"

class VideoComponent extends React.Component {
  render () {
    return <Video { ...this.props } openWindow={this.props.openWindow.bind(this)} closeWindow={this.props.closeWindow.bind(this)} />
  }
}

// All redux state
let mapStateToProps = (state) => {
  return {
    ...state
  }
}

// Integrate open and close winodw actions
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openWindow: () => {
      dispatch(openWindow())
    },
    closeWindow: () => {
      dispatch(closeWindow())
    }
  }
}

// Hooking VideoComponent with "withRouter"
let withVideoComponent = withRouter(VideoComponent)

// Connecting VideoComponent with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withVideoComponent)
