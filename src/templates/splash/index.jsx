import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import H6 from "../../atoms/h6";
import H1 from "../../atoms/h1";

const Splash = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => (props.background_center ? "center" : "right")}
    bottom;
  background-size: cover;
  min-height: ${(props) => (props.long ? "80vh" : "60vh")};
`;

const DescriptionPara = styled.p`
  color: #666666;
  width: ${(props) => (props.text_thin ? "50%" : "100%")};
  font-size: 18px;

  @media screen and (min-width: 768px) {
    width: 75%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const SplashComponent = (props) => {
  return (
    <Splash
      className={`d-flex flex-column justify-content-start ${
        !props.long && "justify-content-md-center"
      } ${props.text_center && "mt-5"} pt-5`}
      {...props}
    >
      <Container fluid="md">
        {props.heading && <H6 primary>-&nbsp;{props.heading}</H6>}
        <H1>{props.title}</H1>
        <DescriptionPara {...props}>{props.description}</DescriptionPara>
      </Container>
    </Splash>
  );
};
