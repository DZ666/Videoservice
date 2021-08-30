// Defailt Imports
import React from 'react'

// Additional imports
	// Component
		import OurStory from "./OurStory"

class OurStoryComponent extends React.Component {
  render () {
    return <OurStory { ...this.props } />
  }
}

export default OurStoryComponent
