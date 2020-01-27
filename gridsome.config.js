// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: "./static/favicon.png",
  siteName: "slusnys.com - freelance web developer",
  siteDescription:
    "Experienced web developer focused on building business applications using vue.js and python.",
  siteUrl: "slusnys.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: `gridsome-plugin-netlify-cms`
    }
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "blog/**/*.md",
    //     route: "/blog/:year/:month/:day/:slug",
    //     typeName: "Post"
    //   }
    // }
  ]
};
