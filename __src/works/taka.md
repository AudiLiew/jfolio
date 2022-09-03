---
title: "Takashimaya"
projectType: 'Selected works & campaigns'
projectIntro: 'A Singaporean icon in its own right, the Japanese department store sits in the heart of Orchard Road. Staying true to the store’s image, I had the pleasure to work on campaigns throughout the year to celebrate key events, adapting it to the local market.'
code: 'taka'
permalink: /taka/ #false #
date: 2022-07-04
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
          caption = "Chinese New Year campaign 2017 - Art direction for the campaign, photography, marketing collateral including logo, direct mailer and red packets",
          columns = 4,
          marginBottom = false
%}

{% imgmason src = [
            imgPathAndPrefix + "/" + code + "/taka-9.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-10.jpg", 
            imgPathAndPrefix + "/" + code + "/taka-11.jpg"
          ],
          bottomFix = true
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
          caption = "Mid-Autumn 2016 - Art direction, photography, logo, and ad design",
          columns = 2
%}

{% img src=imgPathAndPrefix + "/" + code + "/taka-19.jpg", caption="Selected newspaper Advertising - Art direction, photography and layout.", marginBottom=false %}

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
          caption = "Spring Beauty 2012 and Autumn Beauty 2012 mailers - Art direction, photography, and layout.",
          columns = 2
%}

{% img src=imgPathAndPrefix + "/" + code + "/taka-30.jpg", caption="Christmas 2011 hamper mailer - Art direction, photography, cover design, and layout", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-31.jpg", caption="", border = true, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-32.jpg", caption="", border = true, marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/taka-33.jpg", caption="", border = true %}