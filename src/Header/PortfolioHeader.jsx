import { React,  } from "react";
import "./styles.css"

const PortfolioHeader = () => {
    return (
        <div>
            <h1 className="headerName">
                Jack Duval
            </h1>
            <h4 className="headerIntro">
                entrepreneurially inclined computer engineering student, musician, nerd.
                <br />
                <strong>Currently building in web3.</strong>
            </h4>
            <hr />
        </div>
    );
}

export default PortfolioHeader;