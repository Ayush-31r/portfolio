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
                Software Developer -{" "}
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
                  <li>Created a data-isolated, multi-tenant architecture with role-based access control.</li>
                  <li>Built automated job processing pipelines using Celery, Flower, and Go.</li>
                  <li>Designed and optimized over 50 REST APIs, reducing query response times by 10%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Cloud Item */}
          <div className="timeline-item">
            <div className="timeline-item-content">
              <div className="timeline-title">
                Google Cloud Boost Skill Program Participant
              </div>
              <div className="timeline-date">
                2024
              </div>
              <div className="timeline-description">
                <ul>
                  <li>Leveraged GCP services including Compute Engine, Cloud Storage, and Cloud Run to deploy and manage scalable and reliable applications.</li>
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
          <li>Reached 3-Star on CodeChef with a peak rating of 1733.</li>
          <li>Winner of CodeRush 2024 (1st Place, Non-CS Branches).</li>
          <li>Secured victories in 3 CTF tournaments against 1,000+ participants.</li>
          <li>Solved 500+ problems on competitive programming platforms.</li>
        </ul>
      </Container>
    </Container>
  );
}

export default Experience;