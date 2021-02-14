import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'
import Head from "../components/Head";
import { useIntl, Link } from "gatsby-plugin-intl"
import {Link as GatsbyLink} from 'gatsby'

let Home = () => {
  const intl = useIntl()
  // Use language iso for the routes

  const data = useStaticQuery(graphql`
  query MyQuery {
    
      allFile(filter: {absolutePath: {regex: "/img/assets/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1024, quality: 90){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const pictureStyle = {
    position: 'absolute',
  };
  console.log(data);

  return (
    <React.Fragment>
      <Head description="Welcome to my page about spa, beauty and personal care."
        title={intl.formatMessage({ id: "home" })} />
      <motion.div initial="out" animate="in" exit="out" >
        <section>
          <div className="relative landing flex col justify-center home-text-wrapper">
            <h1 className="name text-xl my-5 font-sofia">4 Beauty Make up</h1>
            <p className="text-base">{intl.formatMessage({ id: "homePageDescription_1" })}</p>
            <Link to="/Contact" className="text-base styled-link">
              {intl.formatMessage({ id: "contactLink" })}
            </Link>
          </div>
          <section>
            <div className="card-grid">
              <div className="flex col card-left color-square-1 justify-center bg-first-card ">
                <h3 className="text-xl text-right my-15 z-index-10">{intl.formatMessage({ id: "cardTitleOne" })}</h3>
                <p className="text-base text-right z-index-10">{intl.formatMessage({ id: "cardDescriptionOne" })}</p>
                <GatsbyLink className="z-index-10 text-right styled-link text-base" to="https://www.facebook.com/4-Beauty-Make-up-103016398450671">{intl.formatMessage({ id: "seeMore" })}</GatsbyLink>
              </div>
              <div className="flex col card-image relative ">
                <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
                <div className="color-fog absolute w-90prec h-90prec t-5prec l-5prec"></div>
              </div>
            </div>
            <div className="relative my-15 decoration-image">
              <BackgroundImage style={pictureStyle} className=" l-0 w-100prec h-350 z-index-10" fluid={data.allFile.edges[4].node.childImageSharp.fluid}>
              </BackgroundImage>
              <div className=" absolute l-0 w-100prec h-350 color-fog z-index-10"></div>
              <div className="l-0 t-0 w-100prec h-350"></div>
            </div>
            <div className="card-grid">
              <div className="flex col card-col-60 card-image relative">
                <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
                <div className="color-fog absolute w-90prec h-90prec t-5prec l-5prec"></div>
              </div>
              <div className="flex col card-right color-square-2 justify-center">
                <h3 className="text-xl my-15 z-index-10">{intl.formatMessage({ id: "cardTitleTwo" })}</h3>
                <p className="relative text-base z-index-10">{intl.formatMessage({ id: "cardDescriptionTwo" })}</p>
                <Link className="z-index-10 styled-link text-base" to="/Offer">{intl.formatMessage({ id: "seeMore" })}</Link>
                <div className="relative bg-second-card"></div>
              </div>
            </div>
            <div className="card-grid">
              <div className="flex col card-left color-square-1 justify-center bg-first-card ">
                <h3 className="text-xl text-right my-15 z-index-10">{intl.formatMessage({ id: "cardTitleThree" })}</h3>
                <p className="text-base text-right z-index-10">{intl.formatMessage({ id: "cardDescriptionThree" })}</p>
                <Link className="z-index-10 text-right styled-link text-base" to="/Portfolio">{intl.formatMessage({ id: "seeMore" })}</Link>
              </div>
              <div className="flex col card-image relative ">
                <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
                <div className="color-fog absolute w-90prec h-90prec t-5prec l-5prec"></div>
              </div>
            </div>
          </section>
          <ContactForm />
        </section>
      </motion.div>
    </React.Fragment>
  )
}
export default Home;
