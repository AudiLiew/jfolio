---
title: 'Denni'
projectType: 'Corporate Identity'
projectIntro: 'Established in 1982, Danni is a fashion accessories brand with 100 stores in markets across Asia, USA, and Spain. To reinvigorate and stay relevant with consumers, Danni expanded their brand portfolio and modernised their product offerings to appeal to a younger demographic. To reflect this change, I conceptualised what the consumers see, moving towards a polished and clean outlook to the brand.'
code: 'denni'
permalink: /denni/ #false #
date: 2019-10-04
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

{% img src=imgPathAndPrefix + "/" + code + "/denni-1.jpg", caption="Denni Corporate Profile - Concept, art direction, layout, and photography", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/denni-2.jpg", caption="", marginBottom=false %}
{% img src=imgPathAndPrefix + "/" + code + "/denni-3.jpg", caption="" %}

{% img src=imgPathAndPrefix + "/" + code + "/denni-4.jpg", caption="", size="short", marginBottom=false %}

{% imgstack src = [
              imgPathAndPrefix + "/" + code + "/denni-5.jpg", 
              imgPathAndPrefix + "/" + code + "/denni-6.jpg", 
              imgPathAndPrefix + "/" + code + "/denni-7.jpg", 
              imgPathAndPrefix + "/" + code + "/denni-8.jpg", 
              imgPathAndPrefix + "/" + code + "/denni-9.jpg", 
              imgPathAndPrefix + "/" + code + "/denni-10.jpg"
            ],
            columns = 2
%}