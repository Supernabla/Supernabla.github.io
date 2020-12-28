import React from "react";
import { Col } from "react-bootstrap";
import clsx from "clsx";

import "./SectionHeader.scss";

type Props = {
  className?: string;
  header: string;
  subheader?: string;
};

const SectionHeader = ({ className, header, subheader }: Props) => {
  return (
    <Col lg={12} className={clsx(className, "section-header", "text-center")}>
      <h2 className="section-heading text-uppercase">{header}</h2>
      {subheader && <h3 className="section-subheading text-muted">{subheader}</h3>}
    </Col>
  );
};

SectionHeader.defaultProps = {
  className: undefined,
  subheader: undefined,
};

export default SectionHeader;
