(function(e,t){var t=t||{};t.controller=t.controller||{};t.controller[e]=function(e,t){minplayer.controller.call(this,e,t)};t.controller[e].prototype=new minplayer.controller;t.controller[e].prototype.constructor=t.controller[e];t.controller[e].prototype.construct=function(){minplayer.controller.prototype.construct.call(this);this.options.controllerOnly||this.get("player",function(e){this.get("media",function(t){t.hasController()?e.display.addClass("with-controller"):minplayer.showThenHide(this.display,5e3,function(t){var n=t?"addClass":"removeClass";e.display[n]("with-controller")})})})};t.controller[e].prototype.getDisplay=function(){this.options.build&&jQuery("#mediaplayer_minplayer",this.context).append('      <div id="mediaplayer_control">        <div id="mediaplayer_controlLeft">          <div id="mediaplayer_playPause" class="mediaplayer_controlspace">            <div id="mediaplayer_play" class="on"><span>play</span></div>            <div id="mediaplayer_pause" class="off"><span>pause</span></div>          </div>          <div id="mediafront_playtime" class="mediaplayer_controlspace">00:00</div>        </div>        <div id="mediaplayer_controlRight">          <a id="mediafront_resizeScreen" class="mediaplayerlink mediaplayer_controlspace" href="#fullscreen">            <div id="mediafront_resize_to_fullScreen" class="on"><span>make full screen</span></div>            <div id="mediafront_resize_to_normalScreen" class="off"><span>make normal screen</span></div>          </a>          <div id="mediafront_totaltime" class="mediaplayer_controlspace">00:00</div>          <div id="mediafront_audio" class="mediaplayer_controlspace">             <div id="mediaplayer_audioButton"></div>             <div id="mediaplayer_audioBar"></div>          </div>          <a id="mediafront_information" class="mediaplayerlink mediaplayer_controlspace" href="#menu">            <div id="mediafront_menuButton"><span>information</span></div>          </a>        </div>        <div id="mediaplayer_seekBar">          <div id="mediaplayer_seekProgress"></div>        </div>      </div>');this.context.addClass("with-controller");return jQuery("#mediaplayer_control",this.context)};t.controller[e].prototype.getElements=function(){var e=minplayer.controller.prototype.getElements.call(this);return jQuery.extend(e,{play:jQuery("#mediaplayer_play",this.display),pause:jQuery("#mediaplayer_pause",this.display),fullscreen:jQuery("#mediafront_resizeScreen",this.display),seek:jQuery("#mediaplayer_seekBar",this.display),progress:jQuery("#mediaplayer_seekProgress",this.display),volume:jQuery("#mediaplayer_audioBar",this.display),mute:jQuery("#mediaplayer_audioButton",this.display),timer:jQuery("#mediafront_playtime",this.display),duration:jQuery("#mediafront_totaltime",this.display)})}})("simpleblack",osmplayer);