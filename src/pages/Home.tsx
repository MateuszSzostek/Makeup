import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';
import LandingImg from '../img/landingImg.jpg';
import { motion } from 'framer-motion';

export default function Home({ transition }) {
  return (
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={transition}>
        <div>
          <div className="home-container flex-container row">
            <div className="home-image flex-container col">
              <img src={LandingImg}></img>
            </div>
            <div className="home-text flex-container col">
              <h2>Anna Dorsch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquet elit. Vivamus rhoncus tincidunt aliquam. Sed et mauris ut ex commodo faucibus. Integer sit amet porta felis. Aliquam pulvinar, odio eget dignissim egestas, lacus tortor dignissim urna, at ultricies ipsum quam pulvinar mi. Integer feugiat ante odio, id semper ipsum fermentum eget. Mauris a erat maximus, pulvinar sapien eu, hendrerit massa.</p>
              <button className="btn mt-30">Contact Me</button>
            </div>
          </div>
          <div className="example-gallery">
            <a href={LandingImg} className="image"><img src={LandingImg} alt=""></img></a>
            <a href={LandingImg} className="image"><img src={LandingImg} alt=""></img></a>
            <a href={LandingImg} className="image"><img src={LandingImg} alt=""></img></a>
            <a href={LandingImg} className="image"><img src={LandingImg} alt=""></img></a>
          </div>
          <div className="content-container flex-container row justify-content-between align-items-center contact-decoration mb-120 mt-60">
            <div className="">
              <form action="" className="contact-form flex-container col justify-content-center align-items-center">
                <h1>Let's meet together</h1>
                <div className="flex-container col">
                  <label >Name</label>
                  <input type="text" id="name" name="name" placeholder="What's Your name?"  ></input>
                </div>
                <div className="flex-container col" >
                  <label >Email address</label>
                  <input type="text" id="email" name="email" placeholder="What's Your email address?" ></input>
                </div>
                <div className="flex-container col">
                  <label >Message</label>
                  <textarea name="text" id="text" placeholder="What's Your message?"></textarea>
                </div>
                <button className="btn mt-15">Send</button>
                <div className="center-all flex-container  col info-container">
                  <div className="spin-container" >
                    <div className="loading-spinner"></div>
                  </div>
                  <div className="message-info "></div>
                </div>
              </form>
            </div>
            <div className="contact-info flex-container justify-content-center align-items-center">
              <div>
                <h1>Anna Dorsch</h1>
                <p>Email Address</p>
                <p>+ 48 0378509378</p>
                <p>08:00 - 15:00</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}
