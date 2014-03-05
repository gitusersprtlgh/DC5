<?php $form_path='formoid1/form.php'; require_once $form_path; ?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DC Labs - Damon Carlstrom Creative Portfolio</title>
<meta property="og:title" content="Damon Carlstrom" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://damon9.com" />
<meta property="og:image" content="http://damon9.com/images/dc-logo.jpg" />
<meta property="og:site_name" content="DC Labs" />
<meta property="og:description" content="Damon Carlstrom - Creative portfolio of web/UI design, front-end development, motion graphics, 3d animation, logos, and other graphic design." />

<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="templates/default/css/osmplayer_default.css" type="text/css">
<link rel="stylesheet" href="jquery-ui/mint-choc/jquery-ui-1.8.18.custom.css" type="text/css">

<style>.edgeLoad-pw_button{display:none}</style>
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script src="js/animations/jQuery.html5Loader.circular.js" type="text/javascript"></script>
<script src="js/jQuery.html5Loader.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script> 
<script type="text/javascript" src="bin/osmplayer.compressed.js"></script>
<script type="text/javascript" src="templates/default/js/osmplayer.default.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script> 
<script type="text/javascript" charset="utf-8" src="Power4_edgePreload.js"></script>
<script type="text/javascript" src="js/snap.svg-min.js"></script>
<script type="text/javascript" src="js/modernizr.custom.4.js"></script>
<script type="text/javascript">
 $('document').ready( function ($){

var loaderAnimation = $("#html5Loader").LoaderAnimation();
$.html5Loader({
    getFilesToLoadJSON:'js/files.json',
    onUpdate: loaderAnimation.update
});

});
</script>

<div id="html5Loader"></div>
</head>

<body>

<div class="outer_container">
  <div class="toolbar" style="position: fixed;">
    <div class="top_tab left_tab">
      <div class="triangle-topleft tri-large-left"></div> 
        <div class="hi-icon-wrap hi-icon-effect-7 hi-icon-effect-7b" style="padding-left: .5em;">
         <span class="icon-user hi-icon"></span>
        </div>
    </div>
    <div class="top_tab right_tab">
      <div class="triangle-topright tri-large-right"></div> 
        <div class="hi-icon-wrap hi-icon-effect-7 hi-icon-effect-7b opposite" style="padding-right: .5em;">
          <span class="icon-mail hi-icon envelope"></span>
        </div>
    </div>

    <div class="slidedown -lft">
      <span id="user-close">X</span>
      <h2>Damon Carlstrom</h2>
      <div class="fltlft">
        <img src="images/_svg/skill-dials2.svg" alt="">
      </div>
      <div style="float: left; height: 260px;">
        <h3>Experience</h3>
        <p>UX Specialist</p>
        <p>Front-End Developer</p>
        <p>Interactive Designer</p>
        <p>Motion Graphics Designer</p>

        <h3>Education</h3>
        <p>BA Journalism - Advertising</p>
        <p>University of Oklahoma 2010</p>

        <h3>Languages</h3>
        <p>English, Spanish</p>
      </div>
      <br>
      <a href="#"><div class="btn" role="button">Resume</div></a>
      <a href="#"><div class="btn" role="button">CV</div></a>
      <div class="slidedown-icons">
        <a href=""><span class="icon-facebook fltlft fs2"></span></a>
        <a href=""><span class="icon-linkedin fltlft fs2"></span></a>
        <a href=""><span class="icon-github fltlft fs2"></span></a>
        <a href=""><span class="icon-behance fltlft fs2"></span></a>
        <a href=""><span class="icon-vimeo fltlft fs2"></span></a>
      </div>
    </div>

     <div class="slidedown -rt">
     <span id="mail-close">X</span>
      <h2>Contact Me</h2>
      {{Formoid}}
     </div>

    <nav class="current">
      <div class="triangle-topright"></div>
      <div id="triangle-topleft" class="triangle-topleft"></div>
        <ul>
          <li class="menu" id="home-tab"><a href="#home">Home</a></li>
          <li class="menu" id="about-tab"><a href="#about" >About</a></li>
          <li class="menu" id="interface-tab"><a href="#interface">Digital</a></li>
          <li class="menu" id="animation-tab"><a href="#animation">Animation</a></li>
          <li class="menu" id="concepts-tab"><a href="#campaigns">UX</a></li>
          <li class="menu" id="print-tab"><a href="#print">Print</a></li>
          <li class="menu" id="art-tab"><a href="#art">Art</a></li>
        </ul>
    </nav>
    <!-- end .nav --> 
  </div>
  <!-- end .toolbar -->
  
  <div class="home_container" id="home">
    <div id="home_nav">
      <h1>Damon Carlstrom</h1>
      <span class="si-icon si-icon-plus" data-icon-name="plus"></span>
      <div id="name_slide">
        <div id="slide1" style="position: absolute; right: 0px; top: 0px;overflow:hidden;">
          <h3 style="color: #7fb1c8; background-color: black;">User-Interface Specialist</h3>
        </div>
        <div id="slide2" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: black; background-color:#c9fd59;">Motion Graphics Ninja</h3>
        </div>
        <div id="slide3" style="position: absolute; right: 0px; top: 0px;overflow:hidden;">
          <h3 style="color: white; background-color: #812d2b;">Self-Made Superhero</h3>
        </div>
        <div id="slide4" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: black; background-color: #e1bb5f;">Creative Strategist</h3>
        </div>
        <div id="slide5" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color: #004695;">OKC Thunder Fan</h3>
        </div>
        <div id="slide6" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color:#099;">Capable Developer</h3>
        </div>
        <div id="slide7" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color:#4b6a50;">Aspiring World Traveler</h3>
        </div>
      </div>
      <div id="Stage" class="pw_button"></div>
      <div id="nav_lines">
        <h3 id="nav_resume" class="x_nav"><a href="resume.html">Resume</a></h3>
        <h3 id="nav_contact" class="x_nav"><a href="contact.php">Contact</a></h3>
        <h3 id="nav_about" class="x_nav"><a href="#about" >About</a></h3>
        <h3 id="nav_interface" class="x_nav"><a href="#interface">Digital</a></h3>
        <h3 id="nav_animation" class="x_nav"><a href="#animation">Animation</a></h3>
       <h3 id="nav_concepts" class="x_nav"><a href="#concepts">UX</a></h3>
        <h3 id="nav_print" class="x_nav"><a href="#print">Print</a></h3>
        <h3 id="nav_art" class="x_nav"><a href="#art">Art</a></h3>
      </div>
      <!-- end .nav_lines --> 
    </div>
    <!-- end .home_nav -->
    <div id="logo"></div>
    <!--<img id="city" src="images/home_city.jpg" alt="">--> 
    <!-- end #home--></div>
    <?php include 'about.php'; ?>

    <?php include 'interface.php'; ?>

    <?php include 'animation.php'; ?>

    <?php include 'ux.php'; ?>

    <?php include 'print.php'; ?>

    <?php include 'art.php'; ?>
  
  
</div>
<!-- end outer container --> 

<script type="text/javascript" src="js/jquery.parallax-1.1.js"></script> 
<script type="text/javascript" src="js/jquery.ad-gallery.js"></script> 
<script src="js/jquery.scrollTo-1.4.3.1.min.js"></script> 
<script src="js/waypoints.min.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.teaser.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.controller.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.pager.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playLoader.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playlist.default.js"></script> 
<script type="text/javascript" src="js/svgicons-config.js"></script>
<script type="text/javascript" src="js/svgicons.js"></script>
<script type="text/javascript" src="js/custom-animations.js"></script>


<script type="text/javascript" >
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36783132-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


 // var s = skrollr.init({
 //   edgeStrategy: 'set',
 //   easing: {
 //     WTF: Math.random,
 //     inverted: function(p) {
 //       return 1-p;
 //     }
 //   }
//  });

      (function() {
        // initialize all
        
        [].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
          var svgicon = new svgIcon( el, svgIconConfig );
        } );

        new svgIcon( document.querySelector( '.si-icons-easing .si-icon-plus' ), svgIconConfig, { easing : mina.backin } );
      
      })();
    </script>

</body>


</html>