import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';
import { useIntl } from "gatsby-plugin-intl";
import Head from "../components/Head";


let Privacy = () => {
  const intl = useIntl();
  return (
    <section>
      <Head description="Feel free to cooperate with me."
        title={intl.formatMessage({ id: "cooperation" })} />
      <motion.div initial="out" animate="in" exit="out">
        <div className="flex col justify-center align-center mt-100">
          <h3>{intl.formatMessage({ id: "cooperateTitle" })}</h3>
          <p>{intl.formatMessage({ id: "cooperateText" })}</p>
        </div>
      </motion.div>
    </section>
  )
}
export default Privacy;

