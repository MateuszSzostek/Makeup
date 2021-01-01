import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';

import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default ({transition}) => {
  const breakpointColumnsObj = {
    default:4,
    1200: 3,
    700: 2,
    500: 1
  };
  return(
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
      <div className="portfolio-container shadow-container">
      <SRLWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>
            <div><a href="https://picsum.photos/200/300"><LazyLoadImage width={"200px"} height={"300px"}alt={"test image"}src={"https://picsum.photos/200/300"}/></a></div>               
          {/* array of JSX items */}
        </Masonry>
        </SRLWrapper>
      </div>
      </motion.div>
    </React.Fragment>
  )
}
