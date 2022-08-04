import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const gap1halfem = {
  gap: "1.5em",
};

const Quote = styled.q`
  font-family: "Recoleta";
  font-size: 1.4em;
`;

const FooterContainer = styled.div`
  background-color: #edf0f7;

  & span,
  & a {
    font-size: 0.8em;
  }

  & .my-nav-items > a {
    width: 35%;

    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

  & .my-socials > a {
    padding-right: 1em;
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer className="py-4 py-md-5">
      <Container fluid="md">
        <div className="d-flex flex-column flex-md-row mb-4" style={gap1halfem}>
          <Quote className="d-none d-md-block col-12 col-md-8">
            Stand alone. Carry others.
          </Quote>
          <div
            className="d-flex flex-column col-12 col-md-4 my-subscribe"
            style={gap1halfem}
          >
            <a
              className="my-text-primary text-uppercase"
              href="https://aletheia.substack.com"
              target="_blank"
            >
              SUBSCRIBE TO MY NEWSLETTER&nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <div className="d-flex flex-wrap my-nav-items my-text">
              <a href="/">Home</a>
              {/* <a href="/about">About</a> */}
              <a href="/portfolio">Portfolio</a>
              {/* <a>Blog</a> */}
              {/* <a>Contact</a> */}
              {/* <a>Team</a> */}
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-md-row-reverse col-12 justify-content-between"
          style={gap1halfem}
        >
          <span>All rights reserved &copy; Prabjyot Sudan</span>
          <div className="d-flex flex-column flex-md-row" style={gap1halfem}>
            <div className="d-flex my-socials">
              <a href="https://twitter.com/Prabjyotsudan" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                />
              </a>
            </div>
            <a href="mailto:sudanprabjyot@gmail.com">sudanprabjyot@gmail.com</a>
          </div>
        </div>
      </Container>
    </FooterContainer>
  );
};
