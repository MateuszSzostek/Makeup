import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import { motion } from 'framer-motion';
import ContactForm from "./ContactForm";
import { RouteComponentProps } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import Head from "../components/Head";
import { useIntl } from "gatsby-plugin-intl"

interface TransitionProps extends RouteComponentProps {
  transition?: any;
}

let Contact = (props: TransitionProps) => {
  const intl = useIntl()
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
    <React.Fragment>
      <Head description={intl.formatMessage({ id: "meta_contact" })}
        title={intl.formatMessage({ id: "contact" })} />
      <section >
        <motion.div initial="out" animate="in" exit="out" variants={props.transition}>
          <ContactForm />
        </motion.div>
      </section>
    </React.Fragment>
  )
}
export default Contact;
