import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import * as SocialIcons from "components/SocialIcons";

import "./Footer.scss";

type Props = {
  frontmatter: {
    copyright: string;
    gatsbyText: string;
    gatsbyLinkText: string;
    gatsbyLinkHref: string;
    social: { facebook: string; github: string; linkedin: string; medium: string; twitter: string };
    themeText: string;
    themeLinkText: string;
    themeLinkHref: string;
    unsplashText: string;
    unsplashLinkText: string;
    unsplashLinkHref: string;
  };
};

const Footer = ({
  frontmatter: {
    copyright,
    gatsbyText,
    gatsbyLinkText,
    gatsbyLinkHref,
    social: { facebook, github, linkedin, medium, twitter },
    themeText,
    themeLinkText,
    themeLinkHref,
    unsplashText,
    unsplashLinkText,
    unsplashLinkHref,
  },
}: Props) => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={4} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={4} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right flex-column">
            {gatsbyText}
            <a className="mr-3" href={gatsbyLinkHref}>
              {gatsbyLinkText}
            </a>
            <br />
            {themeText}
            <a className="mr-3" href={themeLinkHref}>
              {themeLinkText}
            </a>
            <br />
            {unsplashText}
            <a className="mr-3" href={unsplashLinkHref}>
              {unsplashLinkText}
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
