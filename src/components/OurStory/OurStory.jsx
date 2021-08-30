// Default Imports
import React from 'react'

import { Link } from "react-router-dom"

// Additional Imports
	// Images
		import Logo from "../../assets/images/simple/big-logo.webp"

class OurStory extends React.Component {
  render () {
    return (
      <section className="container OurStory__wrapper">
        <div className="col-12 OurStory__inner-wrapper">
          <div className="OurStory__logotype col-lg-5 col-md-6 col-sm-12"><img src={Logo} alt="Logo" /></div>
          <div className="OurStory__content col-lg-6 col-md-12 col-sm-12">
            <h2 className="title OurStory__title col-lg-12 col-md-12 col-sm-12">OUR STORY</h2>
            <p className="OurStory__subtitle col-12">
				This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor <br/>
				aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, <br/>
				nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
			</p>
            <p className="OurStory__subtitle col-12">
				Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. <br/>
				Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu <br/>
				ad litora torquent per conubia nostra, per inceptos himenaeos.
			</p>
            <Link className="submit-btn" to="/">LEARN MORE</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default OurStory
