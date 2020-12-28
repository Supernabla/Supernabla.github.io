import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  lang?: string;
  title: string;
  description?: string;
  keywords?: Array<string>;
};

type Data = {
  site: {
    siteMetadata: {
      author: string;
      title: string;
      description: string;
      keywords: Array<string>;
    };
  };
};

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const SEO = ({ lang, title, description, keywords }: Props) => {
  const { site }: Data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
            keywords
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        keywords && keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : [],
      )}
    />
  );
};

SEO.defaultProps = {
  lang: undefined,
  keywords: undefined,
  description: undefined,
};

export default SEO;
