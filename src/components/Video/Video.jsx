// Default Imports
import React from 'react'

// Additional imports
  // Images
    import play_btn_webp from "../../assets/images/icons/play-icon.webp"

class Video extends React.Component {
  render () {
    return(
      <section className="container story d-flex justify-content-center align-items-center">
        <div className="inner-story d-flex justify-content-center" id="watch" onClick={this.props.openWindow}>
          <img src={play_btn_webp} alt="Play" />
          <p>WATCH OUR STORY</p>
        </div>
      </section>
    )
  }
}

export default Video
