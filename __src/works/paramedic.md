---
title: "Paramedic Aesthetics"
projectType: 'Rebranding'
projectIntro: 'Paramedic Aesthetics provides semi-permanent makeup solutions for both men and women to wake up confident to face the day.<br><br>I was part of the rebranding process for Paramedic Aesthetics to stay current with the younger demographic. The rebranding process included a dynamic website that is not only informative, but allows customers to schedule their appointments. This also included namecards, paper bags, an aftercare booklet and installations in the salon to complete the flow of the rebranding.'
code: 'paramedic'
permalink: /paramedic/ #false #
date: 2020-06-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
tags: 
  - cards
changefreq: monthly
eleventyNavigation:
  key: Paramedic
  order: 1
---
{% set imgPathAndPrefix = site.path.img | url %}
{% set vidPathAndPrefix = site.path.vid | url %}

{% imgmason src = [
            imgPathAndPrefix + "/" + code + "/paramedic-1.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-3.jpg",
            imgPathAndPrefix + "/" + code + "/paramedic-2.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-4.jpg"
          ],
          bottomFix=true
%}

{% img src=imgPathAndPrefix + "/" + code + "/paramedic-5.jpg", caption="Aftercare Booklet", marginBottom=false %}

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/paramedic-6.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-7.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-8.jpg",
            imgPathAndPrefix + "/" + code + "/paramedic-9.jpg"
          ],
          columns = 2
%}

{% img src=imgPathAndPrefix + "/" + code + "/paramedic-10.jpg", caption="Website Design", size="medium" %}

<!-- {% imgstack src = [
            imgPathAndPrefix + "/" + code + "/paramedic-11.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-12.jpg"
          ],
          columns = 2
%} -->

<figure class="stack stack--two">
  <div class="stack__item animateWrap">
    <img src="{{imgPathAndPrefix + "/" + code + "/paramedic-11-animate.gif"}}" class="animateWrap__animateItem" style="width: 32%;height: auto;right: 5.4%;top: 9.3%;">
    <img src="{{imgPathAndPrefix + "/" + code + "/paramedic-11.jpg"}}">
  </div>
  <div class="stack__item animateWrap">
    <video class="animateWrap__animateItem" style="width: 65%;height: auto;    left: 5.4%; bottom: 12.5%; outline: none;" autoplay loop disablepictureinpicture>
      <source src="{{vidPathAndPrefix + "/" + code + "/lash-donts.mp4"}}">
    </video>
    <img src="{{imgPathAndPrefix + "/" + code + "/paramedic-12.jpg"}}">
  </div>
</figure>

{% imgstack src = [
            imgPathAndPrefix + "/" + code + "/paramedic-13.jpg", 
            imgPathAndPrefix + "/" + code + "/paramedic-14.jpg"
          ],
          columns = 2,
          caption="Store Interior - Visuals pasted on transparent acrylic held by white frame",
          marginBottom = false
%}


{% img src=imgPathAndPrefix + "/" + code + "/paramedic-15.jpg", caption="", marginTop=false %}