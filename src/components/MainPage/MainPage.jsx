import React from 'react'

// Components
import Header from "../Header/HeaderComponent"
import Content from "../Content/ContentComponent"
import Footer from "../Footer/FooterComponent"

class MainPage extends React.Component {
	render() {
		if (this.props.actions.windows.auth.is_open)
			document.querySelector("html").classList.add("remove-overflow")
		else
			document.querySelector("html").classList.remove("remove-overflow")

		return (
			<div className={"inner-wrapper"}>
				<Content {...this.props} />
			</div>
		)
	}
}

export default MainPage
