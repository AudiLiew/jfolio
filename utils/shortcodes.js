module.exports = {
    extlink: (name, url) => {
        // Shortcode for External links
        return '<a href="' + url + '" target="_blank" rel="noopener">' + name + '</a>';
    },
    showfullyear: (emptyVariableForThisToWork) => {
        // Get year for copyright
        let nowNow = new Date();
        let nowFullYear = nowNow.getFullYear();
        return nowFullYear + emptyVariableForThisToWork;
    }
}