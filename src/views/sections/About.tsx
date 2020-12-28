import React from "react";
import { Row, Col } from "react-bootstrap";

import PageSection from "components/PageSection";
import ProfileImage from "components/ProfileImage";
import SectionHeader from "components/SectionHeader";

type Props = {
  className?: string;
  frontmatter: {
    anchor: string;
    header: string;
    subheader?: string;
    profileImage: React.ComponentProps<typeof ProfileImage>;
  };
  html: string;
};

const About = ({
  className,
  frontmatter: { anchor, header, subheader, profileImage },
  html,
}: Props) => {
  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row>
        <Col md={4}>
          <ProfileImage {...profileImage} />
        </Col>
        <Col className="mx-auto text-muted" dangerouslySetInnerHTML={{ __html: html }} />
      </Row>
    </PageSection>
  );
};

About.defaultProps = {
  className: undefined,
};

export default About;
