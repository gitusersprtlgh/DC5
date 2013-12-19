/*
	scrolldeck - jQuery scrolldeck to create a vertically scrolling presentation deck
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/(function(e){e.scrolldeck=function(t){function h(){if(r){r.removeClass("current");var e=-1;for(a=0;a<o.length;a++)n>=o[a]&&(e=a);e!=-1&&r.eq(e).addClass("current")}}function p(t){e(window)._scrollable().stop();e(window).scrollTo(t,{duration:l.settings.duration,easing:l.settings.easing,offset:l.settings.offset})}function d(){return m(2)}function v(){return m(-1)}function m(t){var n=e(window).scrollTop(),r=s.slice(0);r.push(n);r.sort(function(e,t){return e-t});return r[r.indexOf(n)+t]}var n=0,r,i,s=[],o=[],u=e(window).height(),a,f={buttons:".nav-button",slides:".slide",duration:600,easing:"easeInOutExpo",offset:0},l=this;l.settings={};var c=function(){l.settings=e.extend({},f,t);r=e(l.settings.buttons);i=e(l.settings.slides);l.controller=e.scrollorama({blocks:i,offset:l.settings.offset});var c;for(a=0;a<e(".animate-in").length;a++){c=e(".animate-in").eq(a);switch(c.attr("data-animation")){case"fly-in-left":c.parent().css("overflow","hidden");l.controller.animate(c,{delay:u/2,duration:u/2,property:"left",start:-1200});break;case"fly-in-right":c.parent().css("overflow","hidden");l.controller.animate(c,{delay:u/2,duration:u/2,property:"right",start:-1200});break;case"space-in":l.controller.animate(c,{delay:u*.8,duration:u*.2,property:"letter-spacing",start:40});l.controller.animate(c,{delay:u*.8,duration:u*.2,property:"opacity",start:0});break;case"fade-in":l.controller.animate(c,{delay:u/2,duration:u/2,property:"opacity",start:0});break;default:l.controller.animate(c,{delay:u/2,duration:u/2,property:"opacity",start:0})}}for(a=0;a<e(".animate-build").length;a++){c=e(".animate-build").eq(a);switch(c.attr("data-animation")){case"fly-in-left":c.parent().css("overflow","hidden");l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"left",start:-1200,pin:!0});break;case"fly-in-right":c.parent().css("overflow","hidden");l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"right",start:-1200,pin:!0});break;case"space-in":l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"letter-spacing",start:40,pin:!0});l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"opacity",start:0,pin:!0});break;case"fade-in":l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"opacity",start:0,pin:!0});break;default:l.controller.animate(c,{delay:(c.attr("data-build")-1)*400,duration:400,property:"opacity",start:0,pin:!0})}}s=l.controller.getScrollpoints();for(a=0;a<r.length;a++)o.push(i.index(e(e(r[a]).attr("href"))));l.controller.onBlockChange(function(){n=l.controller.blockIndex;h()});r.on("click",function(t){t.preventDefault();var r=e(e(this).attr("href"));n=r.index();p(r)});e(document).on("keydown",function(e){e.keyCode!=37&&e.keyCode!=38||n===0?(e.keyCode==39||e.keyCode==32||e.keyCode==40)&&n!=i.length-1&&p(d()):p(v())});for(a=0;a<i.length;a++){var m=i.eq(a);m.prop("tagName").toUpperCase()==="IMG"&&m.css("height","auto")}var g=i.eq(i.length-1);g.outerHeight()<e(window).height()&&g.height(g.height()+e(window).height()-g.outerHeight());h()};c()}})(jQuery);