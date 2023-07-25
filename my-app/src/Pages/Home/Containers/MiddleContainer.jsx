import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardsData from "../card/CardsData"
import Card from "../card/Card";

const MiddleContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="middle-card-container d-flex justify-content-between p-4 " data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
      {/* ==== code for card ==== */}
      
      {
        CardsData.map((val, ind) => {
          return <Card key={ind}
            imgSrc={val.imgSrc}
            title={val.title}
            price={val.price}
          />
        })
      }

      {/* ======= code for modal start ======== */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel text-center "> Your Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-bold">
              Oops! Item Not Available
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary ">Continue To Checkout</button>
            </div>
          </div>
        </div>
      </div>
      {/*========== code for modal end ========= */}
    </div>

  )
}

export default MiddleContainer