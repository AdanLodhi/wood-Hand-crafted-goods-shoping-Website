
import './About.css'
import SecondLastContainer from "./Containers/SecondLastContainer"; /* Error with the direction */
import LastContainer from './Containers/LastContainer'  /* Error with the direction */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  return (
    <><div>
      <div data-aos="fade-down">
        <h1  className='banner-title' >About Us</h1>
        <p className='banner-para' >Natural and organic wood products that will perfectly suit your interior. <br />A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by one's hand or by using only simple, non-automated related tools like scissors, carving implements, or hooks.</p>
      </div>

      <div className="about-us-top-wrapper" >
        <div className="top-left-wrap">
          <h2 className="head-twnty" data-aos="fade-right" >
            We Have Started Since 20 Years Ago
            </h2>
          <p className="para-twnty" data-aos="fade-right">
            Over the past two decades, we have undoubtedly hone our skills and
            developed a unique style that sets our work apart.
          </p>
        </div>
        <p className="para-twnty" data-aos="fade-left">
          Natural and organic wood products that will perfectly suit your
          interior
        </p>
      </div>

      <div className="about-us-top-wrapper">
        <img
          className="about-img" data-aos="fade-right"
          src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/644bb9b82621d8479dfee425_image%202.webp"
          alt=""
        />
        <div className="about-us-right-wrapper" data-aos="fade-left">
          <div className="about-us-number-wrapper">
            <div className="text-block">20+</div>
            <p>Years Experience</p>
          </div>

          <div className="about-us-number-wrapper">
            <div className="text-block">10K+</div>
            <p>Satisfied Clients</p>
          </div>
        </div>

      </div>

      <div className="decorate-your-day" data-aos="zoom-in-up">
        <h2 className="dec-head">
          Decorate Your Day With Our <br /> Handcrafts</h2>
        <p className="dec-para">
          We believe in the power of handmade goods to add a special touch to your life and make <br /> your day a little bit brighter. Browse our product today and discover the perfect <br />handcrafted item to decorate your day!</p>
        <div className="banner-button"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <Link to="/"><button className='primary-button'>
            View more
          </button>
          </Link>
        </div>

      </div>

    </div><>
        <SecondLastContainer />
        <LastContainer />
      </></>


  )
}

export default About;
