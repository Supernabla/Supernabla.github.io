import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import Image from "components/Image";

import "./PortfolioDetailDialog.scss";

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  visitLinkText,
  visitLinkHref,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="portfoliodetaildialog-title" id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <p className="portfoliodetaildialog-subtitle item-intro text-muted">{subheader}</p>
        <Image
          className="mb-3 img-fluid d-block border"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        <p className="text-muted">{content}</p>
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

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  visitLinkText: PropTypes.string,
  visitLinkHref: PropTypes.string,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  visitLinkText: "",
  visitLinkHref: "",
};

export default PortfolioDetailDialog;
