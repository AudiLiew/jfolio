---
title: 'Skinbooster'
projectType: 'Brand Identity'
projectIntro: "Skinbooster was designed to complement Japan IPL’s hair removal service. The brand identity of simplicity is reflected with minimalistic design elements to bring focus to the product, and simple illustrations overlayed to enchance the concept that skin is \"boosted\". The colour scheme selected was to run parallel to Japan IPL’s style guide.<br><br>The concept behind the product is to give skin an extra boost of hydration is examplified with elements of water to invoke feelings of quenching thrist and soothing parched skin."
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
{% img src=imgPathAndPrefix + "/" + code + "/sb-6.jpg", caption="", marginTop=false %}