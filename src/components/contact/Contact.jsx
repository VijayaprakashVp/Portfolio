import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
          <div className="parag">
            <h2>Text me Hi,</h2>
            <p className="par_welcome" style={{ letterSpacing: ".5px" }}>
              I always Welcomes you to discuss about My/Your projects and have a
              conversation about new Initiative.
            </p>

            <p className="par_welcome" style={{ letterSpacing: ".5px" }}>
              Let's get in touch to bring out amazing Outcomes.
            </p>

            <div className="contact_icon">
              <div className="call">
                <div>Call me @ :</div>
                <p>7402038750</p>
              </div>
              <div className="call">
                <div>Mail @ :</div>
                <p>prakashvijay905@gmail.com</p>
              </div>
            </div>
            <div className="icoL">
              <div className="icoL_icon">
                <a href="mailto:prakashvijay905@gmail.com">
                  <EmailIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div className="icoL_icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vijayaprakash-t/"
                >
                  <LinkedInIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div className="icoL_icon">
                <a target="_blank" href="https://github.com/VijayaprakashVp">
                  <GitHubIcon style={{ width: "60px", height: "45px" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="gif">
            <img src={"assets/email1.gif"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
