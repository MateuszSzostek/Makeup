import React, { useState } from "react"
import 'aos/dist/aos.css';
import { AnimatePresence} from 'framer-motion';
import '../css/styles.css'
import FacebookImgL from '../data/img/facebook.svg';
import SimpleReactLightbox from 'simple-react-lightbox'
import { useIntl, Link} from "gatsby-plugin-intl"
import { Link as GatsbyLink } from 'gatsby';

export default ({children}) => {

  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  let [menuOpen, setMenuOpen] = useState(false);
  let [menuClose, setMenuClose] = useState(false);
  let [menuHover, setMenuHover] = useState(false);

  let linksData = [
    { id: 1, link: `/`, page: intl.formatMessage({ id: "home" }) },
    { id: 2, link: `/Offer`, page: intl.formatMessage({ id: "offer" }) },
    { id: 3, link: `/Portfolio`, page: intl.formatMessage({ id: "portfolio" }) },
    { id: 4, link: `/Contact`, page: intl.formatMessage({ id: "contact" }) },
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
        0)
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
    },0);
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
              <GatsbyLink to="/">PL</GatsbyLink>
              <GatsbyLink to="/en">ENG</GatsbyLink>
              <img className="facebook-hover" src={FacebookImgL}></img>
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
        <footer className="footer">{intl.formatMessage({ id: "footer" })}</footer>
      </div>
    </SimpleReactLightbox>
  )
}

