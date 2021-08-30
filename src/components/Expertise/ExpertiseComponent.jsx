// Default Imports
import React from 'react'

// Additional Imports
	// JSX component
		import Expertise from "./Expertise"

// No integration with Redux because there is no need for it
class ExpertiseComponent extends React.Component {
  render () {
    return <Expertise {...this.props} />
  }
}

export default ExpertiseComponent
