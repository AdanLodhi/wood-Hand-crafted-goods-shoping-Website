import './SecondLastContainer.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom"

const SecondLastContainer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="second-last-container">
            <div className=" d-flex bg-dark p-4  second-last-container-sub-container-1" >
                <div className=" pe-5 d-flex flex-column justify-content-around" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <h5 className="text-warning">IT'S MATTER TO DO WHAT YOU LOVE</h5>
                    <h1 className="text-light " >We Feel Passion to What We Do</h1>
                    <p className="text-light fs-5  ">When we feel passion for what we do, it creates a sense of purpose and meaning in our lives. For those who love handcrafts, creating something with their own hands can be a therapeutic experience that allows them to express themselves and relieve stress. It is a way to escape the fast-paced world around us and immerse ourselves in a creative and fulfilling activity.</p>
                    <h5 className="text-light">DANIEL BOWSKY</h5>
                    <h6 className="text-light">FOUNDER</h6>
                </div>
                <div className="second-last-container-sub-container-1-image-container" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    {/* This  div is just for an image to set in its background. No further code is written in this div */}
                </div>
            </div>
            <div className="second-last-container-sub-container-2 ">
                <div className="" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div className=" m-3 pe-5  ">
                        <h5 className="text-warning">TEAM</h5>
                        <br />
                        <h1 className="text-light">Meet Our Team</h1>
                        <br />
                        <div className="pe-5">
                            <p className="  text-light fs-5  pe-5"  >Our handcrafts team is made up of a group of talented and passionate individuals who share a love for creating beautiful and unique pieces. From woodworking to jewelry making to textile arts, our team members bring a diverse range of skills and expertise to the table.</p>
                        </div>
                        <br />
                        <Link to={"/about"}> <button type="button" className="btn btn-outline-light rounded-pill fs-5">View  More</button></Link>
                        <br />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SecondLastContainer