---
title: 'Shoe Salon'
projectType: 'Logo and Ads'
projectIntro: 'This is intro Culpa voluptatem optio ipsam quisquam maxime nihil nisi reprehenderit nam labore quo animi, autem adipisci explicabo fugit exercitationem deserunt nobis minima magni tempora eum est aliquid. Reiciendis accusamus nam voluptatum dicta tenetur'
code: 'shoe-salon'
permalink: /shoe-salon/ #false #
date: 2020-02-04
heroImg: 'hero.jpg'
#mod_date: 2020-01-01
is_short: true
tags: 
  - works
changefreq: monthly
eleventyNavigation:
  key: Shoe Salon
  order: 1
---

{% img src=site.path.img + code + "/shoe-salon-1.jpg", caption="The Shoe Salon logo design" %}

{% img src=site.path.img + code + "/shoe-salon-2.jpg", caption="<i>Her World</i> magazine Ad - Chloé<br>Concept and digital imagine" %}

{% img src=site.path.img + code + "/shoe-salon-3.jpg", caption="Newspaper Ad - Concept and digital imaging" %}

{% imgstack src = [
            site.path.img + code + "/shoe-salon-4.jpg", 
            site.path.img + code + "/shoe-salon-5.jpg", 
            site.path.img + code + "/shoe-salon-6.jpg"
          ],
          caption = "Other Ads in the series (by colleagues)",
          columns = 3,
          border = true
%}