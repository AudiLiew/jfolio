const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {
  // const htmlmin = require("html-minifier");
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
  
  // https://remysharp.com/2019/06/26/scheduled-and-draft-11ty-posts
  eleventyConfig.addCollection('works', collection => {
    return collection.getFilteredByGlob('./__src/views/works/**/*.md')
    .filter(livePosts).reverse();
  });
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
  eleventyConfig.addLayoutAlias('work', 'layouts/work.njk')

  /* *********************************************************
   * FILTERS
   * *********************************************************
   */
  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./__src/filters/dates.js"))

  // Add a HTML timestamp formatter filter to Nunjucks
  // For sitemap
  eleventyConfig.addFilter("htmlDateDisplay", require("./__src/filters/timestamp.js"))

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
   
    let marginBottomClass = (vid.marginBottom == undefined) ? "" : " noMarginBottom";
    let borderClass = (vid.border == undefined) ? "" : (vid.border) ? "border" : "";
    let newFigure;
    let lengthClass;

    switch(vid.size) {
      case "short":
        lengthClass = "isShort";
        break;
      case "medium":
        lengthClass = "isMedium";
        break;
      default:
        lengthClass = "";
    }

    newFigure = '<figure class="'+ lengthClass + marginBottomClass +'">';  // default haz margin bottom

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
   
    let marginBottomClass = (img.marginBottom == undefined) ? "" : " noMarginBottom";
    let borderClass = (img.border == undefined) ? "" : (img.border) ? "border" : "";
    let newFigure;
    let lengthClass;

    switch(img.size) {
      case "short":
        lengthClass = "isShort";
        break;
      case "medium":
        lengthClass = "isMedium";
        break;
      default:
        lengthClass = "";
    }

    newFigure = '<figure class="'+ lengthClass + marginBottomClass +'">';  // default haz margin bottom

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
                  border = true
      %}
    */
    const masonName = "mason";
    const masonItemName = masonName + "__item";
    let marginClass = "";
    let borderClass = (imgmason.border == undefined) ? "" : (imgmason.border) ? " border" : "";
    let newFigure;

    if (imgmason.marginTop != undefined && !imgmason.marginTop) {
      marginClass += " noMarginTop"
    }

    if (imgmason.marginBottom != undefined && !imgmason.marginBottom) {
      marginClass += " noMarginBottom"
    }

    newFigure = '<figure class="'+ masonName + marginClass +'">';  // default haz margin bottom

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