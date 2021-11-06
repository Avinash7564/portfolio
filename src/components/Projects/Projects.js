import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Indegogo.PNG";
import editor from "../../Assets/Projects/Bluemercurry.PNG";
import chatify from "../../Assets/Projects/Agoda.PNG";
import pinterest from "../../Assets/Projects/pinterest.PNG";
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
              description="Agoda is an online travel agency and metasearch engine for hotels, vacation rentals, flights, and airport transfers. It was founded in 2003 and later acquired by Booking Holdings, becoming a subsidiary of the company."
              link="https://github.com/Avinash7564/Agoda-Clone"
              linkmedium="https://avinashrexx.hashnode.dev/cloning-of-agoda-website"
              linklive="https://agoda.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={pinterest}
              isBlog={false}
              title="Pinterset Clone"
              description="A cloned web application of pinterest.com, Pinterest is an image sharing and social media service designed to enable saving and discovery of information on the internet using images and, on a smaller scale, animated GIFs and videos, in the form of pin-boards."
              link="https://github.com/Avinash7564/Pinterest-clone"
              linkmedium="https://avinashrexx.hashnode.dev/bluemercury-website-cloning"
              linklive="https://pinshow.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Indiegogo Clone"
              description="Indiegogo is an American crowdfunding website founded in 2008 by Danae Ringelmann, Slava Rubin, and Eric Schell. Its headquarters are in San Francisco, California. The site is one of the first sites to offer to crowdfund. Indiegogo allows people to solicit funds for an idea, charity, or start-up business."
              link="https://github.com/Avinash7564/indiegogo-clone"
              linkmedium="https://avinashrexx.hashnode.dev/indiegogo-clone"
              linklive="https://indiegogo-clone.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from."
              link="https://github.com/Avinash7564/bluemercurry_clone"
              linkmedium="https://avinashrexx.hashnode.dev/bluemercury-website-cloning"
              linklive="https://bluemercurryclone.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
