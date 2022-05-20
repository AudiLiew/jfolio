---
title: 'Logo Folio'
projectType: 'Selected Logos'
projectIntro: 'A collection of logos and logotype design for various branding projects.'
code: 'logofolio'
permalink: /logofolio/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Logo Folio
  order: 1
tags: 
  - identity
changefreq: monthly
---
{% set imgPathAndPrefix = site.path.img | url %}

{% img src=imgPathAndPrefix + "/" + code + "/logofolio-1.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-2.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-3.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-4.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-5.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-6.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-7.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/logofolio-8.jpg", caption="" %}