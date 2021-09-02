module.exports = {
  siteMetadata: {
    title: "React Beginner Course",
    subtitle: "",
    author: "",
    authorSubtitle: "",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitter: "", // make empty string to omit socials
    linkedin: "",
    github: "",
    description:
      "This is the description that will show up when people share as well as on search engines",
    keywords: [
      "this is",
      "a list of keywords and phrase",
      "that search engines",
      "will index your page for",
    ],
  },
  pathPrefix: "",
  // pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
