import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #111111;
  font-family: Recoleta;
`;

const H1 = (props) => {
  return <StyledH1 {...props}>{props.children}</StyledH1>;
};

export default H1;
