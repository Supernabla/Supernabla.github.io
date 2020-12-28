import * as React from "react";
import { PageProps, graphql } from "gatsby";

import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";

import Navbar from "views/navbar/Navbar";
import About from "views/sections/About";
import Projects, { ProjectItemProps } from "views/sections/Projects";
import Top from "views/top/Top";
import Footer from "views/footer/Footer";

import "utils/fixFontAwesome";

type IndexQueryProps = {
  navbar: React.ComponentProps<typeof Navbar>;
  top: React.ComponentProps<typeof Top>;
  about: React.ComponentProps<typeof About>;
  projects: React.ComponentProps<typeof Projects>;
  projectItems: {
    nodes: Array<ProjectItemProps>;
  };
  footer: React.ComponentProps<typeof Footer>;
};

type LocaleLookupInfo = {
  defaultLang: string;
  helmetText: string;
  langKey: string;
  langTextMap: Record<string, string>;
};

type IndexPageProps = PageProps<IndexQueryProps, LocaleLookupInfo>;

const IndexPage = ({
  data: { navbar, top, about, projects, projectItems, footer },
  pageContext: { defaultLang, helmetText, langKey, langTextMap },
}: IndexPageProps) => {
  const anchors = [about.frontmatter.anchor, projects.frontmatter.anchor];
  const langSelector = (
    <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
  );

  return (
    <>
      <SEO lang={langKey} title={helmetText} />
      <Navbar anchors={anchors} frontmatter={navbar.frontmatter} extraItems={langSelector} />
      <Top frontmatter={top.frontmatter} />
      <About frontmatter={about.frontmatter} html={about.html} />
      <Projects
        className="bg-light"
        frontmatter={projects.frontmatter}
        nodes={projectItems.nodes}
      />
      <Footer frontmatter={footer.frontmatter} />
    </>
  );
};

export default IndexPage;

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    navbar: markdownRemark(
      fields: { langKey: { eq: $langKey }, fileName: { regex: "/Navbar/" } }
      fileAbsolutePath: { regex: "/content/" }
    ) {
      frontmatter {
        brand
        menuText
      }
    }

    top: markdownRemark(
      fields: { langKey: { eq: $langKey }, fileName: { regex: "/Top/" } }
      fileAbsolutePath: { regex: "/content/" }
    ) {
      frontmatter {
        header
        subheader
        imageFileName
        jumpToAnchor
        jumpToAnchorText
      }
    }

    about: markdownRemark(
      fields: { langKey: { eq: $langKey }, fileName: { regex: "/About/" } }
      fileAbsolutePath: { regex: "/content/sections/" }
    ) {
      frontmatter {
        anchor
        header
        subheader
        profileImage {
          imageFileName
          imageCaption
          imageSubCaption
          social {
            github
            linkedin
          }
        }
      }
      html
    }

    projects: markdownRemark(
      fields: { langKey: { eq: $langKey }, fileName: { regex: "/Projects/" } }
      fileAbsolutePath: { regex: "/content/sections/" }
    ) {
      frontmatter {
        anchor
        header
        subheader
      }
    }

    projectItems: allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey }, directoryName: { regex: "/projectItems/" } } }
    ) {
      nodes {
        frontmatter {
          imageFileName
          imageFileNameDetail
          header
          subheader
          visitLinkText
          visitLinkHref
        }
        html
      }
    }

    footer: markdownRemark(
      fields: { langKey: { eq: $langKey }, fileName: { regex: "/Footer/" } }
      fileAbsolutePath: { regex: "/content/" }
    ) {
      frontmatter {
        copyright
        social {
          github
          linkedin
        }
        gatsbyText
        gatsbyLinkText
        gatsbyLinkHref
        themeText
        themeLinkText
        themeLinkHref
        unsplashText
        unsplashLinkText
        unsplashLinkHref
      }
    }
  }
`;
