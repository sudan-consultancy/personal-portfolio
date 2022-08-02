import * as React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import H1 from "../atoms/h1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
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

const SplashContainer = styled.div`
  min-height: 94vh;
`;

const ProfileContainer = styled.div`
  top: 3em;

  @media screen and (min-width: 992px) {
    position: static !important;
  }
`;

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
  text-align: justify;
  color: #666666;
  width: 100%;

  & > ul {
    padding-left: 0px;
    
    & > li {
    list-style-type: none;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & > u {
      text-decoration-style: dotted;
      cursor: help;
      position: relative;

      &::before {
        content: attr(data-hover);
        position: absolute;
        width: 200px;
        border: 1px solid black;
        background-color: white;
        padding: 1rem;
        top: 0;
        left: 50%;
        transform: translateX(50%);
        transition: 0.5s ease;
        visibility: hidden;
        opacity: 0;
        z-index: 5;
      }

      &:hover::before {
        visibility: visible;
        opacity: 1;
      }
    }

    @media screen and (min-width: 768px) {
      list-style-type: disc;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding-left: inherit;
  }
}

  @media screen and (min-width: 768px) {
    text-align: left;
    width: 75%;
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
        <SplashContainer className="d-flex flex-column flex-lg-row align-items-center position-relative">
          <div className="d-flex flex-column align-items-center align-items-lg-start flex-shrink-1 mt-5 flex-1">
            {/* <H6 primary>-&nbsp;What I'm Working On</H6> */}
            <H1>What I'm Working On</H1>
            <LandingPara>
              <ul>
                <li>
                  Building tools to enable students to use computers in a
                  masterful way, which can expand how they think, express,
                  understand, and learn everything else at Eniak.
                </li>
                <li>
                  Building a platform to connect the <u data-hover="Dark Talent are all those people
                  from the middle of nowhere, passed over by the establishment,
                  who could do great things if only given the opportunity">dark-talent</u> with
                  opportunities in startups.
                </li>
                <li>
                  Enabling Cogoport to onboard 200 students from Premier
                  Institutes of India (IIT, NIT, &amp; IIIT) to learn full stack
                  web development.
                </li>
                <li>
                  Helping Vefes democratize ownership of renewable assets with
                  the eventual goal of access to renewables being one-click
                  away.
                </li>
                <li>
                  Building One Percent Startups - (More about this coming soon).
                </li>
                <li>
                  Perhaps, the greatest art is a life well lived. I started a
                  newsletter called Aletheia where I share things beautiful,
                  wise and timeless.
                </li>
                <li>
                  Previously, I have built technology for over 30 different
                  companies across 10 different industries including KLM Royal
                  Dutch Airlines, Capshun (AI app which got over 100K
                  downloads), IIDE (Indian institute of digital education),
                  &amp; Manyavar.
                </li>
              </ul>
            </LandingPara>
            <Button as="a" href="/portfolio" className="mb-3 text-white" primary>
              Get to know me
            </Button>
          </div>
          <ProfileContainer className="d-flex flex-column flex-1 flex-md-row align-items-center flex-grow-1 w-auto mt-md-5 align-self-lg-center mt-lg-0 sticky-top">
            <Profile className="m-3 d-none d-md-block" src={profile} alt="profile" />
            <SocialContainer className="d-flex align-items-center">
              <span>Follow&nbsp;Me</span>
              <SocialIcons icon={faTwitter} />
              <SocialIcons icon={faLinkedinIn} />
            </SocialContainer>
          </ProfileContainer>
        </SplashContainer>
        {/* <div className="d-flex flex-column my-5">
          <span>Some Companies I've Worked With</span>
          <div className="d-flex flex-wrap justify-content-center"></div>
        </div> */}
        <CardsContainer fluid className="p-md-0 mb-5">
          <Card
            subheading="About Me"
            heading="Who Am I?"
            description="Without getting existential"
            backgroundImage={aboutus}
          />
          <Card
            subheading="Portfolio"
            heading="Play"
            description="What people call 'Work'"
            backgroundImage={portfolio}
            isStart
            dark
            long
          />
          <Card
            subheading="Articles"
            heading="Libary of Babel"
            description="Thinking, my labour; writing, my portal; leading, my reward"
            backgroundImage={knowledge}
            dark
            long
            thinner
            text_space
          />
          <Card
            subheading="Resources"
            heading="Lindy Library"
            description="Specialization is for insects"
            backgroundImage={blogs}
            dark
          />
        </CardsContainer>
      </Container>
    </Layout>
  );
};

export default HomePage;
