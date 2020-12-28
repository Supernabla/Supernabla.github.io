import React from "react";
import { Modal, Button } from "react-bootstrap";

import Image from "components/Image";

import "./ProjectItemDetailDialog.scss";

type Props = {
  show: boolean;
  onHide: () => void;
  imageFileName: string;
  imageAlt?: string;
  header: string;
  subheader?: string;
  html: string;
  visitLinkText: string;
  visitLinkHref: string;
};

const ProjectItemDetailDialog = ({
  show,
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  html,
  visitLinkText,
  visitLinkHref,
}: Props) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="projectitemdetaildialog-title" id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <p className="projectitemdetaildialog-subtitle item-intro text-muted">{subheader}</p>
        <Image
          className="mb-3 img-fluid d-block border"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        {/* eslint-disable-next-line react/no-danger */}
        <p className="text-muted" dangerouslySetInnerHTML={{ __html: html }} />
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" href={visitLinkHref}>
            {visitLinkText}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

ProjectItemDetailDialog.defaultProps = {
  imageAlt: undefined,
  subheader: undefined,
};

export default ProjectItemDetailDialog;
