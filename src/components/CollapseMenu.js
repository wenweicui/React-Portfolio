import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSpring, animated } from 'react-spring';
import pdf from '../resume.pdf'

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><AnchorLink href="#home" onClick={props.handleNavbar}>Home</AnchorLink></li>
          <li><AnchorLink href="#project" onClick={props.handleNavbar}>Projects</AnchorLink></li>
          <li><AnchorLink offset='-50' href="#about" onClick={props.handleNavbar}>About</AnchorLink></li>
          <li><a href={pdf} onClick={props.handleNavbar}>Resume</a></li>
          <li><AnchorLink offset='-50' href="#contact" onClick={props.handleNavbar}>Contact</AnchorLink></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  z-index: 1000;
  background: #2d3436;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;

`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
