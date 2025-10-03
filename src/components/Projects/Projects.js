import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TruthLens - Fake News Classifier"
              description="Built a data science pipeline using NLP and machine learning to classify over 5,000 news articles as real or fake. The system achieved 92% accuracy and features a prototype interface for real-time testing."
              ghLink="https://github.com/Ayush-31r"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Parkinson's Disease Detector"
              description="Engineered a deep learning pipeline using CNNs on over 2,000 biomedical voice recordings to detect early-stage Parkinson's disease. The model achieved over 90% accuracy, comparable to state-of-the-art research."
              ghLink="https://github.com/Ayush-31r"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TalkBuds - Real-Time Chat Platform"
              description="Developed a scalable, real-time communication platform using Django, PostgreSQL, and WebSockets. The system supports over 150 active chat rooms under high load and features secure authentication and session handling."
              ghLink="https://github.com/Ayush-31r"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ESP32 Flight Controller"
              description="A complete platform for building and controlling quadcopters. Includes motor control, IMU integration for stabilization, WiFi remote control, and safety features, designed for hobbyists and drone enthusiasts."
              ghLink="https://github.com/Ayush-31r"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;