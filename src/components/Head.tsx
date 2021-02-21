import React from "react"
import Helmet from "react-helmet";

interface HeadProps{
  title? : string,
  description?: string
}


const Head: React.FC<HeadProps> = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"4 Beauty Make up" + ' | ' + props.title}</title>
        <meta name = "keywords" content="spa, makeup, personal care, beauty, woman, girl, young, lashes, lips, women, relax"/>
        <meta name = "author" content="Anna Dorsch"/>
        <base href = "adres strony" target="_blank"/>
        <meta name = "description" content={props.description}/>
        <meta name = "robots" content="index, follow" />
        <meta name = "lang" content="en" />
      </Helmet>
    </React.Fragment>
  )
}
export default Head;



