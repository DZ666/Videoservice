import React from 'react'

import Films from "./Films"

class FilmsComponent extends React.Component {
	render () {
		return <Films {...this.props} />
	}
}

export default FilmsComponent
