import "./styles.css";
import * as React from "react";

import Biography from "../Biography/Biography";
import { Button, ButtonGroup } from "react-bootstrap";
import Links from "../Links/Links";
import Projects from "../Projects/Projects";
import TwitterFeed from "../TwitterFeed/TwitterFeed";
import Contact from "../Contact/Contact";

const Content = (props) => {
    if (props.shownContent === "bio") {
        return (
            <div>
                <Biography />
            </div>
        );
    }

    if (props.shownContent === "links") {
        return (
            <div>
                {/* <Links /> */}
                <Contact />
            </div>
        );
    }

    if (props.shownContent === "projects") {
        return (
            <div>
                <Projects />
            </div>
        );
    }

    if (props.shownContent === "experience") {
        return (
            <div>
                <h1>To be added.</h1>
            </div>
        );
    }
}

const ContentContainer = () => {
    const [shownContent, setShownContent] = React.useState("bio");

    const handleLinkButtonClick = () => {
        setShownContent("links");
    }

    const handleBioButtonClick = () => {
        setShownContent("bio");
    }

    const handleProjectsButtonClick = () => {
        setShownContent("projects");
    }

    const handleExperienceButtonClick = () => {
        setShownContent("experience");
    }

    return (
        <div>
            <ButtonGroup className="buttonGroup">
                <Button className="button" onClick={handleBioButtonClick}>
                    Bio
                </Button>

                <Button className="button"onClick={handleProjectsButtonClick}>
                    Projects
                </Button>

                <Button className="button" onClick={handleLinkButtonClick}>
                    Contact
                </Button>
{/* 
                <Button className="button" onClick={handleExperienceButtonClick}>
                    Experience
                </Button> */}
            </ButtonGroup>
            <Content shownContent={shownContent} />
        </div>
    );
}

export default ContentContainer;