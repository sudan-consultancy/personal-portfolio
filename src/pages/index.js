import * as React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import H1 from "../atoms/h1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import H6 from "../atoms/h6";
import Card from "../molecules/card";
import profile from "../images/profile_01.jpg";
import aboutus from "../images/aboutus.svg";
import portfolio from "../images/portfolio_portrait.png";
import knowledge from "../images/knowledge.svg";
import blogs from "../images/blogs.svg";
import { Layout } from "../templates/navigation/layout";

const Profile = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const LandingPara = styled.p`
  text-align: center;
  color: #666666;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const SocialContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    transform: rotateZ(-90deg);
    right: -100px;
  }
`;

const SocialIcons = styled(FontAwesomeIcon)`
  padding: 10px;
  border-color: var(--primary);
  border-radius: 5px;

  &:hover {
    border-width: 1px;
    border-style: solid;
    color: var(--primary);
  }
`;

const CardsContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <Container fluid="md" className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="d-flex flex-column align-items-center align-items-md-start flex-shrink-1">
            <H6 primary>-&nbsp;Prabjyot Sudan</H6>
            <H1>Founder &amp; Director</H1>
            <LandingPara className="w-75">
              I aim to build tools that enable students to use computers in a
              masterful way, which can expand how they think, express,
              understand, and learn everything else.
            </LandingPara>
            <Button className="mb-3" primary>
              Get to know me
            </Button>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center position-relative flex-grow-1 w-auto">
            <Profile className="m-3" src={profile} alt="profile" />
            <SocialContainer className="d-flex align-items-center">
              <span>Follow&nbsp;Me</span>
              <SocialIcons icon={faTwitter} />
              <SocialIcons icon={faLinkedinIn} />
              <SocialIcons icon={faFacebookF} />
            </SocialContainer>
          </div>
        </div>
        <div className="d-flex flex-column my-5">
          <span>Some Companies I've Worked With</span>
          <div className="d-flex flex-wrap justify-content-center"></div>
        </div>
        <CardsContainer fluid className="p-md-0">
          <Card
            subheading="about"
            heading="Fine consumer tech"
            description="Specialization drives success"
            backgroundImage={aboutus}
          />
          <Card
            subheading="portfolio"
            heading="Making people happy"
            description="We’re proud to have been among the first investors
          in 85 category-defining consumer technology
          companies"
            backgroundImage={portfolio}
            isStart
            dark
            long
          />
          <Card
            subheading="knowledge"
            heading="Growth in advance"
            description="We started from the bottom and now we
          are defining the world with our knowledge"
            backgroundImage={knowledge}
            dark
            long
          />
          <Card
            subheading="blogs"
            heading="Sharing is caring"
            description="Everything you’ve always wanted to know
          about consumer technology"
            backgroundImage={blogs}
            dark
          />
        </CardsContainer>
      </Container>
    </Layout>
  );
};

export default HomePage;
