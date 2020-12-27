import React from "react"
import 'aos/dist/aos.css';
import '../css/styles.css';


export default function ContactForm() {
  return (
    <React.Fragment>   
            <div className="">
              <form action="" className="contact-form flex-container col justify-content-center align-items-center">
                <h1>LET'S MEET TOGETHER</h1>
                <div className="flex-container col">
                  <label >Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name"  ></input>
                </div>
                <div className="flex-container col" >
                  <label >Email address</label>
                  <input type="text" id="email" name="email" placeholder="Your email address" ></input>
                </div>
                <div className="flex-container col">
                  <label >Message</label>
                  <textarea name="text" id="text" placeholder="Your message"></textarea>
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
    </React.Fragment>
  )
}
