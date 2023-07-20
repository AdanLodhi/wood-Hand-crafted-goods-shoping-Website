import React from 'react'
import './FirstContainer.css'

const FirstContainer = () => {
  return (
    < div className="first-main-container bg-dark " >
      {/* ========== sub container 1 ========= */}
      <div className="first-main-sub-container1 d-flex justify-content-between" >

        <div className='First-container-image1-div '>
          <img className='First-container-image1' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b5da957017e9fc28cb_banner%20bg%20img%201-p-500.jpg" alt="..." />
        </div>

        <div className='First-container-image2-div '>
          <img className='First-container-image2 ' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b60452533724148cf3_banner%20bg%20img%203-p-500.jpg" alt="..." />
        </div>

      </div >
      {/* =========== End's =========== */}

      {/* ============ Sub container 2 =========*/}
      <div className='first-main-sub-container2 d-flex justify-content-center text-center  '>

        <div className="First-container-text">
          <h1 className="text-light " style={{fontSize:"5rem"}}>Every Detail Matter</h1>
          <h6 className="text-light " style={{fontSize:"1.2rem ", padding: "20px 22rem 20px"}} >Natural and organic wood products that will perfectly suit your interior</h6>
          <button type="button" className="btn btn-outline-light fs-5 rounded-pill">View Products</button>
        </div>

      </div>
      {/* =========== End's =========== */}

      {/* ============ Sub container 3 =========*/}
      <div className='first-main-sub-container3 d-flex justify-content-around'>

        <div className='First-container-image3-div '>
          <img className='First-container-image3' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b5402681aff4d00afe_banner%20bg%20img%204-p-500.jpg" alt="..." />
        </div>

        <div className='First-container-image4-div' >
          <img className='First-container-image4' src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/643e93b60b7f8940a659d8a4_banner%20bg%20img%202.webp" alt="..." />
        </div>

      </div>
      {/* ===== End's ===== */}
    </div>
  )
}

export default FirstContainer