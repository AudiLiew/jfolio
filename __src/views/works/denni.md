---
title: 'Denni'
projectType: 'Corporate Identity'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'denni'
permalink: /denni/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Denni
  order: 1
tags: 
  - identity
changefreq: monthly
---
{% set imgPathAndPrefix = site.path.img | url %}

{% img src=imgPathAndPrefix + code + "/denni-1.jpg", caption="Denni Corporate Identity - Concept, layout, and photography art direction", marginBottom=false %}
{% img src=imgPathAndPrefix + code + "/denni-2.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + code + "/denni-3.jpg", caption="" %}

{% img src=imgPathAndPrefix + code + "/denni-4.jpg", caption="", short=true, marginBottom=false %}

{% imgstack src = [
              imgPathAndPrefix + code + "/denni-5.jpg", 
              imgPathAndPrefix + code + "/denni-6.jpg", 
              imgPathAndPrefix + code + "/denni-7.jpg", 
              imgPathAndPrefix + code + "/denni-8.jpg", 
              imgPathAndPrefix + code + "/denni-9.jpg", 
              imgPathAndPrefix + code + "/denni-10.jpg"
            ],
            columns = 2
%}