import React from "react"
import {Route, Switch, Link, BrowserRouter as Router} from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { AnimatePresence, motion} from 'framer-motion';
import '../css/styles.css'
import Home from './Home';
import Offer from './Offer';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default () => {
  let linksData = [
    {id:1, link:"/", page:"HOME"},
    {id:2, link:"/offer", page:"OFFER"},
    {id:3, link:"/portfolio", page:"PORTFOLIO"},
    {id:4, link:"/contact", page:"CONTACT"},
  ];
  let links = linksData.map(s => <Link key={s.id} to={s.link}>{s.page}</Link>)
  let routes = linksData.map(s => <Route key={s.id} path={s.link}></Route>);
  return (
    <Router>
      <div className="flex-container col align-items-center">
      <div className="flex-container col app-container">
        <div className="logo-container flex-container row justify-content-center">
          <div className="logo">
            <img src=""></img>
          </div>
        </div>
        <div className="nav-container flex-container row justify-content-center nav">
          {links}
        </div>
        <div className="content-container"> 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/offer">
            <Offer/>
          </Route>
          <Route path="/portfolio">
            <Offer/>
          </Route>
          <Route path="/contact">
            <Offer/>
          </Route>
        </Switch>
        </div>
        <div>
          <footer className="footer">Created with passion by Mateusz Szostek</footer>
        </div>
      </div>
      </div>
    </Router>
  )
}
