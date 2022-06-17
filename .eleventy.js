const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const filters = require('./utils/filters');
const collections = require('./utils/collections');

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
  
  // Shortcode for External links
  eleventyConfig.addShortcode("extlink", (name, url) => {
    return '<a href="'+ url +'" target="_blank" rel="noopener">'+ name +'</a>';
  });

  // Shortcode for single video with captions
  eleventyConfig.addNunjucksShortcode("vid", (vid) => {
    /*
      Usage:
      {% vid src=site.path.vid + code + "/hero.jpg", caption="hey<br>two two two", size=short, medium %}
      {% vid src=site.path.vid + code + "/hero.jpg", caption="hey<br>two two two", marginBottom=false %}
      {% vid src=site.path.vid + code + "/pmo-1.jpg", caption="Line drawing of the Istana - Used on stationery and PMO’s prepaid stamp", border=true %}
    */
   
    let stackItemClass = (vid.stackItem == undefined) ? "" : " stack__item";
    let marginTopClass = (vid.marginTop == undefined) ? "" : " noMarginTop";
    let marginBottomClass = (vid.marginBottom == undefined) ? "" : " noMarginBottom";
    let borderClass = (vid.border == undefined) ? "" : (vid.border) ? "border" : "";
    let newFigure;
    let lengthClass;

    switch(vid.size) {
      case "short":
        lengthClass = " isShort";
        break;
      case "medium":
        lengthClass = " isMedium";
        break;
      default:
        lengthClass = "";
    }

    newFigure = '<figure class="'+ stackItemClass + lengthClass + marginBottomClass + marginTopClass +'">';  // default haz margin bottom

    if (vid.caption != "") {
      newFigure += '<figcaption>' + vid.caption + '</figcaption>';
    }

    newFigure += '<video controls width="100%" class="'+ borderClass+'"><source src="' + vid.src + '" type="video/mp4"></video></figure>';

    return newFigure;
  });

  // Shortcode for single image with captions
  eleventyConfig.addNunjucksShortcode("img", (img) => {
    /*
      Usage:
      {% img src=site.path.img + code + "/hero.jpg", caption="hey<br>two two two", size=short, medium %}
      {% img src=site.path.img + code + "/hero.jpg", caption="hey<br>two two two", marginBottom=false %}
      {% img src=site.path.img + code + "/pmo-1.jpg", caption="Line drawing of the Istana - Used on stationery and PMO’s prepaid stamp", border=true %}
    */
   
    let stackItemClass = (img.stackItem == undefined) ? "" : " stack__item";
    let marginTopClass = (img.marginTop == undefined) ? "" : " noMarginTop";
    let marginBottomClass = (img.marginBottom == undefined) ? "" : " noMarginBottom";
    let borderClass = (img.border == undefined) ? "" : (img.border) ? "border" : "";
    let newFigure;
    let lengthClass;

    switch(img.size) {
      case "short":
        lengthClass = " isShort";
        break;
      case "medium":
        lengthClass = " isMedium";
        break;
      default:
        lengthClass = "";
    }

    newFigure = '<figure class="'+ stackItemClass + lengthClass + marginBottomClass + marginTopClass +'">';  // default haz margin bottom

    if (img.caption != "") {
      newFigure += '<figcaption>' + img.caption + '</figcaption><img class="'+ borderClass+'" src="' + img.src + '">';
    } else { // no caption
      newFigure += '<img class="'+ borderClass+'" src="' + img.src + '">';
    }

    newFigure += '</figure>';

    return newFigure;
  });
  

  // Shortcode for mason images
  eleventyConfig.addNunjucksShortcode("imgmason", (imgmason) => {
    /*
      Usage:

      {% imgmason src = [
                    site.path.img + code + "/preview.jpg", 
                    site.path.img + code + "/preview.jpg", 
                    site.path.img + code + "/preview.jpg"
                  ],
                  caption = "elit exercitationem quo eos",
                  marginTop = true,
                  marginBottom = true,
                  bottomFix = true,
                  border = true
      %}
    */
    const masonName = "mason";
    const masonItemName = masonName + "__item";
    let marginClass = "";
    let borderClass = (imgmason.border == undefined) ? "" : (imgmason.border) ? " border" : "";
    let newFigure;
    let additionalClass = "";

    if (imgmason.marginTop != undefined && !imgmason.marginTop) {
      marginClass += " noMarginTop";
    }

    if (imgmason.marginBottom != undefined && !imgmason.marginBottom) {
      marginClass += " noMarginBottom";
    }

    if (imgmason.bottomFix != undefined && imgmason.bottomFix) {
      additionalClass += " " + masonName + "--bottomFix";
    }

    newFigure = '<figure class="'+ masonName + marginClass + additionalClass +'">';  // default haz margin bottom

    if (imgmason.caption != undefined) {
      newFigure += '<figcaption>' + imgmason.caption + '</figcaption>';
    } 
    
    for (img of imgmason.src) {
      newFigure += '<img src="' + img + '" class="' + masonItemName + borderClass + '">';
    }

    newFigure += '</figure>';

    return newFigure;
  });

  // Shortcode for two/three column images with captions
  eleventyConfig.addNunjucksShortcode("imgstack", (imgstack) => {
    /*
      Usage:
      {% imgstack src = [
              site.path.img + code + "/preview.jpg", 
              site.path.img + code + "/preview.jpg",
              site.path.img + code + "/preview.jpg",
              site.path.img + code + "/preview.jpg",
              site.path.img + code + "/preview.jpg",
              site.path.img + code + "/preview.jpg"
            ],
            caption = "elit exercitationem quo eos",
            columns = 2,
            marginTop = true,
            marginBottom = true,
            border = true 
      %}

      {% imgstack src = [
                    site.path.img + code + "/preview.jpg", 
                    site.path.img + code + "/preview.jpg", 
                    site.path.img + code + "/preview.jpg", 
                    site.path.img + code + "/preview.jpg"
                  ],
                  columns = 2
      %}
    */
    const stackName = "stack";
    const stackItemName = stackName + "__item";
    let marginClass = "";
    let borderClass = (imgstack.border == undefined) ? "" : (imgstack.border) ? " border" : "";
    let newFigure, columnClass = stackName + " " + stackName;

    switch (imgstack.columns) {
      case 4:
        columnClass += "--four";
        break;
      case 3:
        columnClass += "--three";
        break;
      case 2:
      default:
        columnClass += "--two";
    }

    if (imgstack.marginTop != undefined && !imgstack.marginTop) {
      marginClass += " noMarginTop"
    }

    if (imgstack.marginBottom != undefined && !imgstack.marginBottom) {
      marginClass += " noMarginBottom"
    }

    newFigure = '<figure class="'+ columnClass + marginClass +'">';  // default haz margin bottom

    if (imgstack.caption != undefined) {
      newFigure += '<figcaption>' + imgstack.caption + '</figcaption>';
    } 
    
    for (img of imgstack.src) {
      newFigure += '<img src="' + img + '" class="' + stackItemName + borderClass + '">';
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