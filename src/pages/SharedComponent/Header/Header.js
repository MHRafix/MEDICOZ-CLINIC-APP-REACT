import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useFirebase from '../../../customHooks/useFirebase/useFirebase';
import Logout from '../../images/logout.png';

const Header = () => {
      // Use history for changing the route
      const history = useHistory();

  const {user, handleSignOut} = useFirebase();
  const handleLogOut = () => {
        handleSignOut();
        user.email="";
        history.push('/account');

  }
    return (
            <section>
                <div className="headerSection">
                <Navbar sticky="bottom" collapseOnSelect expand="lg" >
                    <Container>
                        <NavLink id="Logo" to="/"><span className="logoIcon fas fa-heartbeat"><span className="logoText">Medicoz</span></span></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink id="navMenu" to="/home">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavLink id="navMenu" to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;
                            <NavLink id="navMenu" to="/medicineCorner">Medicine Corner</NavLink>&nbsp;&nbsp;&nbsp;
                            <NavDropdown title="Extra Service" id="basic-nav-dropdown">
                            <NavDropdown.Item id="navMenuDropdown" as={Link} to="/ambullance">Ambullance</NavDropdown.Item>
                            <NavDropdown.Item id="navMenuDropdown" as={Link} to="/icubooking">ICU Booking</NavDropdown.Item>
                            <NavDropdown.Item id="navMenuDropdown" as={Link} to="/others">Others</NavDropdown.Item>
                          </NavDropdown>

                         </Nav> 
                            <div className="account">                          
                            <NavLink id="navMenu" to="/emergency">
                              <button className="emergencyBtn">Emergency</button>
                          </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                          { user?.email ? <>
                            <img width="50" className="rounded-circle" height="50" src={user.photoURL} alt="userImage" />
                            &nbsp;&nbsp;&nbsp;
                          <span style={{cursor: "pointer"}} onClick={handleLogOut} ><img width="30px" height="30px" src={Logout} alt="logoutBtn" /></span>
                          
                          </> : <NavLink id="navMenu" to="/account">Account</NavLink> 
                          }
                          </div>
                      </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
            </section>
    );
};

export default Header;