import { React } from "react";
import "./styles.css";

const Contact = () => {
    return (
        <div>
            <h4 className="contact">
                jackcduval(at)gmail.com
            </h4>
            <h4 className="contact">
                jackduval.eth
            </h4>
            <a href="https://twitter.com/messages/compose?recipient_id=3805104374" class="twitter-dm-button" data-screen-name="@_jackduval">
                <h4 className="contact">
                    Twitter DM's are open too.
                </h4>
            </a>
        </div>
        
    );
}

export default Contact;