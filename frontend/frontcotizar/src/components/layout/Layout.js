import React, { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "Auth/AuthCtx";
import logo from "../../COTIZAR.COM.png";
import Permissions from "../../Auth/permissions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Layout = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cbRedirect = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.removeItem("userInfo");
    signout(cbRedirect);
  };

  return (
    <>
      <Navbar
        className="my-2"
        color="dark"
        dark
        expand="md"
        container="fluid"
        fixed="top"
      >
        <NavbarBrand href="/home">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 60,
              width: 90,
            }}
          />
          Cotizar.com
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/home"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </NavItem>

            <Permissions>
              <NavItem>
                <Link className="nav-link" to={"/dashboard"}>
                  Dashboard
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" onClick={logOut}>
                  Log out
                </Link>
              </NavItem>
            </Permissions>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ciudad
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Barranquilla</DropdownItem>
                <DropdownItem>Bogotá</DropdownItem>
                <DropdownItem>Cali</DropdownItem>
                <DropdownItem>Medellin</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;

/*

const Layout = () => {
  return (
    <div>
      
    </div>
  );
};
*/
