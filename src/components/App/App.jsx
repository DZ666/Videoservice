// Main Imports
import React from 'react'
import {
  Route,
  Switch,
} from "react-router-dom"

import { withAlert } from "react-alert"

// Pages Imports
import Header from "../Header/HeaderComponent"
import Footer from "../Footer/FooterComponent"
import MainPage from "../MainPage/MainPageComponent"
import FilmPage from "../Films/Film"
import NotFound from "../NotFound/NotFound"

import Windows from "../Windows/WindowsComponent"
import Redirects from "../Redirects"

class App extends React.Component {
  render () {
    return(
		<div className="wrapper">
			<Header {...this.props} />
			<Switch>
				<Route exact path="/">
					<MainPage {...this.props} />
				</Route>
				<Route path="/film/:id">
					<FilmPage {...this.props} />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
			<Footer {...this.props} />
			<Windows {...this.props} />
			<Redirects {...this.props} />
		</div>

	)
  }
}

export default withAlert()(App)
