import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css'
import { motion } from 'framer-motion';

export default function Offer({ transition }) {
  return (
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
        <div className="section-container flex-container row">
          <div className="offer-text flex-container col">
            <div>
              <h2>MAKEUP</h2>
            </div>
            <p>The range of my services consists of make-up, both commercial and occasional. Commercial work is priced individually.</p>
            <p>Occasional female make-up – 230PLN.</p>
            <p>Occasional male make-up – 100PLN.</p>
            <p>Prices apply to services at my studio only.</p>
            <p>Maximum booking three months ahead.</p>
            <p>To confirm your visit a non-refundable deposit is required.</p>
            <p>You can book me online using BOOKSY App.</p>
            <div>
              <h2>OTHER</h2>
            </div>
            <p>Lash extensions:</p>
            <p>New set: 170 – 230PLN</p>
            <p>Refill: 130 – 170PLN</p>
            <p>Lash lifting: 140PLN</p>
            <p>Brows threading and tinting – 70PLN</p>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}
