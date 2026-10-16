import "./styles/Career.css";

const education = [
  {
    title: "B.E. / B.Tech, Computer Science Engineering (Data Science)",
    institution: "Lokmanya Tilak College of Engineering",
    date: "2023-2027",
    description: "July 2023 - July 2027.",
  },
  // {
  //   title: "HSC, Science",
  //   institution: "Kendriya Vidyalaya Bhandup",
  //   date: "2023",
  //   description: "March 2023.",
  // },
  // {
  //   title: "SSC",
  //   institution: "Kendriya Vidyalaya Bhandup",
  //   date: "2021",
  //   description: "March 2021.",
  // },
];

const leadership = [
  {
    title: "President, Data Science Students' Association",
    institution: "Department Level",
    date: "2026",
    description:
      "April 2026 - Present. Lead a student association focused on technology and technical, cultural, and sports activities. Coordinate the team and work with faculty and students to plan events, workshops, and departmental initiatives.",
  },
];

const achievements = [
  {
    title: "SIES Innovations 2026",
    subtitle: "Team Leader | Finalist",
    description:
      "Advanced to the Top 40 finalists among 500+ participating teams. Presented an AI-powered logistics solution focused on vehicle prediction and auction-based pricing.",
  },
  {
    title: "DIPEX 2026",
    description:
      "Presented a working prototype and explained its functionality to evaluators.",
  },
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Team Leader | Finalist",
    description:
      "Led a 6-member team through the 36-hour national-level hackathon, coordinating task allocation, system architecture, backend, and ML integration.",
  },
];

const certifications = [
  {
    title: "Generative AI Model",
    institution: "NXT WAVE",
    date: "February 2025",
  },
  {
    title: "Tableau, Power BI & Hadoop",
    institution: "ISTE",
    date: "January 2025",
  },
  {
    title: "Turning Data into Decision using Python",
    institution: "IBM / CSRBOX",
    date: "December 2024",
  },
  {
    title: "Data Analytics Training",
    institution: "Edureka",
    date: "December 2024",
  },
];

const Career = () => (
  <section className="career-section section-container" id="career">
    <div className="career-container">
      <h2>
        My career <span>&</span>
        <br /> experience
      </h2>
      <div className="career-info">
        <div className="career-timeline">
          <div className="career-dot"></div>
        </div>
        <h3 className="career-group-title">Education</h3>
        {education.map((item) => (
          <article className="career-info-box" key={item.title}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>{item.title}</h4>
                <h5>{item.institution}</h5>
              </div>
              <h3>{item.date}</h3>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
        <h3 className="career-group-title">Leadership</h3>
        {leadership.map((item) => (
          <article className="career-info-box" key={item.title}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>{item.title}</h4>
                <h5>{item.institution}</h5>
              </div>
              <h3>{item.date}</h3>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="career-resume-grid">
        <section className="career-extra">
          <h3>Achievements</h3>
          {achievements.map((item) => (
            <article className="career-extra-item" key={item.title}>
              <h4>{item.title}</h4>
              {item.subtitle && <h5>{item.subtitle}</h5>}
              <p>{item.description}</p>
            </article>
          ))}
        </section>
        <section className="career-extra">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((certification) => (
              <li key={certification.title}>
                <strong>{certification.title}</strong>
                <br />
                {certification.institution} | {certification.date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </section>
);

export default Career;
