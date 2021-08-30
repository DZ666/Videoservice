import React from 'react'
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

class Films extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			new_created: null,
			genres: null
		}
	}

	get_film_by_id(id) {
		return this.props.film.list.filter(film => film.id === id)[0] || {}
	}

	async getData() {
		await this.setState({
			new_created: this.props.film.new_created.map(id => (<div className="new-created-video" key={"last-film-id-" + this.get_film_by_id(id).id}>
				<Link onClick={()=>{ this.props.scrollTo(".inner-wrapper") }} to={"/film/" + (this.get_film_by_id(id).id + 1)} className="new-created-video-wrapper">
					<img src={this.get_film_by_id(id).img} alt={this.get_film_by_id(id).name}/>
					<span className="new-created-video-wrapper__desctription">{this.get_film_by_id(id).description}</span>
				</Link>
				<div className="new-created-video-text-name">
					<p>{this.get_film_by_id(id).name}</p>
				</div>
			</div>)),
			genres: this.props.film.genres.slice(0, 4).map(genre => (<div className={"genre" + " " + genre.type} key={"genre-id-"+genre.id}>
				<div className="genre-img-wrapper"><img src={genre.img} alt={genre.name}/></div>
				<p className="genre-name">
					{genre.name}
				</p>
			</div>)),
		})
	}

	componentDidMount() {
		this.getData()
	}

	render () {
		return (<div className="films-wrapper">
			<h4 className="title">🔥 Новинки</h4>
			<Slider {...{
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
				    {
				      breakpoint: 1050,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true,
				        dots: true
				      }
				    },
				    {
				      breakpoint: 800,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
				  ]
		    }} className="new-created-videos-wrapper">
				{this.state.new_created}
			</Slider>
			<h4 className="title genres-title">Жанры</h4>
			<div className="genres-wrapper">{this.state.genres}</div>
		</div>)
	}
}

export default Films
