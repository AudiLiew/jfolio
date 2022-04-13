---
title: 'Japan IPL Express'
projectType: 'Marketing Collateral'
projectIntro: 'Japan IPL Express is a unisex hair removal salon using Intense Pulsed Light systems. They set themselves apart in the market by having <i>No Appointments, No Packages</i>, staying true to their motto by being “Simply Different”.<br><br>This young beauty brand identifies itself by being hassle free and fun, connecting with their consumers with tongue-in-cheek humour, which transcends into their marketing collateral.'
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

## Marketing Collateral

{% img src=imgPathAndPrefix + "/" + code + "/jipl-1.jpg", caption="Notable designs included annual calendars, giftcards, stationary and Lunar New Year red packets." %}

{% img src=imgPathAndPrefix + "/" + code + "/jipl-2.jpg", caption="2019 and 2020 red packets" %}

{% vid src=vidPathAndPrefix + "/" + code + "/jipl-cards.mp4", caption="Customer’s shots-back redemption card" %}

{% vid src=vidPathAndPrefix + "/" + code + "/jipl-calendar.mp4", caption="2020 Calendar" %}
