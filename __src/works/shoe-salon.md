---
title: 'Shoe Salon'
projectType: 'Logo and Ads'
projectIntro: 'Answering the call of luxury shoe lovers, The Shoe Salon carry brands such as <i>Manolo Blahnik, Jil Sander, Marc Jacobs, Kenzo,</i> and <i>Bruno Magli</i>.<br><br>The identity was designed to give a glimpse of what the brand is about and marketed with image-driven campaigns to express individuality, product personalities, and stories through art and style.'
code: 'shoe-salon'
permalink: /shoe-salon/ #false #
date: 2021-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
tags: 
  - identity
changefreq: monthly
eleventyNavigation:
  key: Shoe Salon
  order: 1
---
{% set imgPathAndPrefix = site.path.img | url %}
{% img src=imgPathAndPrefix + "/" + code + "/shoe-salon-1.jpg", caption="The Shoe Salon logo design" %}

{% img src=imgPathAndPrefix + "/" + code + "/shoe-salon-2.jpg", caption="<i>Her World</i> magazine Ad - Chloé<br>Concept and digital imagine" %}

{% img src=imgPathAndPrefix + "/" + code + "/shoe-salon-3.jpg", caption="Newspaper Ad - Concept and digital imaging" %}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/shoe-salon-4.jpg", 
            imgPathAndPrefix + "/" + code + "/shoe-salon-5.jpg", 
            imgPathAndPrefix + "/" + code + "/shoe-salon-6.jpg"
          ],
          caption = "Other Ads in the series (by colleagues)",
          columns = 3,
          border = true
%}