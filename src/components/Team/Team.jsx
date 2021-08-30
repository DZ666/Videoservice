// Default Imports
  import React from 'react'
  import { Link } from "react-router-dom"

class Team extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  async dispalyReviews() {
    this.setState({
      reviews: [ await this.props.actions.reviews.map(review => (
        <div className="team-card" key={review.id + "-team-card"}>
          <div className="team-card-image" onClick={async () => {
              await this.props.openReview(review.id)
              await this.dispalyReviews()
            }}>

            <img src={review.img} alt={review.name}/>
          </div>
          <div className="team-card-title_profession-wrapper">
            <div className="team-card-title">{review.name}</div>
            <div className="team-card-profession">{review.profession}</div>
          </div>
          <div className={"team-card-review" + (review.is_open ? " team-card-review-opened" : "")}>
            <div className="close-btn" onClick={async () => {
                await this.props.closeReview(review.id)
                await this.dispalyReviews()
              }}>
            </div>
            <p>
              {review.review}
            </p>
          </div>
        </div>
      )) ]
    })
  }

  componentDidMount() {
    this.dispalyReviews()
  }

  render() {
    return (<section className="team">
      <div className="container inner-team">
        <div className="title-wrapper">
          <h2 className="title team-title">MEET OUR AMAZING TEAM</h2>
          <p className="team-subtitle grey-underline">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        </div>
        <div className="team-cards-wrapper col-12">
          { this.state.reviews }
        </div>
        <div className="team-block">
          <p className="team-small-title">Become part of our dream team, let's join us !</p>
		  <Link className="submit-btn" to ="/">WE ARE HIRING</Link>
        </div>
      </div>
    </section>)
  }
}

export default Team
