import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiddleContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="middle-card-container d-flex justify-content-between p-4 ">
      {/*=== card 1 === */}

      <div className="card" style={{ width: "18rem" }} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <img src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5794422f568a8f936d2_image-p-500.jpg" style={{ height: "20rem" }} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title text-warning">SOAP HOLDER</h5>
          <p className="card-text fs-5 " >$ 15.99 USD</p>
          <Link to={"/cart"}> <button type="button" className="btn btn-outline-warning">ADD TO CART</button> </Link>
        </div>
      </div>
      {/*=== card 2 === */}

      <div className="card" style={{ width: "18rem" }} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <img src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5b7ae24814cf512f714_image%202-p-500.jpg" style={{ height: "20rem" }} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title text-warning">WOODEN TEETH BRUSH</h5>
          <p className="card-text fs-5 ">$ 12.99 USD</p>
          <Link to={"/cart"}><button type="button" className="btn btn-outline-warning">ADD TO CART</button> </Link>
        </div>
      </div>
      {/*=== card 3 === */}

      <div className="card" style={{ width: "18rem" }} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <img src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5d5d017b2c58c5797ba_image%203-p-500.jpg" style={{ height: "20rem" }} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title text-warning">WOODEN SOAP BRUSH</h5>
          <p className="card-text fs-5 ">$ 19.99 USD</p>
          <Link to={"/cart"}>  <button type="button" className="btn btn-outline-warning">ADD TO CART</button>  </Link>
        </div>
      </div>
    </div>
  )
}

export default MiddleContainer