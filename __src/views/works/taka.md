---
title: "Takashimaya"
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
          caption = "Chinese New Year campaign 2017 - Logo, mailer cover design, Launch Ad photography art direction, and red packets",
          columns = 4,
          marginBottom = false
%}

{% imgmason src = [
            imgPathAndPrefix + "/" + code + "/taka-9.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-10.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-11.jpg"
          ]
%}

{% img src=imgPathAndPrefix + "/" + code + "/taka-12.jpg", caption="Chinese New Year campaign 2015 - Logo, red packet, mailers cover design, and inside pages", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-13.jpg", caption="", marginBottom=false %}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/taka-14.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-15.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-16.jpg"
          ],
          caption = "",
          columns = 3,
          marginTop = false
%}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/taka-17.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-18.jpg"
          ],
          caption = "2016 Mid-autmn ad design, logo, and photography art direction",
          columns = 2
%}

{% img src=imgPathAndPrefix + "/" + code + "/taka-19.jpg", caption="Selected newspaper ads - photography art direction and layout", marginBottom=false %}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/taka-20.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-21.jpg"
          ],
          caption = "",
          columns = 2,
          marginTop = false,
          marginBottom = false
%}

{% imgmason src = [
            imgPathAndPrefix + "/" + code + "/taka-22.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-24.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-23.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-25.jpg"
          ],
          marginTop = false
%}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/taka-26.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-27.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-28.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-29.jpg"
          ],
          caption = "2012 Spring beauty and Autumn beauty mailers - photography art direction and layout",
          columns = 2
%}

{% img src=imgPathAndPrefix + "/" + code + "/taka-30.jpg", caption="2011 Christmas mailer - Cover design, layout, and photography art direction", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-31.jpg", caption="", border = true, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-32.jpg", caption="", border = true, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-33.jpg", caption="", border = true %}