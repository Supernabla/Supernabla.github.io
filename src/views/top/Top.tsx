import React from "react";
import { Button } from "react-bootstrap";

import ImageCard from "components/ImageCard";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

type Props = {
  frontmatter: {
    header: string;
    subheader: string;
    imageFileName: string;
    jumpToAnchor: string;
    jumpToAnchorText: string;
  };
};

const Top = ({
  frontmatter: { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText },
}: Props) => {
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  const button =
    jumpToAnchor && jumpToAnchorText ? (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    ) : undefined;

  return (
    <ImageCard
      header={header}
      subheader={subheader}
      imageFileName={imageFileName}
      extraInfo={button}
    />
  );
};

export default Top;
