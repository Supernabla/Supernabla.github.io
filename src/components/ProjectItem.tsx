import React from "react";
import { Col } from "react-bootstrap";

import Icon from "components/Icon";
import Image from "components/Image";
import ProjectItemDetailDialog from "components/ProjectItemDetailDialog";

import "./ProjectItem.scss";

type Props = {
  frontmatter: {
    imageFileName: string;
    imageAlt?: string;
    header: string;
    subheader?: string;
    content?: string;
    imageFileNameDetail?: string;
    imageAltDetail?: string;
    visitLinkText: string;
    visitLinkHref: string;
  };
  html: string;
};

const ProjectItem = ({
  frontmatter: {
    imageFileName,
    imageAlt,
    header,
    subheader,
    imageFileNameDetail,
    imageAltDetail,
    visitLinkText,
    visitLinkHref,
  },
  html,
}: Props) => {
  // state
  const [showDetail, setShowDetail] = React.useState(false);

  // callbacks
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="project-item">
        <div
          className="project-link"
          data-toggle="modal"
          onClick={handleShowDetail}
          role="button"
          tabIndex={-1}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="project-hover">
            <div className="project-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div>
        </div>
        <div className="project-caption">
          <h4>{header}</h4>
          {subheader && <p className="text-muted">{subheader}</p>}
        </div>
      </Col>
      <ProjectItemDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        html={html}
        visitLinkText={visitLinkText}
        visitLinkHref={visitLinkHref}
      />
    </>
  );
};

export default ProjectItem;
