import { defaultLang } from "./languages";

const author = "Supernabla";
const title = "Simon Kirchhof";
const description = "Learn more about me, my work and my projects.";
const keywords = [
  "gatsby",
  "gatsbyjs",
  "startbootstrap-agency",
  "react",
  "reactjs",
  "bootstrap",
  "react-bootstrap",
  "i18n",
  "simon",
  "kirchhof",
  "portfolio",
  "resume",
];

module.exports = {
  siteMetadata: {
    author,
    title,
    description,
    keywords,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#368dfe",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
        include_favicon: false,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "content/assets/images",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: ["src/style"],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file: "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Roboto Slab",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
          {
            name: "Open Sans",
            file: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
