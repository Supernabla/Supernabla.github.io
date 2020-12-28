import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import "./NavItem.scss";

type Props = {
  to: string;
  onClick?: () => void;
};

const NavItem = ({ to, onClick, children }: React.PropsWithChildren<Props>) => {
  return (
    <Nav.Item>
      <Link
        className="nav-link cursor-pointer"
        activeClass="active"
        to={to}
        spy
        smooth="easeInOutQuart"
        onClick={onClick}
      >
        {children || to}
      </Link>
    </Nav.Item>
  );
};

export default NavItem;
