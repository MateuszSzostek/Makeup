import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"

const ContactForm = () => {

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
  const pictureStyle = {
    position: 'absolute',
  };

  return (
    <React.Fragment>
      <div className="contact-grid justify-center relative">
        <div className="col w-100prec z-index-20">
          <section>
            <form action="https://formspree.io/f/xyybowbj" method="POST" className="flex col contact-form ">
              <h1 className="text-lg">{intl.formatMessage({ id: "contactFormTitle" })}</h1>
              <div className="flex col ">
                <label className="text-base mt-15">{intl.formatMessage({ id: "name" })}</label>
                <input type="text" id="name" name="name" placeholder={intl.formatMessage({ id: "namePlaceholder" })} ></input>
              </div>
              <div className="flex col">
                <label className="text-base mt-15" >{intl.formatMessage({ id: "emailAddress" })}</label>
                <input type="text" id="email" name="_replyto" placeholder={intl.formatMessage({ id: "emailAddressPlaceholder" })} ></input>
              </div>
              <div className="flex col">
                <label className="text-base mt-15" >{intl.formatMessage({ id: "message" })}</label>
                <textarea name="message" id="text" placeholder={intl.formatMessage({ id: "messagePlaceholder" })}></textarea>
              </div>
              <button className="border-shadow btn-hover transition-03 pointer w-150 h-36 border-none my-15 text-base border-radius-10 ">{intl.formatMessage({ id: "send" })}</button>
            </form>
          </section>
        </div>
        <section>
          <div className="col flex w-100prec z-index-20 justify-center align-center text-center">
            <h1 className="font-sofia my-10 text-lg">Anna Dorsch</h1>
            <p className="my-10 text-base">anna.dorsch@interia.pl</p>
          </div>
          <div className=" absolute l-calc w-100vw contact-form-bg z-index-10"></div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default ContactForm;