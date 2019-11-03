import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import * as ROUTES from '../../components/routes/routes.paths';
import { auth } from '../../firebase/firebase.util';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top" variant="dark">
    <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Dragon Byte</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href={process.env.PUBLIC_URL + ROUTES.HOME}>Home</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href={process.env.PUBLIC_URL + ROUTES.PROJECTS}>Projects</NavDropdown.Item>
                <NavDropdown.Item href={process.env.PUBLIC_URL + ROUTES.ROBOTS}>Robots</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={process.env.PUBLIC_URL + ROUTES.ABOUT}>About</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link className="nav-link" href={process.env.PUBLIC_URL + ROUTES.ADD_PROJECT}>Add Project</Nav.Link>
            <Nav.Link className="nav-link" href={process.env.PUBLIC_URL + ROUTES.SIGN_IN_AND_SIGN_UP}>Sign both</Nav.Link>
            {
                currentUser ? 
                <Nav.Link className="nav-link" onClick={() => auth.signOut()}>Sign Out</Nav.Link>
                :
                <Nav.Link className="nav-link" href={process.env.PUBLIC_URL + ROUTES.SIGN_IN}>Sign In</Nav.Link>
            }
            <Nav.Link className="nav-link" href={process.env.PUBLIC_URL + ROUTES.SIGN_UP}>Sign Up</Nav.Link>
            <CartIcon />
        </Nav>
        {
            hidden ? null : <CartDropdown />
        }
    </Navbar.Collapse>
    </Navbar>
)

//mapStateToProps function is equal to a function that returns the state object,
//where the name of the property is the actual prop we want to pass into Header component
//state is the rootReducer
const mapStateToProps = ({ user:{ currentUser }, cart:{ hidden } }) => ({
    //we want to get the user form rootReducer, which is the userReducer's INITIAL_STATE's currentUser: null
    currentUser,
    hidden   
}) 

//connect is higher-order component that let us modiy our components to have access to thing related to redux
//higher-order components are just functions that take components as arguments
//and then return us a new component
//connect() function takes 2 components as arguments, then returns higher-order component/function, in which we pass our (Header) component as argument
export default connect(mapStateToProps)(Header);