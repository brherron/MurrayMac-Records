import React from 'react';
import '../styles/styles.css' 

import jason from '../images/jason.jpg'
import nathan from '../images/nathan.jpg'
import tj from '../images/tj.jpg'
import uniongray from '../images/uniongray.jpg'

const Artists = () => {
  return (
    <div className="artists">
      <h4 className="animate delay3"><a href="#artists">&#8681; ARTISTS</a></h4>
      <div className="artist1" id="artists">
        <a href="http://www.jasonmcnabbmusic.com" target="_blank" >
        <img src={jason} sizes="30vw" alt="jason mcnabb" />
        </a>
        <h2>
          Jason<br />
          McNabb<br /> 
          &<br />
          the<br />
          Reign
        </h2>
        <p>
          From picking on the front porch and jamming with the family band to performing in front of thousands on a festival stage, opening for some of the biggest names in country music. Jason McNabb is a walking, talking version of the phrase “been there, done that.”<br />
          <br />
          Jason continues to explore the depths with in himself to create new music and refuses to lie still and fight evolution. “If there ever comes a day where I wake up not wanting to grow as a musician, writer, performer or even a person, lock me up and throw away the key."
        </p>
      </div>
      <div className="artist2">
        <h2>
          Nathan<br />
          Dean<br />
          &<br />
          the<br />
          Damn<br />
          Band
        </h2>
        <a href="#" target="_blank">
        <img src={nathan} sizes="30vw" alt="nathan dean" />
        </a>
        <p>
          With more than 10 years on the road and an average of 200+ shows annually, their persistence is obvious and the fan base is growing to show it. When Nathan Dean and the Damn Band hit the road in June of 2008 to promote their first studio album “She Don’t Know”, they had no idea that the tour would never end. And so the Damn Tour was born and continues to thrive. They’ve played huge clubs in big city markets like Phoenix, Denver, Chicago and L.A., as well as tiny, intimate venues all across the nation.<br />
          <br />
          Attracted to the powerful live sound and "let’s have another round" atmosphere there’s no doubt that this band is here to party and will always be the last one standing. With radio play from Arizona to Texas and all the way up into Illinois, the audience is listening and they want to come to the after party too!
        </p>
      </div>
      <div className="artist3">
        <a href="http://www.tjmorrowmusic.com" target="_blank">
        <img src={tj} sizes="30vw" alt="tj morrow" />
        </a>
        <h2>
          Tj<br />
          Morrow<br />
        </h2>
        <p>
          2019 was the debut year for singer-songwriter, TJ Morrow. On top of releasing his debut EP album titled 'Live and Learn', he travelled the country as a member of fellow MurrayMac artist Jason McNabb’s band, sharing the stage with the likes of Billy Currington, Michael Ray, Morgan Wallen and many others. Album cuts 'Cheyenne' and 'F150 Flashback' have found recent success. 
          <br />
          <br />
          classNameic 90's and early 2000's country music is a given when it comes to influences and favorites, however, if you searched his phone you'd find playlists flooded with other favorites such as AC/DC and Matchbox 20. You may notice all of these influences tied together defining TJ’s musical personality.
          <br />
        </p>
      </div>

      <div className="artist4">
        <h2>
          Union<br />
          Gray<br />
        </h2>
        <a href="http://www.uniongray.com" target="_blank">
        <img src={uniongray} sizes="30vw" alt="uion gray" />
        </a>
        <p>
          Country artist Scott Gray and his band Union Gray are a grassroots, rockin' country band from Denver, Colorado playing their own brand of country that mixes flavors from the red dirt of Oklahoma, down to the heart of Texas, and up to Nashville, TN.
          <br />
          <br />
          Union Gray has been blessed to share the stage as support for great artists including Dwight Yoakam, Craig Morgan, Cody Canada, Stoney LaRue, Adam Hood, Tim Rushlow, James Otto and many more.
          Union Gray has new music dropping early 2020. Stay tuned!<br />
        </p>
      </div>

      {/* <!-- Slider Section --> */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

        <h2>Services</h2>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" src="src/images/mastering.png" alt="First slide" />
            <div className="carousel-caption">
              <h5><strong>Production</strong></h5>
              <p>Record your album, EP, or single from start to finish. Come with the song in your head and we will bring your ideas to life.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block" src="src/images/editing.png" alt="Second slide" />
            <div className="carousel-caption">
              <h5><strong>Editing</strong></h5>
              <p>Get naturally-tuned vocals, fix timing mistakes, and align background vocals to remove any distractions between the listener and the song.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block" src="src/images/mixing.png" alt="Third slide" />
            <div className="carousel-caption">
              <h5><strong>Mixing</strong></h5>
              <p>If mixing is all you need, send us your tracks from anywhere. We will get your tracks radio-ready with an exciting, professional mix.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* <!-- Music Player --> */}
      <div className="music-player">
        <h2>Sample Mixes</h2>
        <div className="player">
          <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1016729314%3Fsecret_token%3Ds-nBIPhDytEtJ&color=%23ff9e6a&auto_play=false&hide_related=true&show_teaser=true"></iframe>
        </div>
      </div>

      {/* <!-- Contact Us Section --> */}
      <div className="footer">
        <h2>Contact Us</h2>
        <form id="contact" method="post" className="contact-form" action="contact.php">
          <input className="first-name" type="text" name="sender" placeholder="Your Name (required)" required />
          <input className="email" type="text" name="senderEmail" placeholder="Your Email (required)" required />
          <textarea className="message" name="message" type="text" rows="1" placeholder="Your Message"></textarea>
          <p id="recaptcha-disclaimer">This form is protected by reCaptcha.</p>
          <button className="btn btnD1 g-recaptcha" 
              data-sitekey="6Lfm160UAAAAALX-f2DePZPBpUtcOsq7QxW19xHn"
              data-badge="inline"
              data-callback="captchaSubmit">
              Get in touch
          </button>
        </form>
        <div className="socials">
          <ul className="sci">
            <li><a href="https://www.facebook.com/jasonmcnabbatr" target="_blank"><i className="fa fa-facebook fa-3x"></i></a></li>
            <li><a href="https://www.instagram.com/jasonmcnabbatr" target="_blank"><i className="fa fa-instagram fa-3x"></i></a></li>
            <li><a href="https://youtube.com/murraymacrecords" target="_blank"><i className="fa fa-youtube fa-3x"></i></a></li>
          </ul>
        </div>
        <div className="minutiae">
          <h5>© 2019 MurrayMac Records. All Rights Reserved.</h5>
          <h5>
            <a href="https://app.termly.io/document/privacy-policy/379b132b-4524-49d3-a460-27a2e7f5c731" target="_blank">Privacy Policy</a> |
            <a href="https://www.termsfeed.com/terms-conditions/dd12b0379f89cdd2456eb1728526ef28" target="_blank">Terms and Conditions</a>
          </h5>
          <h5>
            Built by <a href="http://www.beauherrondev.com" target="_blank">BHD.</a>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Artists
