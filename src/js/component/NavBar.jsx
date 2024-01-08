import React from "react";
const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <h4 className="text-white mx-3">Start boostrap</h4>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
                  
    


        </div>
    );
};

export default NavBar; 