import './FirstContainer.css'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    < div className="first-main-container bg-dark " >
      {/* ========== sub container 1 ========= */}
      <div className="first-main-sub-container1 d-flex justify-content-between" >

        <div className='First-container-image1-div ' data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
          <img className='First-container-image1' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b5da957017e9fc28cb_banner%20bg%20img%201-p-500.jpg" alt="..." />
        </div>

        <div className='First-container-image2-div ' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
          <img className='First-container-image2 ' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b60452533724148cf3_banner%20bg%20img%203-p-500.jpg" alt="..." />
        </div>

      </div >
      {/* =========== End's =========== */}

      {/* ============ Sub container 2 =========*/}
      <div className='first-main-sub-container2 d-flex justify-content-center text-center  '>

        <div className="First-container-text" data-aos-offset="300"
          data-aos-easing="ease-in-sine" data-aos-duration="1500" >
          <h1 className="text-light " data-aos="fade-right" style={{ fontSize: "5rem" }}>Every Detail Matter</h1>
          <h6 className="text-light " data-aos="fade-left" style={{ fontSize: "1.2rem ", padding: "20px 22rem 20px" }} >Natural and organic wood products that will perfectly suit your interior</h6>
          <Link to="/shop"  > <button type="button" data-aos="fade-up" className="btn btn-outline-light fs-5 rounded-pill">View Products</button></Link>
        </div>

      </div>
      {/* =========== End's =========== */}

      {/* ============ Sub container 3 =========*/}
      <div className='first-main-sub-container3 d-flex justify-content-around'>

        <div className='First-container-image3-div ' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
          <img className='First-container-image3' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b5402681aff4d00afe_banner%20bg%20img%204-p-500.jpg" alt="..." />
        </div>

        <div className='First-container-image4-div' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
          <img className='First-container-image4' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b60b7f8940a659d8a4_banner%20bg%20img%202.webp" alt="..." />
        </div>

      </div>
      {/* ===== End's ===== */}
    </div>
  )
}

export default FirstContainer