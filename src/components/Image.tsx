import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

type Props = {
  className?: string;
  fileName: string;
  alt?: string;
};

type Data = {
  images: {
    edges: Array<{
      node: {
        relativePath: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }>;
  };
};

const Image = ({ className, fileName, alt }: Props) => {
  const { images }: Data = useStaticQuery(graphql`
    query ImageQuery {
      images: allFile(filter: { extension: { regex: "/(png|jpg)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = images.edges.find(({ node }) => node.relativePath.includes(fileName));
  if (!image) {
    return null;
  }

  return <Img className={className} alt={alt} fluid={image.node.childImageSharp.fluid} />;
};

Image.defaultProps = {
  className: undefined,
  alt: undefined,
};

export default Image;
