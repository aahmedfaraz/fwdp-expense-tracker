import React from "react";
// import elements
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h1>Expense Tracker</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;