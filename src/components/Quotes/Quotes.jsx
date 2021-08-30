// Default Imports
import React from 'react'

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Quotes extends React.Component {

  constructor() {
    super()
    this.slackRef = React.createRef()
    this.state = {
      nav1: null,
      reviews_1: null,
      nav2: null,
      reviews_2: null
    }
  }

  async displayReviews() {
    this.setState({
      reviews_1: [ this.props.actions.slack_reviews.map((review, index) => {
        return <div className="d-flex flex-wrap justify-content-center" key={review + "-id"}>
          <div className="title-wrapper employ-review col-12">
            <h2 className="title ta-l p-0 pb-30 w-100">“</h2>
            <p className="sm-t p-0 white-sm-t col-lg-6 col-md-8 col-sm-12">{review.review}</p>
          </div>
          <div className="review-title d-flex flex-wrap justify-content-center col-12">
            <p className="sm-t white-color pb-13 mb-0 col-12">{review.name}</p>
            <p className="sm-t sm-subtitle pb-45 mb-0 col-12">{review.profession}</p>
          </div>
        </div>
      }) ],
      reviews_2: [ this.props.actions.slack_reviews.map((review, index) => {
        return <div className="d-flex flex-wrap justify-content-center" key={review + "-id"}>
          <img className="face" src={review.img} alt={"face-" + index} />
        </div>
      }) ]
    })
  }

  componentWillMount() {
    this.displayReviews()
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render () {
    let settings_for = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 500,
      infinite: true,
      asNavFor: this.state.nav2
    }
    let settings = {
      centerMode: true,
      centerPadding: '60px',
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      focusOnSelect: true,
      swipeToSlide: true,
      asNavFor: this.state.nav1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 540,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 370,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '90px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 1
          }
        },
      ]
    }
    return (
      <section className="quotes d-flex justify-content-center align-items-start pt-70 pb-70">
        <div className="container inner-quotes d-flex justify-content-center align-items-start row">

          <Slider {...settings_for} ref={slider => (this.slider1 = slider)} className="review-title d-flex flex-wrap justify-content-center col-12">
            { this.state.reviews_1 }
          </Slider>
          <Slider {...settings} ref={slider => (this.slider2 = slider)} className="photos d-flex justify-content-center overflow-sm-scroll">
            { this.state.reviews_2 }
          </Slider>
        </div>
      </section>
    )
  }
}

export default Quotes
