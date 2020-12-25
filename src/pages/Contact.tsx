import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import {motion} from 'framer-motion';

export default ({transition}) => {
  return(
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
      <div className="contact-container">
        <img src=""></img>
      </div>
      </motion.div>
    </React.Fragment>
  )
}
