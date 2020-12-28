import React from "react";
import { Container, Card } from "react-bootstrap";
import clsx from "clsx";

import Image from "components/Image";

import "./ImageCard.scss";

type Props = {
  className?: string;
  imageFileName: string;
  imageAlt?: string;
  header: string;
  subheader?: string;
  extraInfo?: React.ReactNode;
};

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }: Props) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.defaultProps = {
  className: undefined,
  imageAlt: undefined,
  subheader: undefined,
  extraInfo: undefined,
};

export default ImageCard;
