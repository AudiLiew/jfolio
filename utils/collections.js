module.exports = {
    works: (collection) => {
        const now = new Date();
        const livePosts = p => p.date <= now && (p.data.permalink !== false);

        // https://remysharp.com/2019/06/26/scheduled-and-draft-11ty-posts
        return collection.getFilteredByGlob('./__src/works/**/*.md')
            .filter(livePosts).reverse();
    },
    worksAlphabetSorted: collection => {
        // https://github.com/11ty/eleventy/issues/898
        return collection.getFilteredByGlob('./__src/works/**/*.md').sort((a, b) => {
            const titleA = a.data.title.toUpperCase();
            const titleB = b.data.title.toUpperCase();
            if (titleA > titleB) return 1
            if (titleA < titleB) return -1
            return 0
        })
    }
}