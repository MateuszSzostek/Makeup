import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import LandingImg from '../img/landingImg.jpg';

export default () => {
  return(
    <React.Fragment>
      <div className="home-image col flex-container align-items-center justify-content-center">
        <img src={LandingImg}></img>
        <h2>ANNA DORSCH</h2>
        <h2>MAKEUP</h2>
      </div>
    </React.Fragment>
  )
}
