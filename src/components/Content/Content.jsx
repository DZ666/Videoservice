import React from 'react'

class Content extends React.Component {

	render () {
		return <section className="Content">
			{ this.props.navBar }
			{ this.props.activePage }
		</section>
	}
}

export default Content
