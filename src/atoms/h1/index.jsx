import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #111111;
`;

const H1 = (props) => {
  return <StyledH1>{props.children}</StyledH1>;
};

export default H1;
