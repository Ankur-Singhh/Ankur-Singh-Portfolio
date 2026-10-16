import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => (
  <div className="contact-section section-container" id="contact">
    <div className="contact-container">
      <h3>Contact</h3>
      <div className="contact-flex">
        <div className="contact-box">
          <h4>Email</h4>
          <p>
            <a href="mailto:ankursingh99421@gmail.com" data-cursor="disable">
              ankursingh99421@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-box">
          <h4>Social</h4>
          <a
            href="https://github.com/Ankur-Singhh"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social"
          >
            GitHub <MdArrowOutward />
          </a>
          <a
            href="https://www.linkedin.com/in/ankurr-singh/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social"
          >
            LinkedIn <MdArrowOutward />
          </a>
          <a
            href="https://x.com/ankur_singhh"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social"
          >
            X (Twitter) <MdArrowOutward />
          </a>
        </div>
        <div className="contact-box">
          <h2>
            Designed and Developed <br /> by <span>Ankur Singh</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
