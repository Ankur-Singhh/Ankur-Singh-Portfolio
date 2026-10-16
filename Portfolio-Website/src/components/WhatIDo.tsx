import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/WhatIDo.css";

const skillGroups = [
  {
    heading: "DEVELOP",
    description:
      "Building end-to-end applications, APIs, and backend integrations.",
    skills: [
      "React.js",
      "Next.js",
      "Python",
      "MySQL",
      "REST APIs",
      "Backend Integration",
    ],
  },
  {
    heading: "AI & DATA",
    description:
      "Applying machine learning and data analysis to practical problems.",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Power BI",
      "Tableau",
      "Blockchain",
    ],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    const containers = containerRef.current.filter(
      (container): container is HTMLDivElement => container !== null
    );
    const listeners = containers.map((container) => {
      container.classList.remove("what-noTouch");
      const listener = () => handleClick(container);
      container.addEventListener("click", listener);
      return { container, listener };
    });

    return () => {
      listeners.forEach(({ container, listener }) => {
        container.removeEventListener("click", listener);
      });
    };
  }, []);

  return (
    <section className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%" aria-hidden="true">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {skillGroups.map((group, index) => (
            <div
              className="what-content what-noTouch"
              key={group.heading}
              ref={(element) => {
                containerRef.current[index] = element;
              }}
            >
              <div className="what-border1">
                <svg height="100%" aria-hidden="true">
                  <line
                    x1="0"
                    y1={index === 1 ? "100%" : "0"}
                    x2="100%"
                    y2={index === 1 ? "100%" : "0"}
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{group.heading}</h3>
                <h4>What I do</h4>
                <p>{group.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {group.skills.map((skill) => (
                    <div className="what-tags" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
