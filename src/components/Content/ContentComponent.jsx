import React from 'react'

// Content
import Content from "./Content"

// Components
	import Films from "../Films/FilmsComponent"
	import Channels from "../Channels/ChannelsComponent"


class ContentComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pages: [
				{
					id: 0,
					name: "Фильмы",
					is_active: Number(localStorage.getItem("active_page")) === 0 ? true : false,
					component: Films
				},
				{
					id: 1,
					name: "Телеканалы",
					is_active: Number(localStorage.getItem("active_page")) === 1 ? true : false,
					component: Channels
				}
			],
			activePage: null,
			navBar: null
		}
	}

	switchPage() {
		let new_page_list = [],
			prev = 0, active = null
		for (let i = 0, len = this.state.pages.length - 1; i <= len; i++) {
			if (i < len && this.state.pages[i].is_active && i !== active) {
				active = i + 1
				localStorage.setItem("active_page", active)
			} else if (i === len && this.state.pages[i].is_active && i !== active) {
				active = 0
				localStorage.setItem("active_page", active)
				new_page_list[0].is_active = true
			}
			new_page_list.push(this.state.pages[i])
			new_page_list[i].is_active = i === active ? true : false
		}
		this.setState({
			pages: new_page_list
		})
		this.setActivePage()
	}

	async switchPageOn(id) {
		localStorage.setItem("active_page", id)
		if (this.state.pages.filter(page => page.id !== id)) {
			await this.setState({
				pages: this.state.pages.map(page => ({ ...page, is_active: page.id === id }))
			})
			await this.setActivePage()
		}
	}

	getActiveRenderedComponent(props) {
		let Temporary = this.state.pages.filter(item => item.is_active)[0].component
		return <Temporary key={"active-page"} { ...props } />
	}

	setPagesNavBar() {
		this.setState({
			navBar: <nav className="pages-nav-bar"><ul>{ this.state.pages.map(page => <li key={"page-id-" + page.id} onClick={()=>{this.switchPageOn(page.id)}} className={"page-nav-item" + (page.is_active ? " page-nav-active" : "")}>{page.name}</li>) }</ul></nav>
		})
	}

	async setActivePage() {
		this.setState({
			activePage: await this.getActiveRenderedComponent(this.props)
		})
		this.setPagesNavBar()
	}

	setOnTab() {
		window.addEventListener("keyup", async (e) => {
			if (e.which === 9 && this.props.actions.content_tab_available) {
				await this.switchPage()
				this.props.scrollTo(".header")
			}
		})
	}

	componentDidMount() {
		this.setActivePage()
		this.setOnTab()
	}

	render () {
		return <Content {...this.props} navBar={this.state.navBar} activePage={this.state.activePage} />
	}
}

export default ContentComponent
