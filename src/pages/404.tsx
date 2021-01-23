import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { useIntl } from "gatsby-plugin-intl";


let ErrorPage = () =>
{
  const intl = useIntl()
  return(
    <motion.div initial="out" animate="in" exit="out">
      <div className="flex col justify-center align-center">
        <p className="base-text">{intl.formatMessage({ id: "text-404" }) }</p>
      </div>
    </motion.div>
  )
}
export default ErrorPage;