import React, { useState } from "react"
import { useLocation, Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/styles.css'
import Home from './Home';
import Offer from './Offer';
import Portfolio from './Portfolio';
import Contact from './Contact';
import FacebookImgL from '../img/facebook_light.svg';
import InstagramImgL from '../img/instagram_light.svg';
import PinterestImgL from '../img/pinterest_light.svg';
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  let [menuOpen, setMenuOpen] = useState(false);
  let [menuClose, setMenuClose] = useState(false);
  let [menuHover, setMenuHover] = useState(false);

  let location = useLocation();
  let linksData = [
    { id: 1, link: "/", page: "Home" },
    { id: 2, link: "/offer", page: "Offer" },
    { id: 3, link: "/portfolio", page: "Portfolio" },
    { id: 4, link: "/contact", page: "Contact" },
  ];

  let handleClickMenuBtn = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    }
    else {
      console.log("wlaczam sie ");
      setMenuClose(true);
      setTimeout(()=>{
        setMenuOpen(false);
        setMenuClose(false);
      },
      300)
    }
  }
  let handleMouseEnterMenuBtn = () => {
    if (!menuHover) {
      setMenuHover(true);
    }
  }
  let handleMouseLeaveMenuBtn = () => {
    if (menuHover) {
      setMenuHover(false);
    }
  }
  let handleClickLinkBtn = () => {
    setMenuOpen(false);
    console.log("dzialam");
    setTimeout(()=> {
      window.scrollTo(0,0);
    },300);
  }

  let links = linksData.map(s => <Link key={s.id} to={s.link} onClick={(handleClickLinkBtn)}>{s.page}</Link>)
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
          <div className="nav-container">
            <div className="col flex-container justify-content-center">
              <h1>Anna Dorsch</h1>
            </div>
            <div className={"nav" + (menuOpen ? " active" : "")}>
              <div className={"nav-item" + (menuClose ? " close" : "") + (menuOpen ? " active" : "")}>
                {links}
              </div>
            </div>
            <div className={"social-media" + (menuOpen ? " active" : "")}>
              <img className="facebook-hover" src={FacebookImgL}></img>
              <img className="instagram-hover" src={InstagramImgL}></img>
              <img className="pinterest-hover" src={PinterestImgL}></img>
            </div>
            <div className={"menu-button" + (menuOpen ? " open" : "") +
              (menuHover ? " hover" : "")} 
              onMouseEnter={handleMouseEnterMenuBtn}
              onClick={handleClickMenuBtn}
              onMouseLeave={handleMouseLeaveMenuBtn}>
              <div className="menu-element"></div>
              <div className="menu-element"></div>
              <div className="menu-element"></div>
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
      <div className="bottom-links flex-container align-items-center justify-content-center row">
        <div>
          {links}
        </div>
      </div>
      <div>
        <footer className="footer">Created with passion by Mateusz Szostek</footer>
      </div>
    </SimpleReactLightbox>
  )
}
export default App;
