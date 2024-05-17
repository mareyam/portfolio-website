import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/Projects/leaf.png";
import ecom from "../../assets/Projects/ecom.png";
import air from "../../assets/Projects/air.png";
import inf from "../../assets/Projects/inf.png";
import proj from "../../assets/Projects/proj.png";

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
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce web app"
              description="Ecommerce web application made in NextJS/TSX with Chakra UI."
              ghLink="https://github.com/mareyam/Next-e-commerce"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj}
              isBlog={false}
              title="Project management tool"
              description="A powerful project management tool designed to streamline workflows, enhance team collaboration, and ensure timely project delivery. Packed with features like task tracking, and real-time updates, it keeps everyone on the same page"
              ghLink="https://github.com/mareyam/project-management-tool"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Airbnb 2.0"
              description="An Airbnb design clone that replicates the sleek, user-friendly interface of the popular rental platform. Explore beautiful property listings, seamless booking features, and intuitive navigation for a top-notch user experience."
              ghLink="https://github.com/mareyam/airbnb2.0"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Splitter"
              description="A handy bill-splitting tool that makes it easy to divide expenses among friends, ensuring everyone pays their fair share. Perfect for group outings, shared living, and travel, it simplifies splitting costs and tracking payments.."
              ghLink="https://github.com/mareyam/splitter"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inf}
              isBlog={false}
              title="Influencer Marketing and Sentiment Analysis"
              description="An innovative influencer marketing tool that connects brands with the right influencers to boost engagement and drive conversions. Easily manage campaigns, track performance, and measure ROI in one streamlined platform.."
              ghLink="https://github.com/mareyam/influencer-marketing"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
