import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { useIntl } from "gatsby-plugin-intl";
import Head from "../components/Head";


let ErrorPage = () => {
  const intl = useIntl()
  return (
    <React.Fragment>
      <Head description="This is 404 page. To contact me please visit 'Contact' page. To see my portfolio please go to 'Portfolio'. If you wish to seee prices, please go to 'Offer'."
        title="404" />
      <motion.div initial="out" animate="in" exit="out">
        <div className="flex col justify-center align-center">
          <p className="base-text">{intl.formatMessage({ id: "text-404" })}</p>
        </div>
      </motion.div>
    </React.Fragment>
  )
}
export default ErrorPage;