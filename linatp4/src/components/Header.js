import React from 'react';
import {NavLink} from 'react-router-dom';
import {Dropdown, DropdownButton} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

const Header = () => {
    const blue = "#89CFF0"
    const red = "#F12B2A"
    const navLinkStyles = ({isActive}) => {
        console.log(isActive)
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? `${red}` : `${blue}`
        }
    }
    return (
        <div>
            <NavLink to="/" style={navLinkStyles}>Home</NavLink>{" | "}
            <NavLink to="/clients" style={navLinkStyles}>Clients</NavLink> {" | "}
            <DropdownButton id="dropdown-button" title="Documents">
                <Dropdown.Item href="#/livres">
                    <NavLink to="/livres" style={navLinkStyles}>Livres</NavLink>
                </Dropdown.Item>
                <Dropdown.Item href="#/cds">
                    <NavLink to="/cds" style={navLinkStyles}>Cds</NavLink>
                </Dropdown.Item>
                <Dropdown.Item href="#/dvds">
                    <NavLink to="/dvds" style={navLinkStyles}>Dvds</NavLink>
                </Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Header;