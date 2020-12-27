import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';
import ContactForm from "./ContactForm";

export default ({transition}) => {
  return(
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
      <div className="content-container flex-container row justify-content-between align-items-center contact-decoration mb-120 mt-60">
        <ContactForm/>
      </div>
      </motion.div>
    </React.Fragment>
  )
}
