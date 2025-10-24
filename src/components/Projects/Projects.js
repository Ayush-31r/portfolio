import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zom from "../../Assets/Projects/zom.jpg";
import ESP from "../../Assets/Projects/ESP.jpg";
import talk from "../../Assets/Projects/talk.png";
import truth from "../../Assets/Projects/truth.png";
import park from "../../Assets/Projects/park.png";
import sum from "../../Assets/Projects/sum.png";
import map from "../../Assets/Projects/map.png";

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
              imgPath={park}
              isBlog={false}
              title="Parkinson's Disease Detector"
              description="A deep learning project that analyzes biomedical voice measurements to detect the presence of Parkinson's disease. Built using scikit-learn and includes data preprocessing, feature selection, and classification for accurate predictions."
              ghLink="https://github.com/Ayush-31r/Parkinson-s-detection-model"
              demoLink="https://parkinson-s-detection-model-deeplearning.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="FlowCast - Urban Mobility Forecasting "
              description="ML model predicting Bangalore travel time and fare using Uber data with spatial-temporal features and Streamlit dashboard."
              ghLink="https://github.com/Ayush-31r/FlowCast"
              demoLink="https://flowcast-project.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truth}
              isBlog={false}
              title="TruthLens - Fake News Classifier"
              description="A machine learning pipeline for fake news detection with EDA, text preprocessing, TF-IDF feature extraction, and classification using Naive Bayes and Random Forest."
              ghLink="https://github.com/Ayush-31r/TruthLens"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talk}
              isBlog={false}
              title="TalkBuds - Real-Time Chat Platform"
              description="An online platform enabling users to engage in topic-based discussions within chat groups, supporting several users. Implemented robust user authentication, allowing for secure creation and management of active chat rooms."
              ghLink="hhttps://github.com/Ayush-31r/Talk-Buds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sum}
              isBlog={false}
              title="Article Summarizer"
              description="A Flask-based web app that uses HuggingFace’s BART model to generate concise summaries from any text. It features a responsive, dark-themed TailwindCSS interface and efficiently manages model loading for smooth performance."
              ghLink="https://github.com/Ayush-31r/Summarizer"
              demoLink="https://summarizer-texts.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESP}
              isBlog={false}
              title="ESP32 Flight Controller"
              description="A complete platform for building and controlling quadcopters. Includes motor control, IMU integration for stabilization, WiFi remote control, and safety features, designed for hobbyists and drone enthusiasts."
              ghLink="https://github.com/Ayush-31r/ESP32-Flight-Controller"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zom}
              isBlog={false}
              title="Zomato Ratings Analysis"
              description="A Exploratory Data Analysis on Zomato Bangalore dataset to uncover insights about restaurants, ratings, cuisines, and dining trends."
              ghLink="https://github.com/Ayush-31r/Zomato-Bangalore-EDA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;