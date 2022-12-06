import "./LandingMain.css"
import {Button} from "react-bootstrap"
const Landingmain = () => {
  // handleClick
  const handleClick = ()=>{
    alert("Please Sign-in ")
  }
    return(
      <div className="home-banner">
        <div className="our-story">
          <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
          <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
          <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Email Address" />
            {/* <button className="input-group-button btn-danger text-white" bg="warning">Get Started</button> */}
            <Button variant="danger" onClick={handleClick} >Get Started</Button>
          </div>
        </div>
        <div className="shadow"></div>
        <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/121450d3-2d2f-41a9-acd6-b050ca0e0424/IN-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg"  alt=""></img>
      </div>
    )
  }
  
  export default Landingmain;