import React from "react";
import clsx from "clsx";

import Image from "components/Image";

import "./TimelineItem.scss";

type Props = {
  invert: boolean;
  imageFileName?: string;
  imageAlt?: string;
  imageContent?: React.ReactNode;
  header: string;
  subheader?: string;
  content: string;
};

const TimelineItem = ({
  invert,
  imageFileName,
  imageAlt,
  imageContent,
  header,
  subheader,
  content,
}: Props) => {
  return (
    <li className={clsx("timeline-item", { "timeline-inverted": invert })}>
      <div className="timeline-image">
        {imageContent || (
          <Image
            className="rounded-circle img-fluid"
            fileName={imageFileName || ""}
            alt={imageAlt || header || subheader}
          />
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {header && <h4>{header}</h4>}
          {subheader && <h4 className="subheading">{subheader}</h4>}
        </div>
        <div className="timeline-body">
          <p className="text-muted">{content}</p>
        </div>
      </div>
    </li>
  );
};

TimelineItem.defaultProps = {
  imageFileName: undefined,
  imageAlt: undefined,
  imageContent: undefined,
  subheader: undefined,
};

export default TimelineItem;
