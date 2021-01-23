import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { useIntl } from "gatsby-plugin-intl";


let Privacy = () =>
{
  const intl = useIntl()
  return(
    <motion.div initial="out" animate="in" exit="out">
      <motion.div initial="out" animate="in" exit="out">
      <div className="flex col justify-center align-center mt-100">
        <h3>{intl.formatMessage({ id: "cooperateTitle" })}</h3>
        <p>{intl.formatMessage({ id: "cooperateText" })}</p>
      </div>
    </motion.div>
      














































    </motion.div>
  )
}
export default Privacy;