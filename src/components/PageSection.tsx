import React from "react";
import { Container } from "react-bootstrap";
import clsx from "clsx";

import "./PageSection.scss";

type Props = {
  className?: string;
  id?: string;
};

const PageSection = ({ className, id, children }: React.PropsWithChildren<Props>) => {
  return (
    <section className={clsx("page-section", className)} id={id}>
      <Container>{children}</Container>
    </section>
  );
};

export default PageSection;
