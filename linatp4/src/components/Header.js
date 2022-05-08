import React from 'react';
import {NavLink} from 'react-router-dom';
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
            <NavLink to="/livres" style={navLinkStyles}>Livres</NavLink> {" | "}
            <NavLink to="/cds" style={navLinkStyles}>Cds</NavLink> {" | "}
            <NavLink to="/dvds" style={navLinkStyles}>Dvds</NavLink>
        </div>
    )
}

export default Header;