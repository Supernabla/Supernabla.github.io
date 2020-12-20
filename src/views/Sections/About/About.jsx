import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./About.scss";

const About = ({ className, frontmatter, html }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {teamMember.map(({ header, ...tmProps }) => (
          <Col md={4} key={header}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
        <Col className="mx-auto text-muted" dangerouslySetInnerHTML={{ __html: html }} />
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  html: PropTypes.string,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
  html: null,
};

export default About;
