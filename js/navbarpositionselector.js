$(document).ready(function(){$('#home div.parallax-window header div.container div.hidden-container nav a.home-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.home-nav').addClass("nav-position");});$(window).scroll(function(){if($(window).scrollTop()<=$('#about-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#about-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#parties-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#events-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#contact-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').addClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#gallery-anchor').position().top-75){$('#home div.parallax-window header div.container nav a.home-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.about-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.parties-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.events-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.contact-nav').removeClass("nav-position");$('#home div.parallax-window header div.container nav a.gallery-nav').addClass("nav-position");}});