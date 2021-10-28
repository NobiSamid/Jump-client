import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
           <Navbar bg="light" variant="light" sticky="top" expand="lg">
            <Container fluid>
                <Navbar.Brand className="ms-5 txth" href="/">Spine Firm</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    {/************************* Router Links **********************/}
                        <Nav.Link className="navtxt" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/services">
                            Adventures
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/placeorder">
                            Place-Reservation
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/myorders" >
                            My-Reservations
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/manageorders" >
                            Manage-Reservations
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/newservice" >
                            Add New Adventure
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/about" >
                            About
                        </Nav.Link>
                        
                        {/* If user Logged in or not then Display functionality by turnary operator */}
                        {/* {
                            user?.email ?
                            <Button className="navtxt" onClick={logOut} variant="light">Log-out</Button> 
                            :
                            <Nav.Link  as={Link} className="txtnav" to="/login">Log-in</Nav.Link>
                        }

                        {/* If user is Loging then show username or email */}
                        {/* {
                            user.email &&
                            <Navbar.Text className="navtxt">
                             <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <a href="#login">{user.displayName ? user.displayName : user.email }</a>
                            </Navbar.Text>
                        } */}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;