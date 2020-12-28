import React from "react";
import { Row, Col } from "react-bootstrap";

import ExpertiseItem from "components/ExpertiseItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

export type ExpertiseItemProps = React.ComponentProps<typeof ExpertiseItem>;

type Props = {
  className?: string;
  frontmatter: {
    anchor: string;
    header: string;
    subheader?: string;
  };
  nodes: Array<ExpertiseItemProps>;
};

const Expertise = ({ className, frontmatter: { anchor, header, subheader }, nodes }: Props) => {
  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row className="text-center">
        {nodes.map(({ frontmatter, html }) => (
          <Col md={4} key={frontmatter.header}>
            <ExpertiseItem frontmatter={frontmatter} html={html} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Expertise.defaultProps = {
  className: undefined,
};

export default Expertise;
