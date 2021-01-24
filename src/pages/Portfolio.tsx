import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import { motion } from 'framer-motion';
import Head from "../components/Head";
import Masonry from 'react-masonry-css'
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl, Link } from "gatsby-plugin-intl"

let Portfolio = () => {
  const intl = useIntl();
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
    default: 4,
    1300: 3
  };
  return (
    <section>
      <Head description="It is example of my work."
        title={intl.formatMessage({ id: "portfolio" })} />
      <motion.div initial="out" animate="in" exit="out" className="w-100prec flex col align-center">
        <div className="portfolio-container flex col justify-center">
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {data.allFile.edges.map(s => <Img key={s.id} alt={"Sample Picture"} fluid={s.node.childImageSharp.fluid} />)}
            </Masonry>
          </SRLWrapper>
        </div>
      </motion.div>
    </section>
  )
}
export default Portfolio;
