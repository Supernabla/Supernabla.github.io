import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import clsx from "clsx";

import Icon from "components/Icon";
import NavItem from "components/NavItem";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

import "./Navbar.scss";

type Props = {
  anchors: Array<string>;
  extraItems: React.ReactNode;
  frontmatter: {
    brand: string;
    menuText: string;
  };
};

const MyNavbar = ({ anchors, frontmatter: { brand, menuText }, extraItems }: Props) => {
  // state
  const [expanded, setExpanded] = React.useState(false);
  const [shrink, setShrink] = React.useState(false);

  // menu callbacks
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);

  // click on brand callback
  const handleScrollToTop = useSmoothScrollTo(0);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  // shrink navbar when scrolling down
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
