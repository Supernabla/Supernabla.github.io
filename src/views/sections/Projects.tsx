import React from "react";
import { Row } from "react-bootstrap";
import clsx from "clsx";

import PageSection from "components/PageSection";
import ProjectItem from "components/ProjectItem";
import SectionHeader from "components/SectionHeader";

import "./Projects.scss";

export type ProjectItemProps = React.ComponentProps<typeof ProjectItem>;

type Props = {
  className?: string;
  frontmatter: {
    anchor: string;
    header: string;
    subheader?: string;
  };
  nodes: Array<ProjectItemProps>;
};

const Projects = ({ className, frontmatter: { anchor, header, subheader }, nodes }: Props) => {
  return (
    <PageSection className={clsx("projects-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row className="justify-content-center">
        {nodes.map(({ frontmatter, html }) => (
          <ProjectItem key={frontmatter.header} frontmatter={frontmatter} html={html} />
        ))}
      </Row>
    </PageSection>
  );
};

Projects.defaultProps = {
  className: undefined,
};

export default Projects;
