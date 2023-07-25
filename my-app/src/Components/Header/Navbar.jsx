import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <nav className=" navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white fs-4" to="/" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">HANDCRAFTS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 " data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <li className="nav-item">
                <Link className="nav-link active text-white fs-5" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/shop">SHOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/About">ABOUT</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ALL PAGES
                </a>
                <ul className="dropdown-menu ">
                  <li><Link className=" dropdown-item text-warning" to="/">HOME</Link></li>
                  <li><Link className=" dropdown-item text-warning" to="/shop">SHOP</Link></li>
                  <li><Link className=" dropdown-item text-warning" to="/about">ABOUT US</Link></li>
                  <li><a className="dropdown-divider"></a></li>
                  <li><a className=" dropdown-item" href="#"></a></li>
                </ul>
              </li>
            </ul>
            <li className="nav-item" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
              <Link className="nav-link text-white fs-5 " data-bs-toggle="modal" data-bs-target="#exampleModal">CART</Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;