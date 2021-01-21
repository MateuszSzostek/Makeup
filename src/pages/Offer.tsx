import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { RouteComponentProps } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from "gatsby-plugin-intl";


interface TransitionProps extends RouteComponentProps
{
	 transition?: any;
}

let Offer = (props: TransitionProps) =>
{
  const intl = useIntl();
  const data = useStaticQuery(graphql`
  query OfferQuery {
    
      allFile(filter: {absolutePath: {regex: "/img/assets/"}}) {
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

  return(
      <motion.div initial="out" animate="in" exit="out">
        <div className="offer-container shadow-container flex-container row">
        <BackgroundImage 
            fluid ={data.allFile.edges[5].node.childImageSharp.fluid}>
          <div className="offer-text flex-container col">
            <div>
              <h2>{intl.formatMessage({ id: "offerTitleOne" })}</h2>
            </div>
            <p>{intl.formatMessage({ id: "offerTextOne" })}</p>
            <div>
              <h2>{intl.formatMessage({ id: "offerTitleTwo" })}</h2>
            </div>
            <p>{intl.formatMessage({ id: "offerTextTwo_1" })}</p>
            <p>{intl.formatMessage({ id: "offerTextTwo_2" })}</p>
            <p>{intl.formatMessage({ id: "offerTextTwo_3" })}</p>
            <p>{intl.formatMessage({ id: "offerTextTwo_4" })}</p>
            <p>{intl.formatMessage({ id: "offerTextTwo_5" })}</p>
            <p>{intl.formatMessage({ id: "offerTextTwo_6" })}</p>
          </div>
          </BackgroundImage>
        </div>
      </motion.div>
  )
}
export default Offer;