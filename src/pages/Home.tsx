import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import LandingImg from '../img/landingImg.jpg';
import TestImg1 from '../img/Sorbet-feat-2-e1597402671848.jpg';
import TestImg2 from '../img/Beauty-Industry-after-Coronavirus-Pandemic-265w.jpg';
import TestImg3 from '../img/AdobeStock_182179216.jpeg';
import { Link } from "react-router-dom";
import Arrow from '../img/down-arrow.svg';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function Home({ transition }) {
  return (
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
       
          <div className="section-container flex-container row ">
            <div className="home-image flex-container col">
              <img src={LandingImg}></img>
            </div>
            <div className="home-text flex-container col">
              <h2>Anna Dorsch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <button className="btn mt-30">Contact Me</button>
              <img className="arrow" src ={Arrow}></img>
            </div>
          </div>
          <div className="example-work">
            <div className="content-card shadow-container flex-container">
              <img src={TestImg1}></img>
              <div className="card-desc">
                <h3>Sndard lorem ipsum</h3>
                <p>Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum </p>
              </div>
              <div className="card-link">
                <Link to="/">
                  <div className="btn">Zobacz więcej</div>
                </Link>
              </div>
            </div>
            <div className="content-card shadow-container flex-container">
              <img src={TestImg2}></img>
              <div className="card-desc">
                <h3>Staard lorem ipsum</h3>
                <p>Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum </p>
              </div>
              <div className="card-link">
                <Link to="/">
                  <div className="btn">Zobacz więcej</div>
                </Link>
              </div>
            </div>
            <div className="content-card shadow-container flex-container">
              <img src={TestImg3}></img>
              <div className="card-desc">
                <h3>Stanrd lorem ipsum</h3>
                <p>Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum Standard lorem ipsum </p>
              </div>
              <div className="card-link">
                <Link to="/">
                  <div className="btn">Zobacz więcej</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="content-container flex-container row justify-content-between align-items-center contact-decoration mb-120 mt-60">
            <ContactForm />
          </div>
        
      </motion.div>
    </React.Fragment>
  )
}
