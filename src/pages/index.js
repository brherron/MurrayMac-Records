import React, { Component } from "react"
import '../styles/styles.css' 

//Import Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import Artists from '../components/artists.js'
import SEO from '../components/seo.js'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class IndexPage extends Component {

  render() {
    return (
      <div>
        <SEO title="MurrayMac Records" />
        {/* <Header /> */}
        <div className="container">
          <Hero />
          <Artists />
        </div>
      </div>
    )
  }
} 

export default IndexPage