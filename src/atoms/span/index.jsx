import React from "react";
import styled from "styled-components";

const SpanComp = styled.span``;

const Span = (props) => {
  return <SpanComp {...props}>{props.children}</SpanComp>;
};

Span.propTypes = {};

export default Span;
