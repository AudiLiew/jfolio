---
title: 'Skinbooster'
projectType: 'Brand Identity'
projectIntro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quia modi corrupti ullam magnam dolorum tenetur numquam beatae nostrum a. Voluptatum sed ratione corrupti dolor eaque sapiente recusandae rem eum.'
code: 'skinbooster'
permalink: /skinbooster/ #false #
date: 2022-06-13
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Skin Booster
  order: 1
tags: 
  - identity
changefreq: monthly
---
{% set imgPathAndPrefix = site.path.img | url %}
{% set vidPathAndPrefix = site.path.vid | url %}

<!-- ## Marketing Collateral -->

{% img src=imgPathAndPrefix + "/" + code + "/sb-1.jpg", caption="", marginBottom=false %}
{% vid src=vidPathAndPrefix + "/" + code + "/sb-2.mp4", caption="", marginTop=false, marginBottom=false %}
{% vid src=vidPathAndPrefix + "/" + code + "/sb-3.mp4", caption="", marginTop=false, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/sb-4.jpg", caption="", marginTop=false, marginBottom=false %}
{% vid src=vidPathAndPrefix + "/" + code + "/sb-5.mp4", caption="", marginTop=false, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/sb-6.jpg", caption="", marginTop=false, marginBottom=false %}