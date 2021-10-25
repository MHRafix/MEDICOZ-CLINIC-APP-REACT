import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="aboutUsPage">
            <div>
             <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="contaner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h1 className="themeTitle">The Best Clinic Solution Ever</h1>
                                    <p className="themeDesc">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.</p>
                                    <button className="regularBtn">Load More</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <img height="350px" src="https://i.ibb.co/mTk9TyJ/Full-length-portrait-of-a-male-nurse-with-a-clipboard-and-an-elderly-female-patient-with-a-walking-c.jpg" className="d-block w-100" alt="aboutPageHomeBanner" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="contaner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <img height="350px" src="https://i.ibb.co/XkTHYG9/Full-length-profile-shot-of-a-doctor-talking-to-a-pregnant-woman-and-a-man-isolated-on-white-backgro.jpg" className="d-block w-100" alt="aboutPageHomeBanner" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h1 className="themeTitle">Mother And Baby Care For Better Life</h1>
                                    <p className="themeDesc">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.</p>
                                    <button className="regularBtn">Load More</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="contaner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h1 className="themeTitle">Healthy Life Better time</h1>
                                    <p className="themeDesc">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.</p>
                                    <button className="regularBtn">Load More</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <img height="350px" src="https://i.ibb.co/x2Mxcf4/Hispanic-male-Doctor-consulting-with-a-young-female-patient.jpg" className="d-block w-100" alt="aboutPageHomeBanner" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button style={{color: "red"}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            </div>

            <div className="aboutFounderArea">
                <div className="container">
                    <div className="row">
                        <h2 style={{color:"#444", fontSize: "45px", fontWeight: 700, textAlign: "center", marginBottom: "40px"}}>About CEO</h2>
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <div className="aboutInfo">
                                <h2 className="name">Abid David</h2>
                                <p className="themeDesc">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="detailImg">
                                <img style={ {borderRadius: "10px"}} height="350" width="100%" src="https://i.ibb.co/k3dQY4H/photo-1560250097-0b93528c311a.jpg" alt="ceoImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;