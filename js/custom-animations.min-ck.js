function slide(){$("#slide1").slideDown("slow").delay(5e3).slideUp("slow").delay(5e3);$("#slide2").slideUp(1).delay(6e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3);$("#slide3").slideUp(1).delay(12e3).slideDown("slow").delay(5e3).slideUp("slow");$("#slide4").slideUp(1).delay(18e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3);$("#slide5").slideUp(1).delay(24e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3);$("#slide6").slideUp(1).delay(3e4).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3);$("#slide7").slideUp(1).delay(36e3).slideDown("slow").delay(5e3).slideUp("slow",slide)}$(document).ready(function(){function e(){var e=$(window).scrollTop();$("#outer-ring").css("top",620-e*.23+"px");$("#middle-ring").css("top",620-e*.23+"px");$("#my-face").css("top",290-e*0+"px");$("#inner-ring").css("top",620-e*.23+"px");$("#vertical-scale").css("top",740-e*.4+"px");$("#target").css("top",950-e*.52+"px");$("#about-box").css("top",950-e*.52+"px");$("#interface-box").css("top",1280-e*.52+"px");$("#animation-box").css("top",1900-e*.52+"px");$("#branch").css("top",50-e*.05+"px");$("#front-ink1").css("top",1350-e*.15+"px");$("#front-ink2").css("top",200-e*0+"px");$("#print-box").css("top",2500-e*.42+"px");$("#concepts-box").css("top",2030-e*.42+"px");$("#art-box").css("top",2900-e*.42+"px")}function t(){var e=0,t=$("#about").offset().top-($("#interface").offset().top-$("#about").offset().top)/2,n=$("#interface").offset().top-($("#animation").offset().top-$("#interface").offset().top)/2,r=$("#animation").offset().top-($("#concepts").offset().top-$("#animation").offset().top)/2,i=$("#concepts").offset().top-($("#print").offset().top-$("#concepts").offset().top)/2,s=$("#print").offset().top-($("#art").offset().top-$("#print").offset().top)/2,o=$("#art").offset().top-($(document).height()-$("#art").offset().top)/2;$("li.menu").removeClass("active");$(document).scrollTop()>=e&&$(document).scrollTop()<t?$("li#home-tab").addClass("active"):$(document).scrollTop()>=t&&$(document).scrollTop()<n?$("li#about-tab").addClass("active"):$(document).scrollTop()>=n&&$(document).scrollTop()<r?$("li#interface-tab").addClass("active"):$(document).scrollTop()>=r&&$(document).scrollTop()<i?$("li#animation-tab").addClass("active"):$(document).scrollTop()>=i&&$(document).scrollTop()<s?$("li#concepts-tab").addClass("active"):$(document).scrollTop()>=s&&$(document).scrollTop()<o?$("li#print-tab").addClass("active"):$(document).scrollTop()>=o&&$("li#art-tab").addClass("active")}function n(){$("body").addClass("hidden");var e=$(this).adGallery();$("#switch-effect").change(function(){e[0].settings.effect=$(this).val();return!1});$("#toggle-slideshow").click(function(){e[0].slideshow.toggle();return!1});$("#toggle-description").click(function(){e[0].settings.description_wrapper?e[0].settings.description_wrapper=!1:e[0].settings.description_wrapper=$("#descriptions");return!1})}function r(){$(".ad-controls",this).empty();$("body").removeClass("hidden")}slide();$("#lab").parallax("100%",2500,.4,!0);$("#space").parallax("50%",12e3,.05,!0);$("#jungle-bg").parallax("50%",4200,.15,!0);$("#gears").parallax("50%",5600,.3,!0);$("#ink").parallax("50%",6700,.3,!0);$("#face3d").parallax("20%",7700,.3,!0);$("h3#nav_print").waypoint(function(e,t){t==="down"?$(".toolbar").animate({marginTop:"0px"},500):$(".toolbar").animate({marginTop:"-48px"},500)});$("#contact_btn").hover(function(){$("#tooltip").fadeIn("slow")},function(){$("#tooltip").fadeOut("slow")});$("#oc_about").click(function(){$(".button-area #open-about").is(":visible")?$("#oc_about h2").fadeOut("fast",function(){$(".button-area #open-about").fadeOut("fast",function(){$("#oc_about h3").fadeIn("fast",function(){$(".button-area #close-about").fadeIn("fast",function(){$("#about-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},500)})})})}):$("#oc_about h3").fadeOut("fast",function(){$(".button-area #close-about").fadeOut("fast",function(){$("#oc_about h2").fadeIn("fast",function(){$(".button-area #open-about").fadeIn("fast",function(){$("#about-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},500)})})})})});$("#oc_interface").click(function(){$(".button-area #open-interface").is(":visible")?$("#oc_interface h2").fadeOut("fast",function(){$(".button-area #open-interface").fadeOut("fast",function(){$("#oc_interface h3").fadeIn("fast",function(){$(".button-area #close-interface").fadeIn("fast",function(){$("#interface-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},500)})})})}):$("#oc_interface h3").fadeOut("fast",function(){$(".button-area #close-interface").fadeOut("fast",function(){$("#oc_interface h2").fadeIn("fast",function(){$(".button-area #open-interface").fadeIn("fast",function(){$("#interface-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},500)})})})})});$("#oc_animation").click(function(){$(".button-area2 #open-animation").is(":visible")?$("#oc_animation h2").fadeOut("fast",function(){$(".button-area2 #open-animation").fadeOut("fast",function(){$("#oc_animation h3").fadeIn("fast",function(){$(".button-area2 #close-animation").fadeIn("fast",function(){$("#animation-box").animate({width:"670px"},500)})})})}):$("#oc_animation h3").fadeOut("fast",function(){$(".button-area2 #close-animation").fadeOut("fast",function(){$("#oc_animation h2").fadeIn("fast",function(){$(".button-area2 #open-animation").fadeIn("fast",function(){$("#animation-box").animate({width:"350px"},500)})})})})});$("#oc_print").click(function(){$(".button-area #open-print").is(":visible")?$("#oc_print h2").fadeOut("fast",function(){$(".button-area #open-print").fadeOut("fast",function(){$("#oc_print h3").fadeIn("fast",function(){$(".button-area #close-print").fadeIn("fast",function(){$("#print-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},500)})})})}):$("#oc_print h3").fadeOut("fast",function(){$(".button-area #close-print").fadeOut("fast",function(){$("#oc_print h2").fadeIn("fast",function(){$(".button-area #open-print").fadeIn("fast",function(){$("#print-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},500)})})})})});$("#oc_concepts").click(function(){$(".button-area #open-concepts").is(":visible")?$("#oc_concepts h2").fadeOut("fast",function(){$(".button-area #open-concepts").fadeOut("fast",function(){$("#oc_concepts h3").fadeIn("fast",function(){$(".button-area #close-concepts").fadeIn("fast",function(){$("#concepts-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},500)})})})}):$("#oc_concepts h3").fadeOut("fast",function(){$(".button-area #close-concepts").fadeOut("fast",function(){$("#oc_concepts h2").fadeIn("fast",function(){$(".button-area #open-concepts").fadeIn("fast",function(){$("#concepts-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},500)})})})})});$("#oc_art").click(function(){$(".button-area #open-art").is(":visible")?$("#oc_art h2").fadeOut("fast",function(){$(".button-area #open-art").fadeOut("fast",function(){$("#oc_art h3").fadeIn("fast",function(){$(".button-area #close-art").fadeIn("fast",function(){$("#art-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},500)})})})}):$("#oc_art h3").fadeOut("fast",function(){$(".button-area #close-art").fadeOut("fast",function(){$("#oc_art h2").fadeIn("fast",function(){$(".button-area #open-art").fadeIn("fast",function(){$("#art-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},500)})})})})});$("#osmplayer").osmplayer({width:"580px",height:"300px",playlist:"playlist.xml"});$("#oc_about").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top+210},500,function(){e()});return!1});$("#oc_interface").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},500,function(){e()});return!1});$("#oc_animation").click(function(){$("html, body").animate({scrollTop:$("#animation").offset().top+120},500,function(){e()});return!1});$("#oc_print").click(function(){$("html, body").animate({scrollTop:$("#print").offset().top+165},500,function(){e()});return!1});$("#oc_concepts").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},500,function(){e()});return!1});$("#oc_art").click(function(){$("html, body").animate({scrollTop:$("#art").offset().top+130},500,function(){e()});return!1});$("#resume_btn").pageslide();$("#nav_resume a").pageslide();$("#contact_btn").pageslide({direction:"left",modal:!1});$("#nav_contact a").pageslide({direction:"left",modal:!1});$(window).bind("scroll",function(n){e();t()});$("#home-tab").click(function(){$("html, body").animate({scrollTop:0},1e3,function(){e()});return!1});$(function(){$("#about-tab").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top+210},1e3,function(){e()});return!1})});$("#interface-tab").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},1e3,function(){e()});return!1});$("#animation-tab").click(function(){$("html, body").animate({scrollTop:$("#animation").offset().top+120},1e3,function(){e()});return!1});$("#print-tab").click(function(){$("html, body").animate({scrollTop:$("#print").offset().top+165},1e3,function(){e()});return!1});$("#concepts-tab").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},1e3,function(){e()});return!1});$("#art-tab").click(function(){$("html, body").animate({scrollTop:$("#art").offset().top+130},1e3,function(){e()});return!1});$("#nav_about").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top+210},1e3,function(){e()});return!1});$("#nav_interface").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},1300,function(){e()});return!1});$("#nav_animation").click(function(){$("html, body").animate({scrollTop:$("#animation").offset().top+120},1600,function(){e()});return!1});$("#nav_print").click(function(){$("html, body").animate({scrollTop:$("#print").offset().top+165},1900,function(){e()});return!1});$("#nav_concepts").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},2200,function(){e()});return!1});$("#nav_art").click(function(){$("html, body").animate({scrollTop:$("#art").offset().top+130},2500,function(){e()});return!1});$("nav#primary a").hover(function(){$(this).prev("h1").show()},function(){$(this).prev("h1").hide()});var i=0;$(window).scroll(function(e,t){if(t==="down"){i++;i+=1;var n="rotate("+i+"deg)";$("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform":n,"-webkit-transform":n})}else{i++;i+=1;var n="rotate("+i+"deg)";$("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform":n,"-webkit-transform":n})}});$(".modal").fadeOut(1);$(".modal2").fadeOut(1);var s=$(document).height();$("#ui-1").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ui-1").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ui-1").fadeOut("slow",r)})});$("#ui-2").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ui-2").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ui-2").fadeOut("slow",r)})});$("#ui-3").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ui-3").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ui-3").fadeOut("slow",r)})});$("#ui-4").click(function(){$("html, body").animate({scrollTop:$("#interface").offset().top+90},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ui-4").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ui-4").fadeOut("slow",r)})});$("#concepts-1").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-concepts-1").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-concepts-1").fadeOut("slow",r)})});$("#concepts-2").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-concepts-2").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-concepts-2").fadeOut("slow",r)})});$("#concepts-3").click(function(){$("html, body").animate({scrollTop:$("#concepts").offset().top+150},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-concepts-3").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-concepts-3").fadeOut("slow",r)})});$("#print-1").click(function(){$("html, body").animate({scrollTop:$("#print").offset().top+165},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-print-1").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-print-1").fadeOut("slow",r)})});$("#print-2").click(function(){$("html, body").animate({scrollTop:$("#print").offset().top+165},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-print-2").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-print-2").fadeOut("slow",r)})});$("#art-1").click(function(){$("html, body").animate({scrollTop:$("#art").offset().top+130},500).promise().done(function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-art-1").fadeIn("slow",n)});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-art-1").fadeOut("slow",r)})});$("#ani-1").click(function(){$("html, body").animate({scrollTop:$("#animation").offset().top+120},500,function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ani-1").fadeIn("slow",function(){$("body").addClass("hidden")})});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ani-1").fadeOut("slow",function(){$("body").removeClass("hidden")})})});$("#ani-2").click(function(){$("html, body").animate({scrollTop:$("#animation").offset().top+120},500,function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-ani-2").fadeIn("slow",function(){$("body").addClass("hidden")})});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-ani-2").fadeOut("slow",function(){$("body").removeClass("hidden")})})});$("#process").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top+210},500,function(){$("body").append("<div id='overlay'></div>");$("#overlay").height(s).css({opacity:.8,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"block"});$("#modal-process").fadeIn("slow",function(){$("body").addClass("hidden")})});$(".gallery-close").click(function(){$("body").remove("#overlay");$("#overlay").height(s).css({opacity:0,position:"fixed",top:0,left:0,"background-color":"black",width:"100%",height:"100%","z-index":5e3,display:"none"});$("#modal-process").fadeOut("slow",function(){$("body").removeClass("hidden")})})})});(function(e){})(jQuery);