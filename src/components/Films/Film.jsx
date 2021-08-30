// Default Imports
import React from 'react'

import {withRouter, Link} from "react-router-dom"

import { Scrollbars } from 'react-custom-scrollbars'

import {connect} from "react-redux"

import { reset } from "redux-form"

import Header from "../Header/HeaderComponent"
import MakeComment from "../CommentForm"
import Footer from "../Footer/FooterComponent"

import Windows from "../Windows/WindowsComponent"

import {openWindow, closeWindow, openAuth, closeAuth, makeComment, delete_comment} from "../../redux/actions/action.actions.js"
import {save_user_name} from "../../redux/actions/auth.actions.js"

import empty from "../../assets/images/films/empty.jpg"
import go_back_img from "../../assets/images/action-images/go-back.png"

class Film extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: null,
			node: null,
			comments: null,
			comments_node: null
		}
		this.renderFilm = this.renderFilm.bind(this)
	}

	async getComments() {
		await this.setState({
			comments: null,
			comments_node: null,
			node: null
		})
		await this.setState({
			comments: ((JSON.parse(localStorage.getItem("users")).map(user => ([...user.comments.map(comment => ({
				...comment,
				user_id: user.id,
				user_name: user.name
			}))]))).flat().sort((l, r) => l.post_date - r.post_date).reverse()).filter(comment => comment.film_id === this.props.match.params.id - 1)
		})
		await this.setState({
			comments_node: this.state.comments.length > 0
				? (this.state.comments.map(comment => <div key={"users-comment-id-" + comment.user_id + comment.id + comment.film_id} className="comment">
						<h5 className="comment-name">{comment.user_name}</h5>
						<p className="comment-text">{comment.text}</p>
						{
							this.props.user.is_auth
								? <div onClick={()=>this.delete_comment(comment.user_id, comment.id)} className={"delete-comment-btn" + (!(this.props.user.user_data.id === comment.user_id) ? " hidden" : "")}></div>
								: null
						}
					</div>))
				: <div className="no-comments">Комментарии отсутсвуют...</div>
		})
	}

	async delete_comment(user_id, id) {
		await this.props.delete_comment(user_id, id)
		await this.renderFilm()
	}

	async makeComment(e) {
		e.preventDefault()
		await this.props.makeComment({comment: this.props.form.CommentForm.values.comment, id: this.props.match.params.id - 1 })
		this.renderFilm()
	}

	get_film_by_id(id) {
		return this.props.film.list.filter(film => film.id === id)[0] || {}
	}

	async getFilm() {
		await this.setState({
			data: null
		})
		await this.setState({
			data: this.get_film_by_id(this.props.match.params.id - 1)
		})
	}

	filter_genres(film) {
		return film.genre.map(g => this.props.film.genres.filter(genre => genre.id === g)).flat()
	}

	async genFilm() {
		await this.setState({
			node: null
		})
		let film = await this.state.data || { }
		if (film.img !== undefined) {
			await this.setState({node: (<div className="film-wrapper" key={"film-" + film.id}>
				<div className="film-info">
					<div className="film-img">
						<Link className="go-back" to="/"><img src={go_back_img} alt={"Go back"}/></Link>
						<img src={film.img} alt={film.name}/>
					</div>
					<div className="film-texts">
						<div className="film-name">
							<span>Название:</span>
							<h5>{film.name}</h5>
						</div>
						<div className="film-country">
							<span>Страна:</span>
							<h5>{
									film.countries.map(
										(country, index) => film.countries.length - 1 > index
										? `${country},`
										: `${country}`)
								}</h5>
						</div>
						<div className="film-genre">
							<span>Жанр:</span>
							<h5>{
								Array.isArray(film.genre)
									? this.filter_genres(film).map((genre, index) => genre.Name + (index + 1 < this.filter_genres(film).length ? ", " : ""))
									: (this.props.film.genres.filter(genre => genre.id === film.genre)).map(genre => genre.Name)
							}</h5>
						</div>
						<Scrollbars
							autoHide
			                autoHideTimeout={1000}
			                autoHideDuration={200}
							className="film-description">
							<p>{film.description}</p>
						</Scrollbars>
					</div>
				</div>
				<div className="film-comments">
					<h4>Комментарии</h4>
					{
						!this.props.user.is_auth
							? <p className="subtitle">(Пройдите авторизацию, чтобы оставить комментарий)</p>
							: null
					}
					<MakeComment handleSubmit={this.makeComment.bind(this)}/>
					<Scrollbars
						className="comments-wrapper"
						autoHide
						autoHideTimeout={1000}
						autoHideDuration={200}>
						{this.state.comments_node}
					</Scrollbars>
				</div>
			</div>)})
		} else {
			await this.setState({node: (<div className="film-wrapper" key={"film-unknown"}>
				<div className="film-info">
					<div className="film-img">
						<img src={empty} alt={empty}/>
					</div>
					<div className="film-texts">
						<div className="film-name">
							<span>Название:</span>
							<h5>unknown</h5>
						</div>
						<div className="film-country">
							<span>Страна:</span>
							<h5>unknown</h5>
						</div>
						<div className="film-genre">
							<span>Жанр:</span>
							<h5>unknown</h5>
						</div>
					</div>
				</div>
			</div>)})
		}
	}

	async renderFilm() {
		await this.getFilm()
		await this.getComments()
		await this.genFilm()
	}

	componentDidMount() {
		this._isMounted = true

		if (this._isMounted) {
			this.renderFilm()
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.user.is_auth !== this.props.user.is_auth || this.props.match.params.id !== prevProps.match.params.id) {
			this.renderFilm()
		}
	}

	componentWillUnmount() {
	    this._isMounted = false
	  }

	render() {
		return (<div className={"inner-wrapper"}>
			{this.state.node}
		</div>)
	}
}

// All redux state
let mapStateToProps = (state) => {
	return {
		...state
	}
}

// Integrate open and close winodw actions
let mapDispatchToProps = (dispatch, ownProps) => {
	return {
		openAuth: () => {
			dispatch(openAuth())
		},
		closeAuth: () => {
			dispatch(closeAuth())
		},
		save_user_name: ({name, id}) => {
			dispatch(save_user_name({name, id}))
		},
		makeComment: (data) => {
			dispatch(makeComment(data))
			dispatch(reset("CommentForm"))
		},
		delete_comment: (user_id, id) => {
			dispatch(delete_comment(user_id, id))
		}
	}
}

// Hooking VideoComponent with "withRouter"
let withFilmComponent = withRouter(Film)

// Connecting VideoComponent with redux
export default connect(mapStateToProps, mapDispatchToProps)(withFilmComponent)
