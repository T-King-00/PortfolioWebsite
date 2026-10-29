import "./Header.css"
import {github, linkedin} from "../../link.jsx";

function Header() {
    return (
        
        <header className="header-container" id={"Header"}>
            <ul className="header-list">
                <li className={ "header-list-item"}> 
                    <a className="social-link" href={linkedin}
                       target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <span className="social-icon linkedin-icon" aria-hidden="true"></span>
                    </a>
                </li>
                <li className={ "header-list-item"}>
                    <a className="social-link" href={github} target="_blank"
                       rel="noopener noreferrer" aria-label="GitHub profile">
                        <span className="social-icon github-icon" aria-hidden="true"></span>
                    </a>
                    
                </li>
            </ul>
        </header>


    )
}

export default Header;
