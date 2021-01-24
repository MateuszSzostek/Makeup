import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import Head from "../components/Head";

let Offer = () => {
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

  return (
    <section>
      <Head description="Offer of 4 Beauty Make up."
        title={intl.formatMessage({ id: "offer" })} />
      <motion.div initial="out" animate="in" exit="out">
        <div className="offer-grid mt-30">
          <div className="flex offer-container col justify-center">
            <h2>{intl.formatMessage({ id: "offerTitleOne" })}</h2>
            <p className="my-5">{intl.formatMessage({ id: "offerTextOne" })}</p>
            <h2>{intl.formatMessage({ id: "offerTitleTwo" })}</h2>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_1" })}</p>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_2" })}</p>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_3" })}</p>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_4" })}</p>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_5" })}</p>
            <p className="my-5">{intl.formatMessage({ id: "offerTextTwo_6" })}</p>
          </div>
          <div className="flex offer-container col align-center justify-center card-image offer-image relative">
            <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
            <div className="color-fog absolute w-90prec h-90prec t-5prec l-5prec"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Offer;