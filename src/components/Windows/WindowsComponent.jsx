import React from 'react'

// Winodws
import AuthWindow from "./AuthWindow"

const list = {
	auth: AuthWindow
}

class WindowsComponent extends React.Component {

	constructor() {
		super()
		this.state = {
			windows: null,
			active_windows: null
		}
	}

	async setWindows(ComponentList) {
		let new_list = {},
			i = 0
		for (let w in ComponentList) {
			let Com = ComponentList[w]
			new_list[w] = {
				name: w,
				is_open: this.props.actions.windows[w].is_open,
				component: <Com {...this.props} key={`window-${i}`} />
			}
			i++
		}
		await this.setState({windows: new_list})
	}

	async getActiveWindows() {
		let new_arr = []
		for (let w in this.state.windows) {
			if (this.state.windows[w].is_open) {
				new_arr.push(this.state.windows[w].component)
			}
		}
		await this.setState({
			active_windows: new_arr
		})
	}

	async setWindowsAgain() {
		await this.setWindows(list)
		await this.getActiveWindows()
	}

	componentWillMount() {
		this.setWindows(list)
	}


	componentDidMount() {
		this.getActiveWindows()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.setWindowsAgain()
		}
	}

	render () {
		return <React.Fragment>
			{ this.state.active_windows }
		</React.Fragment>
	}

}

export default WindowsComponent
