---
title: 'Japan IPL Express'
projectType: 'Where’s Harry 2019 Calendar'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'jipl-harry'
permalink: /jipl-harry/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
eleventyNavigation:
  key: Japan IPL Express
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