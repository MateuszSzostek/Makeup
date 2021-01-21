import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';
import ContactForm from "./ContactForm";
import { RouteComponentProps } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

interface TransitionProps extends RouteComponentProps
{
	 transition?: any;
}

let Contact = (props: TransitionProps)=> {

  const data = useStaticQuery(graphql`
  query MyQueryContact{
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 2048, quality: 90){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
}
  `);

  return (
      <motion.div initial="out" animate="in" exit="out" variants={props.transition}>
      <div className="content-container flex-container row justify-content-between align-items-center contact-decoration mb-120">
        <ContactForm />
      </div>
      </motion.div>
  )
}
  export default Contact;
