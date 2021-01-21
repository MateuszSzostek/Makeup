import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';

import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

let Portfolio = ()=> {

  const data = useStaticQuery(graphql`
  query portfolioQuery {
    
      allFile(filter: {absolutePath: {regex: "/img/portfolio/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 748, quality: 70){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const breakpointColumnsObj = {
    default:4,
    1200: 3
  };
  return(
      <motion.div initial="out" animate="in" exit="out" className="portfolio-width">
      <div className="portfolio-container shadow-container">
      <SRLWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
              {data.allFile.edges.map(s => <Img key = {s.id} alt={""} fluid = {s.node.childImageSharp.fluid} />)}
        </Masonry>
        </SRLWrapper>
      </div>
      </motion.div>
  )
}
export default Portfolio;
