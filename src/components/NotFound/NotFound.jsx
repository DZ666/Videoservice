import React from 'react'
import { Link } from "react-router-dom"

class NotFound extends React.Component {
	render () {
		return (<section className="notfound">
			<h1 className="title">Страница отсутсвует</h1>
			<br/>
			<Link to="/">На главную</Link>
		</section>)
	}
}

export default NotFound
