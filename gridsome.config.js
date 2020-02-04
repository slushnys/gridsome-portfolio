// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  icon: "./static/favic on.png",
  siteName: "slusnys.com - freelance software developer",
  siteDescription:
    "Experienced web developer focused on building business applications using vue.js, python and node.js",
  siteUrl: "https://slusnys.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldPurge: false
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/projects/**/*.md",
        route: "/projects/:title",
        typeName: "Project"
      }
    }
    // TODO: implement filesystem for project posts
    // TODO: implement filesystem for blog posts
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "blog/**/*.md",
    //     route: "/blog/:year/:month/:day/:slug",
    //     typeName: "Post"
    //   }
    // }
  ],
  templates: {
    Project: [
      {
        path: "/projects/:title",
        component: "./src/templates/Project.vue"
      }
    ]
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  }
};
