import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import LandingImg from '../img/landingImg.jpg';
import {motion} from 'framer-motion';

export default function Home({transition}) {
  return(
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
        <div className="content-container"> 
          <div className="home-container flex-container row">
            <div className="home-image flex-container col">
              <img src={LandingImg}></img>
            </div>
            <div className="home-text flex-container col">
              <h2>Anna Dorsch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <button className="btn">Contact Me</button>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}
