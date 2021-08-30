// Default Imports
	import React from 'react'

// Additional Imports
	// Images
		import desktop_webp from "../../assets/images/icons/expertise_cards/desktop.webp"
		import brush_webp from "../../assets/images/icons/expertise_cards/brush.webp"
		import phone_webp from "../../assets/images/icons/expertise_cards/phone.webp"
		import chart_webp from "../../assets/images/icons/expertise_cards/chart.webp"
		import calculator_webp from "../../assets/images/icons/expertise_cards/calculator.webp"
		import heart_webp from "../../assets/images/icons/expertise_cards/heart.webp"

class Expertise extends React.Component {
  render () {
    return (
      <div className="container expertise">
        <div className="inner-expertise">
          <div className="title-wrapper expertise__title-wrapper col-12">
            <h1 className="title expertise__title dark-color">EXPERTISE</h1>
            <p className="expertise__title-undertitle grey-underline">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          </div>
          <div className="expertise-cards-wrapper col-12">
            <div className="expertise-card">
              <div className="card-image">
                <img src={desktop_webp} style={{ marginRight: "-15px", marginBottom: "-5px" }} alt="WEB DESIGN & DEVELOPMENT" />
              </div>
              <div className="card-title" style={{ wordSpacing: "1.9px", textAlign: "right", paddingRight: "28px", paddingLeft: "28px", letterSpacing: "0" }}>WEB DESIGN & DEVELOPMENT</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={brush_webp} alt="BRENDING IDENTITY" />
              </div>
              <div className="card-title" style={{ letterSpacing: "0", wordSpacing: "2px" }}>BRENDING IDENTITY</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={phone_webp} style={{ marginLeft: "-10px", marginBottom: "-5px" }} alt="MOBILE APP" />
              </div>
              <div className="card-title" style={{ letterSpacing: "0.2px", wordSpacing: "1.1px", marginLeft: "-10px" }}>MOBILE APP</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
          </div>
          <div className="expertise-cards-wrapper second-expertise-cards-wrapper col-12">
            <div className="expertise-card">
              <div className="card-image">
                <img src={chart_webp} style={{ marginRight: "-10px" }} alt="SEARCH ENGINE OPTIMIZATION" />
              </div>
              <div className="card-title" style={{marginRight: "-14px"}}>SEARCH ENGINE OPTIMIZATION</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={calculator_webp} alt="GAME DEVELOPMENT" />
              </div>
              <div className="card-title">GAME DEVELOPMENT</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={heart_webp} style={{ marginLeft: "-12px" }} alt="MADE WITH LOVE" />
              </div>
              <div className="card-title" style={{marginLeft: "-12px"}}>MADE WITH LOVE</div>
              <div className="card-text">This is Photoshop's version  of Lorem <br/> Ipsum. Proin gravida nibh vel velit <br/> auctor aliquet Aenean.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Expertise
