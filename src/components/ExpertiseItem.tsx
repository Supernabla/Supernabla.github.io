import React from "react";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";

import "./ExpertiseItem.scss";

type Props = {
  frontmatter: {
    iconName?: string;
    imageFileName?: string;
    header: string;
  };
  html: string;
};

const ServiceItem = ({ frontmatter: { iconName, imageFileName, header }, html }: Props) => {
  return (
    <>
      {iconName && <CircleFAButton iconName={iconName} />}
      {imageFileName && (
        <Image className="expertise-item-image" alt={header} fileName={imageFileName} />
      )}
      <h4 className="expertise-item-heading">{header}</h4>
      {/* eslint-disable-next-line react/no-danger */}
      <p className="text-muted" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default ServiceItem;
