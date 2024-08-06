import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificatesCard from "./CertificatesCards";
import Particle from "../Particle";
import ITI from "../../Assets/Certificates/ITI.JPG";
import Front_end from "../../Assets/Certificates/FRONT-END.JPG";
import full_stack from "../../Assets/Certificates/FULL-STACK.JPG";


function Certificates() {
  return (
    <Container fluid  className="project-section ">
      <Particle />
      <Container fluid  >
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center",paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificatesCard
              imgPath={ITI}
              isBlog={false}
              title=" Programming Fundamentals"
              description="A certificate from a C++ Programming Fundamentals course proves that you have acquired basic programming concepts such as defining variables and constants, control structures (such as conditions and loops), functions, and principles of memory handling and input/output. This certificate demonstrates your ability to understand and write simple programs using C++ and is an essential step in your journey in learning programming in general and the C++ language in particular. "
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificatesCard
              imgPath={Front_end}
              isBlog={false}
              title="  Front End "
              description="A graduate certificate from the Front-end course in JavaScript and the React framework reflects my skills in building advanced and dynamic user interfaces. I learned how to use JavaScript to implement programming logic and user interaction, as well as design and develop advanced web applications using React. The certificate qualifies you to work on real projects and professional opportunities in the field of modern web development in an effective and advanced manner."
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificatesCard
              imgPath={full_stack}
              isBlog={false}
              title="Full Stack"
              description=" Complete the Full Stack course using JavaScript! The certificate reflects your familiarity with all aspects of web application development, where I have acquired strong skills in using React to build advanced and interactive user interfaces. In addition, I have mastered using Express.js on the back-end to design and develop scalable and efficient web servers. I can now build integrated front-end and back-end applications, deal with databases and provide an excellent user experience. I have comprehensive experience combining Front-end and Back-end skills with such professionalism."
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
