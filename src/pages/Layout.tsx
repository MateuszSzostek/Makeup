import React, { useState } from "react"
import {Link} from "gatsby";
import AOS from "aos";
import 'aos/dist/aos.css';
import { AnimatePresence} from 'framer-motion';
import '../css/styles.css'
import FacebookImgL from '../img/facebook_light.svg';
import InstagramImgL from '../img/instagram_light.svg';
import PinterestImgL from '../img/pinterest_light.svg';
import SimpleReactLightbox from 'simple-react-lightbox'

export default ({children}) => {
  let [menuOpen, setMenuOpen] = useState(false);
  let [menuClose, setMenuClose] = useState(false);
  let [menuHover, setMenuHover] = useState(false);

  let linksData = [
    { id: 1, link: "/", page: "Home" },
    { id: 2, link: "/Offer", page: "Offer" },
    { id: 3, link: "/Portfolio", page: "Portfolio" },
    { id: 4, link: "/Contact", page: "Contact" },
  ];

  function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }

  let handleClickMenuBtn = () => {
    console.log(getWidth());
    if(getWidth() < 1200){
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
    if(getWidth() < 1200)
    {
      setMenuClose(true);
    console.log("dzialam");
    setTimeout(()=> {
      setMenuOpen(false);
        setMenuClose(false);
      window.scrollTo(0,0);
    },300);
    }
  }

  let links = linksData.map(s => <Link key={s.id} to={s.link} onClick={(handleClickLinkBtn)}>{s.page}</Link>)

  const transition = {
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
  let updatedChildren = React.Children.map(children,
    (child) => {
        return React.cloneElement(child, { variants: transition });
    });

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
                {updatedChildren}           
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

