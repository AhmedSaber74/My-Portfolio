import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wither from "../../Assets/Projects/weather.png";
import emotion from "../../Assets/Projects/react.webp";
import Mealify from "../../Assets/Projects/meal-3.jpg";
import E_comers from "../../Assets/Projects/E-commers.jpeg";
import jop_searsh from "../../Assets/Projects/Jop-searsh.jpeg";

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
              imgPath={E_comers}
              isBlog={false}
              title="E-comers"
              description="The e-comers website features a simple and smooth user interface, which makes the shopping process a real pleasure for customers. The platform also provides a variety of categories and classifications to meet the needs of different shoppers. "
              ghLink="https://github.com/AhmedSaber74/lastReact"
              demoLink="https://ahmedsaber74.github.io/lastReact/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jop_searsh}
              isBlog={false}
              title="Job-Search-App"
              description="Welcome to our premium job search and recruitment platform. This site is the ideal destination for job seekers of all backgrounds and qualifications.We have a comprehensive database of jobs available in various sectors and regions, which is constantly updated. Whether you are looking for permanent or temporary job opportunities, professional development or a career transition, you will find what you are looking for here."
              ghLink="https://github.com/AhmedSaber74/Job-Search-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mealify}
              isBlog={false}
              title="Mealify"
              description=" Mealify Restaurant, the preferred destination for those looking for an exceptional dining experience. We pride ourselves on serving a variety of delicious cuisine, from traditional local cuisine to innovative international dishes"
              ghLink="https://github.com/AhmedSaber74/Mealify"
              demoLink="https://ahmedsaber74.github.io/Mealify/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wither}
              isBlog={false}
              title="Smart-Wither"
              description=" the weather website, the trusted and comprehensive source of weather information. Whether you are planning a trip or want to know the weather conditions in your area, our website is the ideal destination for you."
              ghLink="https://github.com/AhmedSaber74/assigmint-js-5"
              demoLink="https://ahmedsaber74.github.io/assigmint-js-5/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_comers}
              isBlog={false}
              title="back end E-comers"
              description="The e-comers Back-end operating system website features a simple and smooth user interface, which makes the shopping process a real pleasure for customers. The platform also provides a variety of categories and classifications to meet the needs of different shoppers."
              ghLink="https://github.com/AhmedSaber74/e-commers-project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="My first project in react"
              description="“Welcome to my first website that I created myself, where my first steps into the world of React website development are embodied. This website is not just a web page, but rather the product of my learning and experimentation, as I used React technologies to achieve my programming vision. Through this project, I seek to gain more experience And the skills in building and designing modern web applications in a manner characterized by innovation and technical accuracy. Please check this out, and I look forward to exploring more of my journey in the world of web development using React.”."
              ghLink="https://github.com/AhmedSaber74/React2"
              demoLink="https://ahmedsaber74.github.io/React2/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
