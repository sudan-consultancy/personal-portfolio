import React from "react";
import styled, { css } from "styled-components";

const H6Comp = styled.h6`
  font-family: "Gilroy-Medium", sans-serif;
  ${(props) =>
    props.primary &&
    css`
      color: var(--primary);
    `}
`;

const H6 = (props) => {
  return <H6Comp {...props}>{props.children}</H6Comp>;
};

H6.propTypes = {};

export default H6;
