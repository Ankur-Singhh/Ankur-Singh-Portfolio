import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "VIDYUT",
    category: "Intelligent Renewable Energy Platform",
    dates: "July 2026 - Present",
    details:
      "Measures and values solar energy using smart-meter and ESP32 data. Calculates energy credits from verified exports and tracks ownership with blockchain. Uses AI insights and anomaly detection to identify unusual consumption.",
    technologies:
      "Next.js, React, TypeScript, ESP32, Blockchain, Smart Contracts, AI/ML, REST APIs, Database",
  },
  {
    name: "REDOXX",
    category: "AI-Powered Logistics Platform",
    dates: "July 2025 - Present",
    details:
      "Supports vehicle selection, load matching, cost estimation, and auction-based booking. Uses ML vehicle prediction and AI-agent workflows to estimate routes and market rates. Open bidding improves pricing transparency and vehicle utilization.",
    technologies: "React.js, Node.js, Supabase, Crew AI, Scikit-learn",
  },
  {
    name: "NagarSetu",
    category: "Smart Urban Management System",
    dates: "January 2026 - April 2026",
    details:
      "Developed an AI-driven digital twin concept for urban planning and forecasting. Built predictive models and zone-wise visualizations for data-driven planning and resource allocation.",
    technologies: "Next.js, Machine Learning",
  },
  // {
  //   name: "ORBIT",
  //   category: "Local Commerce Platform",
  //   dates: "January 2025 - April 2025",
  //   details:
  //     "Built a mobile platform connecting local stores with digital commerce. Helps vendors digitize operations and reach customers.",
  //   technologies: "Flutter, Dart, Firebase Firestore, Firebase Auth",
  // },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!boxes.length || !workContainer) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    };

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <article className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                    <p>{project.dates}</p>
                  </div>
                </div>
                <h4>Project details</h4>
                <p>{project.details}</p>
                <h4>Technologies</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
