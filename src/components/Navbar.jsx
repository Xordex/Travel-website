import { useState } from "react"
import Button from "./Button";
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    window.addEventListener('load', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo" onClick={() => setClick(false)}>TRVL <i className="fab fa-typo3" /></Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="home" className="nav-links" onClick={() => setClick(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutus" className="nav-links" onClick={() => setClick(false)}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="products" className="nav-links" onClick={() => setClick(false)}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="sign-up" className="nav-links-mobile" onClick={() => setClick(false)}>Sign up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--primary' buttonSize='btn--medium'>Sign up</Button>}
                </div>
            </nav >
        </>
    )
}