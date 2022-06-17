const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const filters = require('./utils/filters');
const collections = require('./utils/collections');
const tranforms = require('./utils/transforms');
const shortcodes = require('./utils/shortcodes');
const nunjucks_shortcodes = require('./utils/nunjucks_shortcodes');

module.exports = eleventyConfig => {
  
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

  /* *********************************************************
   * TRANFORMS
   * *********************************************************
   */
  Object.keys(tranforms).forEach((key) => {
    eleventyConfig.addTransform(key, tranforms[key]);
  });

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