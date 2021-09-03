import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Indegogo.PNG";
import editor from "../../Assets/Projects/Bluemercurry.PNG";
import chatify from "../../Assets/Projects/Agoda.PNG";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agoda Clone "
              description="Agoda is an online travel agency and metasearch engine for hotels, vacation rentals, flights, and airport transfer. It was founded in 2003 and later acquired by Booking Holdings, becoming a subsidiary of the company."
              link="https://github.com/Subham-Abhishek/Agoda-Clone"
              linkmedium=""
              linklive=""
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Indiegogo Clone"
              description="Indiegogo is a website which offers two types of functionalities Donation and Fund-Raising. If anyone have any creative idea then he/she can fill a form and get a donation from any users if anyone likes their ideas. "
              link="https://github.com/hello-snsa/indiegogo-clone"
              linkmedium=""
              linklive=""
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from"
              link=""
              linkmedium=""
              linklive=""
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Animoto Clone"
              description="Animoto is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows,and customized web-based presentations."
              link="https://github.com/nilpatil7744/Project_Damodar"
              linkmedium="https://nilp7744.medium.com/masai-collaboration-project-animoto-clone-fec2a84b2f8b"
              linklive="https://animoto-clone.netlify.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
