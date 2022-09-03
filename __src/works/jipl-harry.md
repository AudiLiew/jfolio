---
title: 'Japan IPL Express (Calendar)'
projectType: 'Where’s Harry 2019 Calendar'
projectIntro: 'Japan IPL Express is a unisex hair removal salon using Intense Pulsed Light systems. They set themselves apart in the market by having No Appointments, No Packages, staying true to their motto by being “Simply Different”.<br><br>Harry, the Gorilla - Japan IPL Express mascot takes centre stage in 2019 calendar design. Inspired by the childhood’s puzzle book, ‘Where’s Waldo/Wally?’, illustrated Harry is lurking in the background, like that unwanted hair that need zapping. The calendar was later adapted to a monthly game on social platforms to bridge the physical and digital in branding.'
code: 'jipl-harry'
permalink: /jipl-harry/ #false #
date: 2019-09-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Japan IPL Express (Calendar)
  order: 1
tags: 
  - calendar
changefreq: monthly
---
{% set imgPathAndPrefix = site.path.img | url %}

{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-1.jpg", caption="" %}

{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-2.jpg", caption="", size="medium" %}
{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-3.jpg", caption="", size="medium" %}
{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-4.jpg", caption="", size="medium" %}
{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-5.jpg", caption="", size="medium" %}
{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-6.jpg", caption="", size="medium" %}
{% img src=imgPathAndPrefix + "/" + code + "/jipl-harry-7.jpg", caption="", size="medium" %}

{% imgstack src = [
              imgPathAndPrefix + "/" + code + "/jipl-harry-8.jpg", 
              imgPathAndPrefix + "/" + code + "/jipl-harry-9.jpg", 
              imgPathAndPrefix + "/" + code + "/jipl-harry-10.jpg", 
              imgPathAndPrefix + "/" + code + "/jipl-harry-11.jpg", 
              imgPathAndPrefix + "/" + code + "/jipl-harry-12.jpg", 
              imgPathAndPrefix + "/" + code + "/jipl-harry-13.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-14.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-15.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-16.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-17.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-18.jpg",
              imgPathAndPrefix + "/" + code + "/jipl-harry-19.jpg"
            ],
            columns = 3
%}