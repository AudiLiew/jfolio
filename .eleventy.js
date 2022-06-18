const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const filters = require('./utils/filters');
const collections = require('./utils/collections');
const tranforms = require('./utils/transforms');
const shortcodes = require('./utils/shortcodes');
const nunjucks_shortcodes = require('./utils/nunjucks_shortcodes');

module.exports = (eleventyConfig) => {
  
  const COMMONS = {
    sourceFolder: '__src',
    layoutsFolder: 'layouts',
    outputFolder: 'docs',
    includesFolder: '_includes',
    dataFolder: '_data'
  }

  /* *********************************************************
   * MARKDOWN SETUP
   * *********************************************************
   */
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  
  const markdownLib = markdownIt(markdownOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);


  /* *********************************************************
   * OVERRIDE BROWSERSYNC OPTIONS
   * *********************************************************
   */
  // For 11ty v1
  eleventyConfig.setBrowserSyncConfig({
    "online": false,
    "open": false,
    "port": 1099,
  });


  /* *********************************************************
   * LAYOUT ALIAS
   * *********************************************************
   */
  eleventyConfig.addLayoutAlias('default', COMMONS.layoutsFolder + '/default.njk')
  eleventyConfig.addLayoutAlias('work', COMMONS.layoutsFolder + '/work.njk')


  /* *********************************************************
   * COPY ONLY
   * *********************************************************
   */
  eleventyConfig.addPassthroughCopy(COMMONS.sourceFolder + '/robots.txt');
  eleventyConfig.addPassthroughCopy(COMMONS.sourceFolder + '/.nojekyll');
  eleventyConfig.addPassthroughCopy(COMMONS.sourceFolder + '/CNAME');
  eleventyConfig.addPassthroughCopy(COMMONS.sourceFolder + '/assets/img');
  eleventyConfig.addPassthroughCopy(COMMONS.sourceFolder + '/assets/vid');

  
  /* *********************************************************
   * PLUGINS
   * *********************************************************
   */
  eleventyConfig.addPlugin(eleventyNavigationPlugin);


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


  /* ********************************************************* */
  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: COMMONS.sourceFolder,
      output: COMMONS.outputFolder,
      includes: COMMONS.includesFolder,
      data: COMMONS.dataFolder
    }
  }

}