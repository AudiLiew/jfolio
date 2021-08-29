---
title: "Paramedic Aesthetics"
projectType: 'Rebranding'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'paramedic'
permalink: /paramedic/ #false #
date: 2020-02-04
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
  <img src="{{imgPathAndPrefix + "/" + code + "/paramedic-12.jpg"}}" class="stack__item">
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