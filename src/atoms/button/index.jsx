import React from "react";
import styled, { css } from "styled-components";

const ButtonComp = styled.button`
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 0px;

  ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary);
      color: white;
    `}
`;

const Button = (props) => {
  return <ButtonComp {...props}>{props.children}</ButtonComp>;
};

export default Button;
