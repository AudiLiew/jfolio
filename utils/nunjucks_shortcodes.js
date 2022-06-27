module.exports = {
    vid: (vid) => {
        // Shortcode for single video with captions
        // Usage:
        // {% vid src=site.path.vid + code + "/hero.jpg", caption="hey<br>two two two", size=short, medium %}
        // {% vid src=site.path.vid + code + "/hero.jpg", caption="hey<br>two two two", marginBottom=false %}
        // {% vid src=site.path.vid + code + "/pmo-1.jpg", caption="Line drawing of the Istana - Used on stationery and PMO’s prepaid stamp", border=true %}

        let stackItemClass = (vid.stackItem == undefined) ? "" : " stack__item";
        let marginTopClass = (vid.marginTop == undefined) ? "" : " noMarginTop";
        let marginBottomClass = (vid.marginBottom == undefined) ? "" : " noMarginBottom";
        let borderClass = (vid.border == undefined) ? "" : (vid.border) ? "border" : "";
        let newFigure;
        let lengthClass;

        switch (vid.size) {
            case "short":
                lengthClass = " isShort";
                break;
            case "medium":
                lengthClass = " isMedium";
                break;
            default:
                lengthClass = "";
        }

        newFigure = '<figure class="' + stackItemClass + lengthClass + marginBottomClass + marginTopClass + '">';  // default haz margin bottom

        if (vid.caption != "") {
            newFigure += '<figcaption>' + vid.caption + '</figcaption>';
        }

        newFigure += '<video muted loop width="100%" class="' + borderClass + '"><source src="' + vid.src + '" type="video/mp4"></video></figure>';

        return newFigure;
    },
    vidstack: (vidstack) => {

        const stackName = "stack";
        const stackItemName = stackName + "__item";
        let marginClass = "";
        let borderClass = (vidstack.border == undefined) ? "" : (vidstack.border) ? " border" : "";
        let newFigure, columnClass = stackName + " " + stackName;

        switch (vidstack.columns) {
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

        if (vidstack.marginTop != undefined && !vidstack.marginTop) {
            marginClass += " noMarginTop"
        }

        if (vidstack.marginBottom != undefined && !vidstack.marginBottom) {
            marginClass += " noMarginBottom"
        }

        newFigure = '<figure class="' + columnClass + marginClass + '">';  // default haz margin bottom

        if (vidstack.caption != undefined) {
            newFigure += '<figcaption>' + vidstack.caption + '</figcaption>';
        }

        for (vid of vidstack.src) {
            newFigure += '<video muted loop width="100%" class="' + stackItemName + borderClass + '"><source src="' + vid + '" type="video/mp4"></video>';
        }

        newFigure += '</figure>';

        return newFigure;
    },
    img: (img) => {
        // Shortcode for single image with captions
        // Usage:
        // {% img src=site.path.img + code + "/hero.jpg", caption="hey<br>two two two", size=short, medium %}
        // {% img src=site.path.img + code + "/hero.jpg", caption="hey<br>two two two", marginBottom=false %}
        // {% img src=site.path.img + code + "/pmo-1.jpg", caption="Line drawing of the Istana - Used on stationery and PMO’s prepaid stamp", border=true %}

        let stackItemClass = (img.stackItem == undefined) ? "" : " stack__item";
        let marginTopClass = (img.marginTop == undefined) ? "" : " noMarginTop";
        let marginBottomClass = (img.marginBottom == undefined) ? "" : " noMarginBottom";
        let borderClass = (img.border == undefined) ? "" : (img.border) ? "border" : "";
        let newFigure;
        let lengthClass;

        switch (img.size) {
            case "short":
                lengthClass = " isShort";
                break;
            case "medium":
                lengthClass = " isMedium";
                break;
            default:
                lengthClass = "";
        }

        newFigure = '<figure class="' + stackItemClass + lengthClass + marginBottomClass + marginTopClass + '">';  // default haz margin bottom

        if (img.caption != "") {
            newFigure += '<figcaption>' + img.caption + '</figcaption><img class="' + borderClass + '" src="' + img.src + '">';
        } else { // no caption
            newFigure += '<img class="' + borderClass + '" src="' + img.src + '">';
        }

        newFigure += '</figure>';

        return newFigure;
    },
    imgmason: (imgmason) => {
        // // Shortcode for mason images
        // Usage:
        // {% imgmason src = [
        //             site.path.img + code + "/preview.jpg", 
        //             site.path.img + code + "/preview.jpg", 
        //             site.path.img + code + "/preview.jpg"
        //             ],
        //             caption = "elit exercitationem quo eos",
        //             marginTop = true,
        //             marginBottom = true,
        //             bottomFix = true,
        //             border = true
        // %}
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

        newFigure = '<figure class="' + masonName + marginClass + additionalClass + '">';  // default haz margin bottom

        if (imgmason.caption != undefined) {
            newFigure += '<figcaption>' + imgmason.caption + '</figcaption>';
        }

        for (img of imgmason.src) {
            newFigure += '<img src="' + img + '" class="' + masonItemName + borderClass + '">';
        }

        newFigure += '</figure>';

        return newFigure;
    },
    imgstack: (imgstack) => {
        // Shortcode for two/three column images with captions
        // Usage:
        // {% imgstack src = [
        //         site.path.img + code + "/preview.jpg", 
        //         site.path.img + code + "/preview.jpg",
        //         site.path.img + code + "/preview.jpg",
        //         site.path.img + code + "/preview.jpg",
        //         site.path.img + code + "/preview.jpg",
        //         site.path.img + code + "/preview.jpg"
        //       ],
        //       caption = "elit exercitationem quo eos",
        //       columns = 2,
        //       marginTop = true,
        //       marginBottom = true,
        //       border = true 
        // %}

        // {% imgstack src = [
        //               site.path.img + code + "/preview.jpg", 
        //               site.path.img + code + "/preview.jpg", 
        //               site.path.img + code + "/preview.jpg", 
        //               site.path.img + code + "/preview.jpg"
        //             ],
        //             columns = 2
        // %}

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

        newFigure = '<figure class="' + columnClass + marginClass + '">';  // default haz margin bottom

        if (imgstack.caption != undefined) {
            newFigure += '<figcaption>' + imgstack.caption + '</figcaption>';
        }

        for (img of imgstack.src) {
            newFigure += '<img src="' + img + '" class="' + stackItemName + borderClass + '">';
        }

        newFigure += '</figure>';

        return newFigure;
    }
}