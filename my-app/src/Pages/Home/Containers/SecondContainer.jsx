import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="middle-container d-flex p-3  ">
      <div className="middle-sub-container1 p-5  " data-aos="flip-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
        <h6 className="text-warning">OUR PRODUCTS</h6>
        <p className="text-secondary fs-5">
          Natural and organic wood products that will perfectly suit your interior
        </p>
        <Link to={"/shop"}> <button type="button" className="btn btn-outline-dark rounded-pill fs-5">View More</button> </Link>
      </div>
      <div className="middle-sub-container2 p-5  " data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
        <h1>Products are Made of Natural Wood, Which Will not Pollute the Environment</h1>
      </div>
    </div>
  )
}

export default SecondContainer