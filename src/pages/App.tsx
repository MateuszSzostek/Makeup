import React from "react"
import { useLocation, Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/styles.css'
import Home from './Home';
import Offer from './Offer';
import Portfolio from './Portfolio';
import Contact from './Contact';
import FacebookImg from '../img/facebook.svg';
import InstagramImg from '../img/instagram.svg';
import PinterestImg from '../img/pinterest.svg';
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  let location = useLocation();
  let linksData = [
    { id: 1, link: "/", page: "Home" },
    { id: 2, link: "/offer", page: "Offer" },
    { id: 3, link: "/portfolio", page: "Portfolio" },
    { id: 4, link: "/contact", page: "Contact" },
  ];
  let links = linksData.map(s => <Link key={s.id} to={s.link}>{s.page}</Link>)
  let routes = linksData.map(s => <Route key={s.id} path={s.link}></Route>);

  const pageTransition = {
    in: {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "ease",
    },
    out: {
      y: "-5px",
      opacity: 0,
      duration: 2,
      ease: "ease",
    },
  }

  return (
    <SimpleReactLightbox>
      <div className="background-text">
          <h1>Makeup</h1>
      </div>
    <div className="app-container flex-container justify-content-center">
      <div className="page-container">
        <div className="nav-container flex-container row justify-content-between">
          <div className="col flex-container justify-content-center">
            <h1>Anna Dorsch</h1>
            <h2>MAKEUP</h2>
          </div>
          <div className="nav col flex-container justify-content-center align-items-center">
            <div className="row">
              {links}
            </div>
          </div>
          <div className="social-media row flex-container justify-content-center align-items-center">
            <img src={FacebookImg}></img>
            <img src={InstagramImg}></img>
            <img src={PinterestImg}></img>
          </div>
        </div>
        <div className="col flex-container align-items-center">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home transition={pageTransition} />
              </Route>
              <Route path="/offer">
                <Offer transition={pageTransition} />
              </Route>
              <Route path="/portfolio">
                <Portfolio transition={pageTransition} />
              </Route>
              <Route path="/contact">
                <Contact transition={pageTransition} />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
    <div className="bottom-links flex-container align-items-center justify-content-center">
      <div className="row">
        {links}
      </div>
    </div>
    <div>
      <footer className="footer">Created with passion by Mateusz Szostek</footer>
  </div>
  </SimpleReactLightbox>
    /*
    <div className="flex-container col align-items-center">
      <div className="flex-container col app-container">
        <div className="nav-container flex-container row ">
          <div className="logo">
            <img src=""></img>
          </div>
          <div className="logo-name col">
            <h1>ANNA DORSCH</h1>
            <h2>MAKE UP</h2>
          </div>
          <div className="nav-container flex-container row justify-content-center align-items-center nav">
            {links}
          </div>
          <div className="social-media flex-container justify-content-right">
            <img src={FacebookImg}></img>
            <img src={InstagramImg}></img>
            <img src={PinterestImg}></img>
          </div>
        </div>   
        <div className="content-container col flex-container align-items-center"> 
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home transition={pageTransition}/>
          </Route>
          <Route path="/offer">
            <Offer transition={pageTransition}/>
          </Route>
          <Route path="/portfolio">
            <Portfolio transition={pageTransition}/>
          </Route>
          <Route path="/contact">
            <Contact transition={pageTransition}/>
          </Route>
        </Switch>
        </AnimatePresence>
        </div>
        <div>
          <footer className="footer">Created with passion by Mateusz Szostek</footer>
        </div>
      </div>
    </div>
    */
  )
}
export default App;
