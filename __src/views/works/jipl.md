---
title: 'Japan IPL Express'
projectType: 'Marketing Collateral'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'jipl'
permalink: /jipl/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Japan IPL Express
  order: 1
tags: 
  - identity
changefreq: monthly
---
{% set imgPathAndPrefix = site.path.img | url %}
{% set vidPathAndPrefix = site.path.vid | url %}

## Selected In-store Marketing Materials

{% img src=imgPathAndPrefix + "/" + code + "/jipl-1.jpg", caption="Marketing materials such as flyers, lucky draw cards, notebooks and calendars" %}

{% img src=imgPathAndPrefix + "/" + code + "/jipl-2.jpg", caption="2019 and 2020 red packets" %}

{% vid src=vidPathAndPrefix + "/" + code + "/jipl-cards.mp4", caption="Customer’s shots-back redemption card" %}

{% vid src=vidPathAndPrefix + "/" + code + "/jipl-calendar.mp4", caption="2020 Calendar" %}
