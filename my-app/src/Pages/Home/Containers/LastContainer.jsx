import './LastContainer.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LastContainer = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
        <div className="last-container">
          <div className="home-last-main-sec-name" data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <h5 className="home-last-main-sec-Testimonial">TESTIMONIALS</h5>
            <h1>What Our Customers Say</h1>
          </div>
          <div className="home-last-container-flex-container">
            <div className="home-last-container-flex-container-image-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNq-qigMJ5-MozNQeJUZPMgAS-CSZCQsPsEpLOcMr7E8OhU1rM" alt="image" height="450px" />
            </div>
            <div className="home-last-container-flex-container-comment-container" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <h3>"I'm grateful for the handmade face mask brush I received. I love the sleek design and how it feels like a luxurious self-care tool every time I use it."</h3>
              <h5>Jack Silk</h5>
              <p>Client</p>
              <div className="home-last-container-flex-container-comment-container-button-container" >
                <button className="home-last-container-flex-container-comment-container-button"> « </button>
                <button className="home-last-container-flex-container-comment-container-button"> » </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LastContainer