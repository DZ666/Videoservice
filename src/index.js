import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"

import {CookiesProvider} from 'react-cookie'

import {Provider} from "react-redux"

import { useAlert, positions, Provider as AlertProvider } from "react-alert"

// Component App
import {AlertTemplate} from "./components/Templates/AlertTemplate"
import App from './components/App/AppComponent'

import store from "./redux/store.js"

const options = {
	timeout: 3000,
	position: positions.TOP_CENTER
}

ReactDOM.render(<Provider store={store}>
	<CookiesProvider>
		<Router>
			<AlertProvider template={AlertTemplate} {...options}>
				<App/>
			</AlertProvider>
		</Router>
	</CookiesProvider>
</Provider>, document.getElementById('root'))
