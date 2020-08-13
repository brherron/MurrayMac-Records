import React, { useState } from "react"
import { Link } from "gatsby"
import '../styles/header.scss'

import useDocumentScrollThrottled from '../aux/useDocumentScrollThrottled'

function Header() {
  const [shouldHaveBackground, setShouldHaveBackground] = useState(false);
  
  const MINIMUM_SCROLL = 10;
  const HERO_HEIGHT = 800;

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    const isHeroScrolled = currentScrollTop > HERO_HEIGHT;

    setTimeout(() => {
      setShouldHaveBackground(isMinimumScrolled);
    }, 0);
  });

  const headerStyle = shouldHaveBackground ? 'has-background' : '';
  
  return (
    <header className={headerStyle}>
      <div className="container">
        <div className={`inner-header ${headerStyle}`}>
          <div className="logo">
            <span>MurrayMac</span>
          </div>
          <div className="navigation">
            <nav>
              {/* <AniLink cover direction="left" to="/home" duration={0.8} bg="black">Home</AniLink> */}
              <Link to="#music">Artists</Link>
              <Link to="#shows">Services</Link>
              <Link style={{marginRight: 0}} to="#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
