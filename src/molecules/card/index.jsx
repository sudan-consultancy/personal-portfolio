import React from "react";
import pt from "prop-types";
import styled, { css } from "styled-components";
import H6 from "../../atoms/h6";
import H5 from "../../atoms/h5";
import Span from "../../atoms/span";

const Container = styled.div`
  justify-content: end;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  color: white;
  border-radius: 5px;
  min-height: 200px;
  transition: 1s ease;
  cursor: pointer;
  ${(props) =>
    props.long &&
    css`
      grid-row: span 2;
    `}
  ${(props) =>
    props.isStart &&
    css`
      justify-content: start;
    `}
  ${(props) =>
    props.dark &&
    css`
      color: #111111;
    `}

  @media screen and (min-width: 768px) {
    background-position: bottom right;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const SubheadingH6 = styled(H6)`
  font-size: 0.8rem;
`;

const DescriptionSpan = styled(Span)`
  font-size: 0.7rem;
  ${(props) =>
    props.dark &&
    css`
      color: #666666;
    `}
`;

const Card = (props) => {
  return (
    <Container
      className="d-flex flex-column mt-3 mb-3 m-md-0 p-3 p-md-4"
      {...props}
    >
      <SubheadingH6 className="text-uppercase">{props.subheading}</SubheadingH6>
      <H5 className="text-capitalize">{props.heading}</H5>
      <DescriptionSpan className="w-75" {...props}>
        {props.description}
      </DescriptionSpan>
    </Container>
  );
};

Card.propTypes = {
  heading: pt.string.isRequired,
  subheading: pt.string.isRequired,
  description: pt.string.isRequired,
  backgroundImage: pt.string.isRequired,
  isStart: pt.bool,
  dark: pt.bool,
  long: pt.bool,
};

export default Card;
