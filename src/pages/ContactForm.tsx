import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"

const  ContactForm = () => {

  const intl = useIntl()
  const data = useStaticQuery(graphql`
  query ContactQuery {
    
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

  return (
    <React.Fragment>
      <div className="contact-form-container">
        <div className="contact-square-background">
          <BackgroundImage 
            fluid ={data.allFile.edges[2].node.childImageSharp.fluid}>
          <form action="" method="POST" className="contact-form flex-container col justify-content-center align-items-center">
            <h1>{intl.formatMessage({ id: "contactFormTitle" })}</h1>
            <div className="flex-container col">
              <label >{intl.formatMessage({ id: "name" })}</label>
              <input type="text" id="name" name="name" placeholder={intl.formatMessage({ id: "namePlaceholder" })} ></input>
            </div>
            <div className="flex-container col" >
              <label >{intl.formatMessage({ id: "emailAddress" })}</label>
              <input type="text" id="email" name="_replyto" placeholder={intl.formatMessage({ id: "emailAddressPlaceholder" })} ></input>
            </div>
            <div className="flex-container col">
              <label >{intl.formatMessage({ id: "message" })}</label>
              <textarea name="message" id="text" placeholder={intl.formatMessage({ id: "messagePlaceholder" })}></textarea>
            </div>
            <button className="btn mt-15">{intl.formatMessage({ id: "send" })}</button>
            <div className="center-all flex-container  col info-container">
              <div className="spin-container" >
                <div className="loading-spinner"></div>
              </div>
              <div className="message-info "></div>
            </div>
          </form>
          </BackgroundImage>
        </div>
        <BackgroundImage 
            fluid ={data.allFile.edges[4].node.childImageSharp.fluid}>
        <div className="contact-info flex-container justify-content-center align-items-center">
          <div>
            <h1>Anna Dorsch</h1>
            <p>Email Address</p>
            <p>+ 48 0378509378</p>
            <p>08:00 - 15:00</p>
          </div>
        </div>
        </BackgroundImage>
      </div>
    </React.Fragment>
  )
}
export default ContactForm;