import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, ButtonGroup } from 'react-bootstrap';
import AuthService from '../../Services/auth.service';
import './Navbar.css';

function NavigationBar() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            // console.log(currentUser.roles);
        }
    }, []);

    console.log(currentUser);

    const logOut = () => (
        AuthService.logout()
    )

    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="navbar-color " >
                <Navbar.Brand href="/" className="pl-5"><b>CityMate</b></Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-5">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="/education" >Education</Nav.Link> */}
                        <Dropdown as= {ButtonGroup} >
                            <Nav.Link href="/education" >Education</Nav.Link>
                            <Dropdown.Toggle split variant="default" className="text-white" style={{ padding: "0"}}/>
                            <Dropdown.Menu  >
                            <Dropdown.Item href="/all-schools">Schools</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/all-colleges">Colleges</Dropdown.Item> 
                            </Dropdown.Menu>
                        </Dropdown> &nbsp;
   
                        {/* <Nav.Link href="/funNDine" >FunNDine</Nav.Link> */}
                        <Dropdown as= {ButtonGroup} >
                            <Nav.Link href="/funNDine" >FunNDine</Nav.Link>
                            <Dropdown.Toggle split variant="default" className="text-white" style={{ padding: "0"}}/>
                            <Dropdown.Menu  >
                            <Dropdown.Item href="/userrestaurant">Restaurants</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/userparks">Parks</Dropdown.Item> 
                            <Dropdown.Divider />
                            <Dropdown.Item href="/usermalls">Malls</Dropdown.Item> 
                            </Dropdown.Menu>
                        </Dropdown> &nbsp;

                        {/* <Nav.Link href="/health" >Health</Nav.Link> */}
                        <Dropdown as= {ButtonGroup} >
                            <Nav.Link href="/health" >Health</Nav.Link>
                            <Dropdown.Toggle split variant="default" className="text-white" style={{ padding: "0"}}/>
                            <Dropdown.Menu  >
                            <Dropdown.Item href="/userhospital">Hospital</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/userpharmacy">Pharmacy</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> &nbsp;
                        <Nav.Link href="/tourism" >Tourism</Nav.Link>
                        <Nav.Link href="/transport" >Transportation</Nav.Link>
                        <Nav.Link href="/events" >Events</Nav.Link>

                        {currentUser ? (
                            <>
                                {currentUser.roles[0] === "ROLE_FUNNDINE" && <Nav.Link href="/admin_funndine" >{currentUser.username}</Nav.Link>}
                                {currentUser.roles[0] === "ROLE_EVENT" && <Nav.Link href="/admin_event" >{currentUser.username}</Nav.Link>}
                                {currentUser.roles[0] === "ROLE_HEALTH" && <Nav.Link href="/admin_health" >{currentUser.username}</Nav.Link>}
                                {currentUser.roles[0] === "ROLE_TOURISM" && <Nav.Link href="/admin_tourism" >{currentUser.username}</Nav.Link>}
                                {currentUser.roles[0] === "ROLE_EDUCATION" && <Nav.Link href="/admin_education" >{currentUser.username}</Nav.Link>}
                                <Nav.Link href="/admin_login" onClick={logOut} >Logout</Nav.Link>
                            </>
                            ) : (
                                <Nav.Link href="/admin_login" >AdminLogin</Nav.Link>    
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}

export default NavigationBar;
