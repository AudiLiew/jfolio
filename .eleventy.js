const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const filters = require('./utils/filters');
const collections = require('./utils/collections');
const shortcodes = require('./utils/shortcodes');
const nunjucks_shortcodes = require('./utils/nunjucks_shortcodes');

module.exports = eleventyConfig => {
  const htmlmin = require("html-minifier");
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require('markdown-it-attrs');
  const options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  
  const now = new Date();
  const livePosts = p => p.date <= now && (p.data.permalink !== false);
  
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // Override Default BrowserSync options
  // For 11ty v1
  eleventyConfig.setBrowserSyncConfig({
    "online": false,
    "open": false,
    "port": 1099,
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
  eleventyConfig.addLayoutAlias('work', 'layouts/work.njk')

  /* *********************************************************
   * CUSTOM COLLECTIONS
   * *********************************************************
   */
  Object.keys(collections).forEach((key) => {
    eleventyConfig.addCollection(key, collections[key]);
  })

  /* *********************************************************
   * FILTERS
   * *********************************************************
   */
  Object.keys(filters).forEach((key) => {
    eleventyConfig.addFilter(key, filters[key]);
  });


  /* *********************************************************
   * COPY ONLY
   * *********************************************************
   */
  eleventyConfig.addPassthroughCopy('__src/robots.txt');
  eleventyConfig.addPassthroughCopy('__src/.nojekyll');
  eleventyConfig.addPassthroughCopy('__src/CNAME');
  eleventyConfig.addPassthroughCopy('__src/assets/img');
  eleventyConfig.addPassthroughCopy('__src/assets/vid');

  
  /* *********************************************************
   * SHORTCODES
   * *********************************************************
   */
  Object.keys(shortcodes).forEach((key) => {
    eleventyConfig.addShortcode(key, shortcodes[key]);
  });

  Object.keys(nunjucks_shortcodes).forEach((key) => {
    eleventyConfig.addNunjucksShortcode(key, nunjucks_shortcodes[key]);
  });

  // Minify HTML
  //*
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") && process.env.NODE_ENV === 'production') {
      let minified = htmlmin.minify(content, {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      });
      return minified;
    }

    return content;
  });
  // */

  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: '__src',
      output: 'docs',
      includes: '_includes',
      data: '_data'
    }
  }

}