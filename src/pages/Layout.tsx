import React, { useState } from "react"
import 'aos/dist/aos.css';
import { AnimatePresence} from 'framer-motion';
import '../css/styles.css'
import FacebookImgL from '../data/img/facebook.svg';
import MakeupLogo from '../data/img/makeupLogo.svg';
import SimpleReactLightbox from 'simple-react-lightbox'
import { useIntl, Link} from "gatsby-plugin-intl"
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

export default ({children}) => {

  const data = useStaticQuery(graphql`
  query LayoutQuery {
    
      allFile(filter: {absolutePath: {regex: "/img/assets/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1024, quality: 90){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

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
  let footerLinksData = [
    { id: 1, link: `/Privacy`, page: intl.formatMessage({ id: "privacy" }) },
    { id: 2, link: `/Facebook`, page: intl.formatMessage({ id: "facebook" }) },
    { id: 3, link: `/Cooperartion`, page: intl.formatMessage({ id: "cooperation" }) },
    { id: 4, link: `/Home`, page: intl.formatMessage({ id: "home" }) },
    { id: 5, link: `/Offer`, page: intl.formatMessage({ id: "offer" }) },
    { id: 6, link: `/Portfolio`, page: intl.formatMessage({ id: "portfolio" }) },
    { id: 7, link: `/Contact`, page: intl.formatMessage({ id: "contact" }) },
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

  let links = linksData.map(s => 
      <Link key={s.id} to={s.link} onClick={(handleClickLinkBtn)}
        className={"nav-link decoration-none pointer mx-15 text-center nav-link-hover" + ( menuOpen ?  " active " : " " )}>
      {s.page}
    </Link>)
  let footerlinks = footerLinksData.map(s => 
    <Link key={s.id} to={s.link} onClick={(handleClickLinkBtn)}
    className="decoration-none pointer mx-15 text-center z-index-10 text-sm color-black-90">
  {s.page}
</Link>)
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

    const backgroundStyle = {
      position: 'fixed'
    };

  return (
    <SimpleReactLightbox>
      <div className="flex justify-center">
        <div className="container-1440 flex col relative">
          <BackgroundImage style={backgroundStyle} className="l-0 t-0 w-100vw h-100vh" fluid ={data.allFile.edges[6].node.childImageSharp.fluid}>
            <div className="l-0 t-0 w-100vw h-100vh color-fog-bg z-index-40"></div>
          </BackgroundImage>
          <div className={"menu-button fixed pointer w-40 h-36 z-index-40" + (menuOpen ? " open" : "") +
              (menuHover ? " hover" : "")} 
              onMouseEnter={handleMouseEnterMenuBtn}
              onClick={handleClickMenuBtn}
              onMouseLeave={handleMouseLeaveMenuBtn}>
              <div className="menu-element"></div>
              <div className="menu-element"></div>
              <div className="menu-element"></div>
            </div>
          <div className="h-100vh">
            <div className="flex justify-between relative nav-bar">
              <div className="logo col border-radius-20 px-15 z-index-40">
                <img src={MakeupLogo}></img>
              </div>
              <div className={"mr-auto align-center nav-links" + (menuOpen ?  " active" : " ")}>
                {links}
              </div>
              <div className={"bg-purple-tr50 border-radius-20 px-15 justify-center align-center options " + (menuOpen ? " active" : " ")}>
                <GatsbyLink className="pointer decoration-none color-black-90 mx-5" to="/">PL</GatsbyLink>
                <GatsbyLink className="pointer decoration-none color-black-90 mx-5" to="/en">ENG</GatsbyLink>
                <img className="w-48 h-48 mx-10 pointer" src={FacebookImgL}></img>
              </div>
            </div>
            <AnimatePresence exitBeforeEnter>
              <div className="relative content-container">
                {updatedChildren}    
              </div>     
            </AnimatePresence>   
            <div className="flex col justify-center align-center w-100prec">
              <div className="flex justify-center align-center text-center footer-marg row flex-wrap">
                  {footerlinks}
              </div>
              <div className="flex justify-center align-center text-center z-index-10">
                <p className="z-index-10">Created with passion by Mateusz Szostek</p>
              </div>
            </div>         
          </div>
        </div>
      </div> 
    </SimpleReactLightbox>
  )
}

