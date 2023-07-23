import "./foot.css"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Foot = () => {

  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <footer>
        <div className="  Footer container-fluid">
          <div className="foot-left-container" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="foot-left-container-item1">
              <h5>HANDCRAFTS</h5>
            </div>
            <div className="foot-left-container-item2">
              <h1>Follow us in social media </h1>
            </div>
            <div className="foot-left-container-item3 ">
  
              <h5 className="foot-lft1">  INSTAGRAM</h5>
              <h5 className="foot-lft2"> TWITTER </h5>
              <h5 className="foot-lft3">FACEBOOK </h5>
  
            </div>
            <div className="foot-left-container-item4">
              <h5 className="foot-left-container-page1">Home  </h5>
              <h5 className="foot-left-container-page2">About  </h5>
              <h5 className="foot-left-container-page3">Blog  </h5>
              <h5 className="foot-left-container-page4"> Shop  </h5>
            </div>
          </div>
          <div className="foot-right-container" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="foot-right-container-item1">
              <h3>Subscribe to newsletter</h3>
            </div>
            <div className="foot-right-container-item2">
              <input className="email-field" type="text" placeholder="Email" />
              <button className="submit-btn"  >➤</button>
            </div>
            <div className="foot-right-container-item3">
              <h5 className="copyright">©HANDCRAFTS. ALL RIGHTS RESERVED 2023.  LICENSING
                <span className="foot-span"> TEMPLATE </span>BY <span className="foot-span"> WC COPILOT </span>
                POWERED BY  <span className="foot-span"> WEB FLOW</span></h5>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Foot