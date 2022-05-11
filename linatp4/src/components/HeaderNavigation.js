import React from 'react';
import {NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

const HeaderNavigation = () => {
    const beige = "#b6906a"
    const brown = "#622f2f"
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? `${brown}` : `${beige}`
        }
    }

    const typeUtilisateurStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? `${brown}` : `${beige}`
        }
    }

    return (
        <div>
            <NavLink to="/" style={navLinkStyles}>Home</NavLink>{" | "}
            <NavLink to="/clients" style={typeUtilisateurStyles}>Type d'utilisateur Client</NavLink> {" | "}
            <NavLink to="/employes" style={typeUtilisateurStyles}>Type d'utilisateur Employe</NavLink> {" | "}
            <NavLink to="/clients" style={navLinkStyles}>Clients</NavLink> {" | "}
            <NavLink to="/employes" style={navLinkStyles}>Employes</NavLink> {" | "}
            <NavLink to="/livres" style={navLinkStyles}>Livres</NavLink> {" | "}
            <NavLink to="/cds" style={navLinkStyles}>Cds</NavLink> {" | "}
            <NavLink to="/dvds" style={navLinkStyles}>Dvds</NavLink> {" | "}
            <NavLink to="/empruntDocuments" style={navLinkStyles}>Emprunt de document</NavLink> {" | "}
            <NavLink to="/retourDocuments" style={navLinkStyles}>Retour de document</NavLink>
        </div>
    )
}

export default HeaderNavigation;