---
title: "Fabulous Aesthetics"
projectType: 'Social Media Content'
projectIntro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
code: 'fabulous'
permalink: /fabulous/ #false #
date: 2020-01-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
tags: 
  - cards
changefreq: monthly
eleventyNavigation:
  key: Fabulous Aesthetics
  order: 1
---
{% set imgPathAndPrefix = site.path.img | url %}
{% set vidPathAndPrefix = site.path.vid | url %}

<div class="stack stack--two">
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-1.mp4", stackItem=true, marginBottom=false, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-2.mp4", stackItem=true, marginBottom=false, caption="" %}
  {% img src=imgPathAndPrefix + "/" + code + "/fab-3.jpg", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-4.mp4", stackItem=true, caption="" %}
</div>

{% img src=imgPathAndPrefix + "/" + code + "/fab-5.jpg", stackItem=true, marginBottom=false, caption="" %}

<div class="stack stack--three">
  {% img src=imgPathAndPrefix + "/" + code + "/fab-6.jpg", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-7.mp4", stackItem=true, caption="" %}
  {% img src=imgPathAndPrefix + "/" + code + "/fab-8.jpg", stackItem=true, caption="" %}
</div>

<div class="stack stack--two">
  {% img src=imgPathAndPrefix + "/" + code + "/fab-9.jpg", stackItem=true, caption="" %}
  {% img src=imgPathAndPrefix + "/" + code + "/fab-10.jpg", stackItem=true, caption="" %}
</div>

{% vid src=vidPathAndPrefix + "/" + code + "/fab-11.mp4", stackItem=true, caption="" %}

<div class="stack stack--three">
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-12.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-13.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-14.mp4", stackItem=true, caption="" %}
</div>

{% vid src=vidPathAndPrefix + "/" + code + "/fab-15.mp4", stackItem=true, marginBottom=false, caption="" %}

<div class="stack stack--three">
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-16.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-17.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-18.mp4", stackItem=true, caption="" %}
</div>

{% vid src=vidPathAndPrefix + "/" + code + "/fab-19.mp4", stackItem=true, caption="" %}

<div class="stack stack--three">
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-20.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-21.mp4", stackItem=true, caption="" %}
  {% vid src=vidPathAndPrefix + "/" + code + "/fab-22.mp4", stackItem=true, caption="" %}
</div>

{% img src=imgPathAndPrefix + "/" + code + "/fab-23.jpg", stackItem=true, marginBottom=false, caption="" %}

<div class="stack stack--two">
  {% img src=imgPathAndPrefix + "/" + code + "/fab-24.jpg", stackItem=true, caption="" %}
  {% img src=imgPathAndPrefix + "/" + code + "/fab-25.jpg", stackItem=true, caption="" %}
</div>