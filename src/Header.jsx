import { useState } from "react";
import RsaLogo from "./assets/rsa_logonew.svg";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import "./Header.css"

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header>
            <div className="main">

            <div className="logo-box">
                <img src={RsaLogo} alt="rsa logo" />
            </div>

             <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <span id="close-menu" className="close-menu material-symbols-outlined" onClick={() => setMenuOpen(false)}>close</span>
                 <a href="#">Platform</a>
                <a href="#">Solutions</a>
                 <a href="#">Resources</a>
                <a href="#">Company</a>

            </div>

            <div className="header-actions">
                <ThemeToggle />
                <span id="hamburger-menu" className="material-symbols-outlined" onClick={() => setMenuOpen(true)}>dehaze</span>
                <Button buttonText="Contact us" />
            </div>

            </div>

        </header>
    )
}

export default Header;
