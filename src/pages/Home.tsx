import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import { useIntl, Link } from "gatsby-plugin-intl"

let Home = ()=>
{
  const intl = useIntl()
  // Use language iso for the routes
  
  const data = useStaticQuery(graphql`
  query MyQuery {
    
      allFile(filter: {absolutePath: {regex: "/img/assets/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  
  console.log(data);

  return (
    
      <motion.div initial="out" animate="in" exit="out" >
          <div className="section-container flex-container row ">
            <div className="home-image flex-container col">
              <Img fluid={data.allFile.edges[6].node.childImageSharp.fluid}/>
            </div>       
            <BackgroundImage  className="flex-container col justify-content-center align-items-center"
            fluid ={data.allFile.edges[5].node.childImageSharp.fluid}>
            <div className="home-text flex-container col">
              <h2>Anna Dorsch</h2>
              <p>{intl.formatMessage({ id: "homePageDescription" })}</p>
              <Link to ="/Contact"><button className="btn mt-30">{intl.formatMessage({ id: "contact" })}</button> </Link>
            </div>
            </BackgroundImage>
          </div>
          <div className="example-work">
            <div className="content-card shadow-container flex-container">
            <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid}/>
              <div className="card-desc">
                <h3>{intl.formatMessage({ id: "cardTitleOne" })}</h3>
                <p>{intl.formatMessage({ id: "cardDescriptionOne" })}</p>
              </div>
              <div className="card-link">
              <Link to ="/Offer">
                  <div className="btn">{intl.formatMessage({ id: "seeMore" })}</div>
                </Link>
              </div>
            </div>
            <div className="content-card shadow-container flex-container">
            <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid}/>
              <div className="card-desc">
              <h3>{intl.formatMessage({ id: "cardTitleTwo" })}</h3>
                <p>{intl.formatMessage({ id: "cardDescriptionTwo" })}</p>
              </div>
              <div className="card-link">
              <Link to ="/Portfolio">
                  <div className="btn">{intl.formatMessage({ id: "seeMore" })}</div>
                </Link>
              </div>
            </div>
            <div className="content-card shadow-container flex-container">
            <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid}/>
              <div className="card-desc">
              <h3>{intl.formatMessage({ id: "cardTitleThree" })}</h3>
                <p>{intl.formatMessage({ id: "cardDescriptionThree" })}</p>
              </div>
              <div className="card-link">
              <Link to ="/Contact">
                  <div className="btn">{intl.formatMessage({ id: "seeMore" })}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="content-container flex-container row justify-content-between align-items-center contact-decoration mb-120 mt-60">
            <ContactForm />
          </div>
        
      </motion.div>

  )
}
export default Home;
