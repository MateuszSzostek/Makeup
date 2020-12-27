import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';

import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import LandingImg from '../img/landingImg.jpg';

export default ({transition}) => {
 
  return(
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
      <div className="portfolio-container shadow-container">
      <SRLWrapper>
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            <div><a href="https://picsum.photos/200/300"><img src="https://picsum.photos/200/300"></img></a></div>
            <div><a href="https://picsum.photos/300/300"><img src="https://picsum.photos/300/300"></img></a></div>
            <div><a href="https://picsum.photos/400/300"><img src="https://picsum.photos/400/300"></img></a></div>
            <div><a href="https://picsum.photos/200/400"><img src="https://picsum.photos/200/400"></img></a></div>
            <div><a href="https://picsum.photos/250/300"><img src="https://picsum.photos/250/300"></img></a></div>
            <div><a href="https://picsum.photos/200/350"><img src="https://picsum.photos/200/350"></img></a></div>
            <div><a href="https://picsum.photos/200/300"><img src="https://picsum.photos/200/300"></img></a></div>
            <div><a href="https://picsum.photos/300/300"><img src="https://picsum.photos/300/300"></img></a></div>
            <div><a href="https://picsum.photos/400/300"><img src="https://picsum.photos/400/300"></img></a></div>
            <div><a href="https://picsum.photos/200/400"><img src="https://picsum.photos/200/400"></img></a></div>
            <div><a href="https://picsum.photos/250/300"><img src="https://picsum.photos/250/300"></img></a></div>
            <div><a href="https://picsum.photos/200/350"><img src="https://picsum.photos/200/350"></img></a></div>
            <div><a href="https://picsum.photos/200/300"><img src="https://picsum.photos/200/300"></img></a></div>
            <div><a href="https://picsum.photos/300/300"><img src="https://picsum.photos/300/300"></img></a></div>
            <div><a href="https://picsum.photos/400/300"><img src="https://picsum.photos/400/300"></img></a></div>
            <div><a href="https://picsum.photos/200/400"><img src="https://picsum.photos/200/400"></img></a></div>
            <div><a href="https://picsum.photos/250/300"><img src="https://picsum.photos/250/300"></img></a></div>
            <div><a href="https://picsum.photos/200/350"><img src="https://picsum.photos/200/350"></img></a></div>
            
            
          {/* array of JSX items */}
        </Masonry>
        </SRLWrapper>
      </div>
      </motion.div>
    </React.Fragment>
  )
}
