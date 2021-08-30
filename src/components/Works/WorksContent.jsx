import React from "react"
import { Link } from "react-router-dom"

class WorksContent extends React.Component {

  constructor() {
    super()
    this.state = {
      works_dom: []
    }
  }

  async display_works() {
    await this.setState({
      works_dom: [ ...this.props.actions.works.map(work => (
        <div className="work-item col col-sm-12 col-md-6 col-lg-2" key={"work-" + work.id}>
          <div className="photo-container" style={{backgroundImage: `url("${work.img}")`}}></div>
          <div className="slide">
            <p>{work.name}</p>
          </div>
        </div>
      )) ]
    })
  }

  componentDidMount() {
    this.display_works()
  }

  render () {
    return (
      <section className="work-list">
        <div className="work-list__inner-wrapper col-12">
          { this.state.works_dom }
        </div>
        <div className="col-12 works-block">
          <Link className="submit-btn" to="/">LOAD MORE</Link>
        </div>
	</section>
    )
  }
}

export default WorksContent
