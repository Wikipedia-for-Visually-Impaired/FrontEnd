import React from "react";
import "./Navbar.css";

class Navbar extends React.Component{
    render() {
        return (
            <div className='navbar'>
                <img id = 'logo' src = './logo.jpeg' alt = ''></img>
                <a className="navbar-brand" id='WIKI_HEADING' >WIKI</a>
                <button id = 'about_button'>ABOUT</button>
                <button id = 'illustration_button'>ILLUSTRATION</button>
                <button id = 'developers_button'>DEVELOPERS</button>
                <button id = 'login_button'>LOGIN</button>
            </div>
        );
    }
}

export default Navbar;