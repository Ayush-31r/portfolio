import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Experience Timeline Section */}
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <div className="timeline-container">
          
          {/* Securify Item */}
          <div className="timeline-item">
            <div className="timeline-item-content">
              <div className="timeline-title">
                Data Science Intern -{" "}
                <a 
                    href="https://www.linkedin.com/company/securifyshield" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span className="purple">Securify</span>
                </a>
              </div>
              <div className="timeline-date">
                Mar 2025 - Jul 2025
              </div>
              <div className="timeline-description">
                <ul>
                  <li>Established a data-isolated, multi-tenant architecture across 6+ organizational roles.</li>
                  <li>Developed automated data ingestion pipelines using Celery, Flower, and Go.</li>
                  <li>Performed EDA and implemented anomaly-detection logic on API usage and job metrics.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Achievements Section */}
        <h1 className="project-heading" style={{ paddingTop: "50px" }}>
          My <strong className="purple">Achievements</strong> & Awards
        </h1>
        <ul className="achievements-list">
          <li>Achieved 3-Star CodeChef rating (1733 peak) with a global contest rank of 164.</li>
          <li>Winner of CodeRush 2024, securing 1st place in Competitive Coding.</li>
          <li>Champion in 3 CTF competitions, outperforming 1000+ participants.</li>
          <li>Collected 50+ badges leveraging GCP services in Google Cloud Skill Boost.</li>
        </ul>
      </Container>
    </Container>
  );
}

export default Experience;