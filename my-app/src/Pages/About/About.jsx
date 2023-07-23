import React from "react";
import "./About.css";
import SecondLastContainer from "./Containers/SecondLastContainer"; /* Error with the direction */
import LastContainer from "./Containers/LastContainer"; /* Error with the direction */

function About() {
  return (
    <>
      <div>
        <div>
          <h1 className="banner-title">About Us</h1>
          <p className="banner-para">
            Natural and organic wood products that will perfectly suit your
            interior
          </p>
        </div>

        <div className="about-us-top-wrapper">
          <div className="top-left-wrap">
            <h2 className="head-twnty">We Have Started Since 20 Years Ago</h2>
            <p className="para-twnty">
              Over the past two decades, we have undoubtedly hone our skills and
              developed a unique style that sets our work apart.
            </p>
          </div>
          <p className="para-twnty">
            Natural and organic wood products that will perfectly suit your
            interior
          </p>
        </div>

        <div className="about-us-top-wrapper">
          <img
            className="about-img"
            src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/644bb9b82621d8479dfee425_image%202.webp"
            alt=""
          />
          <div className="about-us-right-wrapper">
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

        <div className="decorate-your-day">
          <h2 className="dec-head">
            Decorate Your Day With Our <br /> Handcrafts
          </h2>
          <p className="dec-para">
            We believe in the power of handmade goods to add a special touch to
            your life and make <br /> your day a little bit brighter. Browse our
            product today and discover the perfect <br />
            handcrafted item to decorate your day!
          </p>
          <div className="banner-button">
            <a className="primary-button" href="./Home.jsx">
              View More
            </a>
          </div>
        </div>

        <div className="bg-light"></div>
      </div>
      <>
        <SecondLastContainer />
        <LastContainer />
      </>
    </>
  );
}

export default About;
