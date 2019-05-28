import React from "react";
import {Link} from "react-router-dom";

const Menu = (props) => (

    <nav className="main-menu">
        <div>
            <Link to="/">Home</Link>
            <Link to="/hello">Hello sample</Link>
            <Link to="/hello-from-api">Hello from API</Link>
            <Link to="/login">Login page</Link>
        </div>
    </nav>
);

export default Menu;