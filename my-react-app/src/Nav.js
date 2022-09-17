import React ,{ useState } from "react";
import './Site.css';
import Logo from './logo192.png';

export default function Nav() {
    const [state, setState] = useState("block");
    const logoContainer = {
        position: 'absolute',
        left: 0
    }
    const dropdown = {
        display: state
    }
    return(
        <div className="navbar-container">
            <ul className="navbar-items">
                <li style={logoContainer}>
                    <img src={Logo} className="nav-logo" alt='logo'/>
                </li>
                <li>
                    <a onClick={setState(this.state === "block" ? "none" : "block")}>
                        MACHINE LEARNING
                    </a>
                    <ul style={dropdown} className="dropdown">
                        <li>Linear Regression</li>
                    </ul>
                </li>
                <li>
                    <a>
                        DEEP LEARNING
                    </a>
                </li>
                <li>
                    <a>
                        NEURAL NETWORKS
                    </a>
                </li>
                <li>
                    <a className="register-button">
                        Register
                    </a>
                </li>
            </ul>
        </div>
    )
}