import React, { useState } from "react";
import styled, { css } from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

import profile from "../../images/profile_01.jpg";

const gap1em = {
  gap: "1em",
};

const StrokeSpan = styled.div`
  width: 30px;
  height: 1px;
  background-color: black;
  transition: 0.5s ease;

  &:nth-child(1) {
    margin-bottom: 0.2em;
    ${(props) =>
      props.open &&
      css`
        margin-bottom: 0;
        transform: rotate(45deg);
      `}
  }

  &:nth-child(2) {
    ${(props) =>
      props.open &&
      css`
        transform: rotate(-45deg);
      `}
  }
`;

const MobileMenu = styled.div`
  top: -500%;
  left: 0;
  right: 0;
  width: 100%;
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.open &&
    css`
      top: 66px;
    `}

  &>div.nav {
    & > div.nav-item {
      width: 100%;
      text-align: right;
    }
  }
`;

const MyNav = styled(Nav)`
  background-color: white;

  & > div.nav-item {
    & > a {
      text-decoration: none;
      color: #666;

      &.active {
        border-bottom: 1px solid var(--primary);
        color: var(--primary);
        padding-bottom: 10px;
      }
    }
  }
`;

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="d-flex flex-row justify-content-between align-items-center pt-3 position-relative">
      <div className="d-flex flex-row align-items-center" style={gap1em}>
        <img
          className="rounded-circle"
          width="50px"
          height="50px"
          src={profile}
          alt="profile"
        />
        <div>
          <h5 className="m-0">Prabjyot Sudan</h5>
          <span>Founder</span>
        </div>
      </div>
      <div
        className="d-flex align-items-center d-md-none"
        style={gap1em}
        onClick={openMenu}
      >
        <div>
          <StrokeSpan open={isOpen} />
          <StrokeSpan open={isOpen} />
        </div>
        <span>Menu</span>
      </div>
      <MobileMenu className="position-absolute" open={isOpen}>
        <MyNav
          className="d-flex d-md-none flex-column align-items-end"
          activeKey="/"
        >
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blog</NavLink>
          </NavItem>
        </MyNav>
      </MobileMenu>
      <MyNav
        className="align-items-center justify-content-end d-none d-md-flex"
        activeKey="/"
      >
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Blog</NavLink>
        </NavItem>
      </MyNav>
    </Container>
  );
};
