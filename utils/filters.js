module.exports = {
    dateDisplay: (date, part) => {
        // Add a readable date formatter filter to Nunjucks
        const d = new Date(date);
        if (part == 'year') {
            return d.getUTCFullYear();
        }
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const ordinal = {
            1: "st",
            2: "nd",
            3: "rd",
            21: "st",
            22: "nd",
            23: "rd",
            31: "st"
        };
        return d.getDate() + (ordinal[d.getDate()] || "th") + " " + month[d.getMonth()] + ", " + d.getUTCFullYear();
    },
    htmlDateDisplay: (date) => {
        // Add a HTML timestamp formatter filter to Nunjucks
        // For sitemap
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    }
}