import { React } from "react";
import { Image } from "react-bootstrap";

import twitterLogo from "../assets/twitter-blue-circle.svg";
import githubLogo from "../assets/ghlogo.png";
import liLogo from "../assets/LI-In-Bug.png";

import "./styles.css";

const Footer = () => {
    return (
        <div>
            <hr />
            <a href="https://twitter.com/_jackduval/">
                <Image className="logo" src={twitterLogo}/>
            </a>

            <a href="https://github.com/jack-duval">
                <Image className="logo" src={githubLogo}/>
            </a>

            <a href="https://www.linkedin.com/in/jack-duval/">
                <Image className="logo" src={liLogo}/>
            </a>
        </div>
    );
}

export default Footer;