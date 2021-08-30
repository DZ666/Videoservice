import React from 'react'
import { Link } from "react-router-dom"

class WorksTitle extends React.Component {
  render () {
    return (
      <section className="container works">
        <div className="inner-work">
          <div className="title-wrapper work-title-wrapper col-8">
			      <h2 className="title work-title dark-color col-lg-2 col-md-6 col-sm-12">OUR WORKS</h2>
        	  <Link className="go-to-right col-lg-2 col-md-6 col-sm-12" to="#">See All Project in dribbble</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default WorksTitle
