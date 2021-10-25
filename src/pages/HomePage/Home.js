import React from 'react';
import './Home.css';
import HomeImg from '../images/home-img.svg';
import FeaturedService from './FeaturedService/FeaturedService';
import useLoadData from '../../customHooks/LoadServiceData/useLoadData';
import useDoctorsData from '../../customHooks/LoadDoctors/useDoctorsData';
import FeaturedDoctors from './FeaturedDoctors/FeaturedDoctors';

const Home = () => {
      // Get service data from use service custom hook
      const [services] = useLoadData();

      // Get doctors data from use doctors custom hook
      const [doctors] = useDoctorsData();
    return (
      <div className="homePage">
        <div className="homeSection">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-lg-6 col-md-6 col-sm-6">
                       <div className="themeDetails">
                           <h1 className="themeTitle">The Best Clinic Solution in This Town</h1>
                           <p className="themePera">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country. We provide online and offline both service for our patient benefits.</p>
                           <button className="regularBtn">Load More &nbsp;<i className="fas fa-arrow-right"></i></button>
                       </div>
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-6">
                       <div className="homeImg">
                           <img src={HomeImg} alt="Homeimage" />
                       </div>
                   </div>
               </div>
           </div>
        </div>

        {/* Featured services section */}

        <div className="FeaturedService">
            <div className="container">
              <div className="row">
                  <div className="sectionTitle">
                      <h1 className="title">Our <span className="highlight">Services</span> </h1>
                  </div>
                  {
                    services.map(service => <FeaturedService key={service.uniqueId} service={service} />)
                  }
              </div>
            </div>
        </div>

        <div className="satisfactionSection">
            <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                       <div className="satisfiedBox">
                         <span className="fas fa-user-md"></span>
                         <h2 className="satisfiyedTitle">150+</h2>
                         <p className="satisfiyedDesc">Doctors At Work</p>
                       </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                       <div className="satisfiedBox">
                         <span className="fas fa-users"></span>
                         <h2 className="satisfiyedTitle">1550+</h2>
                         <p className="satisfiyedDesc">Satisfied Patients</p>
                       </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                       <div className="satisfiedBox">
                         <span className="fas fa-procedures"></span>
                         <h2 className="satisfiyedTitle">500+</h2>
                         <p className="satisfiyedDesc">Bed Facility</p>
                       </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                       <div className="satisfiedBox">
                         <span className="fas fa-ambulance"></span>
                         <h2 className="satisfiyedTitle">300+</h2>
                         <p className="satisfiyedDesc">Ambullance</p>
                       </div>
                  </div>
              </div>
            </div>
        </div>

        {/* Doctors Section  */}

        <div className="doctorsSection">
            <div className="container">
                <div className="row">
                <div className="sectionTitle">
                      <h1 className="title">Our <span className="highlight">Specialists</span> </h1>
                  </div>
                   {
                       doctors.map(doctor => <FeaturedDoctors key={doctor.uniqueId} doctors={doctor} />)
                   }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;