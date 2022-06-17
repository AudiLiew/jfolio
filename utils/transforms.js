const htmlmin = require("html-minifier");

module.exports = {
    htmlmin: (content, outputPath) => {
        // Minify HTML
        if (outputPath.endsWith(".html") && process.env.NODE_ENV === 'production') {
            const minified = htmlmin.minify(content, {
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
    }

}