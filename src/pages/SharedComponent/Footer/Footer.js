import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
       <section className="footerSection">
           <div className="footerArea">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="firstFooterBox">
                               <div className="logo">
                        <NavLink id="Logo" to="/"><span className="logoIcon fas fa-heartbeat"><span className="logoText">Medicoz</span></span></NavLink>
                        <p className="themeDesc">We're a online hospital or clinic service provider. Our hospital name is "MEDICOZ Clinic". We try to best care our patient and collect best consaltant of the country.</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Pages</h3>
                        <NavLink id="menu" to="/home"><span className="menus">Home</span></NavLink>
                        <NavLink id="menu" to="/about"><span className="menus">About</span></NavLink>
                        <NavLink id="menu" to="/doctors"><span className="menus">Doctors</span></NavLink>
                        <NavLink id="menu" to="/emergency"><span className="menus">Emmergency</span></NavLink>
                        <NavLink id="menu" to="/account"><span className="menus">Account</span></NavLink>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Address</h3>
                       <span className="add">Address : Lakshmipur, Bangladesh</span>
                       <span className="add">Mobile : 01611859722</span>
                       <span className="add">Web : <a href="https://rafix.netlify.app" target="blank">Rafix</a></span>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="secondFooterBox">
                    <div className="footerNavbar">
                    <h3 className="itemName">Brances</h3>
                       <span className="add">Lakshmipur</span>
                       <span className="add">Dhaka</span>
                       <span className="add">Chattogram</span>
                       <span className="add">Feni</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Footer;