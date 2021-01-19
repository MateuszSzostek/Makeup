import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';

import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RouteComponentProps } from "@reach/router";
import Layout from "./Layout";

let Portfolio = ()=> {
  const breakpointColumnsObj = {
    default:4,
    1200: 3
  };
  return(
    <Layout>
      <motion.div initial="out" animate="in" exit="out" className="portfolio-width">
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
    </Layout>
  )
}
export default Portfolio;
