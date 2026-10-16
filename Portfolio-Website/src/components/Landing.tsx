import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => (
  <div className="landing-section" id="landingDiv">
    <div className="landing-container">
      <div className="landing-intro">
        <h2>Hello! I&apos;m</h2>
        <h1>
          ANKUR
          <br />
          <span>SINGH</span>
        </h1>
      </div>
      <div className="landing-info">
        <h3>Computer Engineering Student</h3>
        <h2 className="landing-info-h2">
          <div className="landing-h2-1">AI/ML</div>
          <div className="landing-h2-2">Software</div>
        </h2>
        <h2>
          <div className="landing-h2-info">Developer</div>
          <div className="landing-h2-info-1">Developer</div>
        </h2>
      </div>
    </div>
    {children}
  </div>
);

export default Landing;
