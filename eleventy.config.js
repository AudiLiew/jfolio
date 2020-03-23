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

  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./__src/filters/dates.js"))

  // Add a HTML timestamp formatter filter to Nunjucks
  // For sitemap
  eleventyConfig.addFilter("htmlDateDisplay", require("./__src/filters/timestamp.js"))

  // Collections
  //eleventyConfig.addCollection('blog', collection => {
  //  return collection.getFilteredByTag('blog').reverse()
  //})

  // Shortcode for External links
  eleventyConfig.addShortcode("extlink", (name, url) => {
    return '<a href="'+ url +'" target="_blank" rel="noopener">'+ name +'</a>';
  });

  // Shortcode for single image with captions
  eleventyConfig.addNunjucksShortcode("img", (img) => {

    let shortClass = (img.short == undefined) ? "" : (img.short) ? "isShort" : "";
    let marginBottomClass = (img.marginBottom == undefined) ? "" : " noMarginBottom";
    let newFigure;

    newFigure = '<figure class="'+ shortClass + marginBottomClass +'">';  // default haz margin bottom

    if (img.caption != "") {
      newFigure += '<figcaption>' + img.caption + '</figcaption><img src="' + img.src + '">';
    } else { // no caption
      newFigure += '<img src="' + img.src + '">';
    }

    newFigure += '</figure>';

    return newFigure;
  });
  
  // Shortcode for two/three column images with captions
  eleventyConfig.addNunjucksShortcode("imgstack", (imgstack) => {
    const stackName = "stack";
    const stackItemName = stackName + "__item";
    let marginClass = (imgstack.margin == undefined) ? "" : " noMarginTopBottom";
    let newFigure, columnClass = stackName + " " + stackName;

    switch (imgstack.columns) {
      case 3:
        columnClass += "--three";
        break;
      case 2:
      default:
        columnClass += "--two";
    }

    newFigure = '<figure class="'+ columnClass + marginClass +'">';  // default haz margin bottom

    if (imgstack.caption != undefined) {
      newFigure += '<figcaption>' + imgstack.caption + '</figcaption>';
    } 
    
    for (img of imgstack.src) {
      newFigure += '<img src="' + img + '" class="' + stackItemName + '">';
    }

    newFigure += '</figure>';

    return newFigure;
  });

  // Get year for copyright
  eleventyConfig.addShortcode("showfullyear", (emptyVariableForThisToWork) => {
    let nowNow = new Date();
    let nowFullYear = nowNow.getFullYear();
    return nowFullYear + emptyVariableForThisToWork;
  });  

  // https://remysharp.com/2019/06/26/scheduled-and-draft-11ty-posts
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./__src/views/posts/**/*.md')
      .filter(livePosts).reverse();
  });
  // Minify HTML
  /*
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  // */

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: '__src/views',
      output: 'docs',
      includes: '_includes',
      data: '_data'
    }
  }

}