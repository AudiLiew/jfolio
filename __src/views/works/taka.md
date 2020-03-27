---
title: "Takashimaya Department Store"
projectType: 'Selected works & campaigns'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'taka'
permalink: /taka/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
tags: 
  - cards
changefreq: monthly
eleventyNavigation:
  key: Takashimaya
  order: 1
---
{% set imgPathAndPrefix = site.path.img | url %}

{% img src=imgPathAndPrefix + "/" + code + "/taka-1.jpg", caption="Christmas 2012 wrapper", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-2.jpg", caption="" %}

{% img src=imgPathAndPrefix + "/" + code + "/taka-3.jpg", caption="Valentine’s Day 2016 wrapper", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-4.jpg", caption="" %}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/taka-5.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-6.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-7.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-8.jpg"
          ],
          caption = "Other Ads in the series (by colleagues)",
          columns = 4
%}