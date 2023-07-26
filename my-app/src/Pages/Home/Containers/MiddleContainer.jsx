import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardsData from "../card/CardsData"
import Card from "../card/Card";
import Modal from "../modal";

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
      {/* code for modal */}
      {
        CardsData.map((val, ind) => {
          return <Modal
            key={ind}
            imgSrc={val.imgSrc}
            title={val.title}
            price={val.price}
          />
        })
      }
      {/*========== code for modal end ========= */}
    </div>

  )
}

export default MiddleContainer