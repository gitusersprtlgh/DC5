(function(e,t){t=t||{};t.playLoader=t.playLoader||{};t.playLoader[e]=function(e,t){minplayer.playLoader.call(this,e,t)};t.playLoader[e].prototype=new minplayer.playLoader;t.playLoader[e].prototype.constructor=t.playLoader[e];t.playLoader[e].prototype.getDisplay=function(){this.options.build&&jQuery(".minplayer-"+e+"",this.context).prepend('      <div class="minplayer-'+e+'-loader-wrapper">        <div class="minplayer-'+e+'-big-play ui-state-default"><span></span></div>        <div class="minplayer-'+e+'-loader">&nbsp;</div>        <div class="minplayer-'+e+'-preview ui-widget-content"></div>      </div>');return jQuery(".minplayer-"+e+" .minplayer-"+e+"-loader-wrapper",this.context)};t.playLoader[e].prototype.getElements=function(){var t=minplayer.playLoader.prototype.getElements.call(this);return jQuery.extend(t,{busy:jQuery(".minplayer-"+e+"-loader",this.display),bigPlay:jQuery(".minplayer-"+e+"-big-play",this.display),preview:jQuery(".minplayer-"+e+"-preview",this.display)})}})("default",osmplayer);(function(e,t){t=t||{};t.controller=t.controller||{};t.controller[e]=function(e,t){minplayer.controller.call(this,e,t)};t.controller[e].prototype=new minplayer.controller;t.controller[e].prototype.constructor=t.controller[e];t.controller[e].prototype.construct=function(){minplayer.controller.prototype.construct.call(this);this.options.controllerOnly||this.get("player",function(e){this.get("media",function(t){t.hasController()?e.display.addClass("with-controller"):minplayer.showThenHide(this.display,5e3,function(t){e.display[t?"addClass":"removeClass"]("with-controller")})})})};t.controller[e].prototype.getDisplay=function(){this.options.build&&jQuery(".minplayer-"+e,this.context).prepend('      <div class="minplayer-'+e+'-controls ui-widget-header">        <div class="minplayer-'+e+'-controls-left">          <a class="minplayer-'+e+"-play minplayer-"+e+'-button ui-state-default ui-corner-all" title="Play">            <span class="ui-icon ui-icon-play"></span>          </a>          <a class="minplayer-'+e+"-pause minplayer-"+e+'-button ui-state-default ui-corner-all" title="Pause">            <span class="ui-icon ui-icon-pause"></span>          </a>        </div>        <div class="minplayer-'+e+'-controls-right">          <div class="minplayer-'+e+'-timer">00:00</div>          <div class="minplayer-'+e+'-fullscreen ui-widget-content">            <div class="minplayer-'+e+'-fullscreen-inner ui-state-default"></div>          </div>          <div class="minplayer-'+e+'-volume">            <div class="minplayer-'+e+'-volume-slider"></div>            <a class="minplayer-'+e+"-volume-mute minplayer-"+e+'-button ui-state-default ui-corner-all" title="Mute">              <span class="ui-icon ui-icon-volume-on"></span>            </a>            <a class="minplayer-'+e+"-volume-unmute minplayer-"+e+'-button ui-state-default ui-corner-all" title="Unmute">              <span class="ui-icon ui-icon-volume-off"></span>            </a>          </div>        </div>        <div class="minplayer-'+e+'-controls-mid">          <div class="minplayer-'+e+'-seek">            <div class="minplayer-'+e+'-progress ui-state-default"></div>          </div>        </div>      </div>');this.context.addClass("with-controller");return jQuery(".minplayer-"+e+"-controls",this.context)};t.controller[e].prototype.getElements=function(){var t=minplayer.controller.prototype.getElements.call(this),n=jQuery(".minplayer-"+e+"-timer",this.display);return jQuery.extend(t,{play:jQuery(".minplayer-"+e+"-play",this.display),pause:jQuery(".minplayer-"+e+"-pause",this.display),fullscreen:jQuery(".minplayer-"+e+"-fullscreen",this.display),seek:jQuery(".minplayer-"+e+"-seek",this.display),progress:jQuery(".minplayer-"+e+"-progress",this.display),volume:jQuery(".minplayer-"+e+"-volume-slider",this.display),mute:jQuery(".minplayer-"+e+"-volume-mute",this.display),timer:n,duration:n})}})("default",osmplayer);(function(e,t){t=t||{};t.playlist=t.playlist||{};t.playlist[e]=function(e,n){t.playlist.call(this,e,n)};t.playlist[e].prototype=new t.playlist;t.playlist[e].prototype.constructor=t.playlist[e];t.playlist[e].prototype.construct=function(){this.options=jQuery.extend({showPlaylist:!0},this.options);t.playlist.prototype.construct.call(this);minplayer.showThenHide(this.elements.hideShow);this.get("player",function(e){var t=this.options.vertical?"width":"height",n=this.options.vertical?"right":"bottom",r=this.options.vertical?"marginRight":"marginBottom";this.hideShow=function(i,s){var o={},u={},l=this.display[t]();o[n]=i?l:0;s?e.elements.minplayer.animate(o,"fast"):e.elements.minplayer.css(o);u[r]=i?0:-l;s?this.display.animate(u,"fast",function(){e.resize()}):this.display.css(u)};this.elements.hideShow&&this.elements.hideShow.bind("click",function(e){return function(t){t.preventDefault();var n=jQuery("span",e.elements.hideShow),t=e.options.vertical?"e":"s",r=e.options.vertical?"w":"n",n=n.hasClass("ui-icon-triangle-1-"+r);jQuery("span",e.elements.hideShow).removeClass(n?"ui-icon-triangle-1-"+r:"ui-icon-triangle-1-"+t).addClass(n?"ui-icon-triangle-1-"+t:"ui-icon-triangle-1-"+r);e.hideShow(n,!0)}}(this));e.elements.minplayer&&(this.options.showPlaylist?this.options.vertical?e.elements.minplayer.css("right",this.display.width()+"px"):e.elements.minplayer.css("bottom",this.display.height()+"px"):this.hideShow(!1))})};t.playlist[e].prototype.getDisplay=function(){this.options.build&&this.context.append('      <div class="osmplayer-'+e+'-playlist">        <div class="osmplayer-'+e+'-hide-show-playlist ui-state-default">          <span class="ui-icon"></span>        </div>        <div class="minplayer-'+e+'-loader-wrapper">          <div class="minplayer-'+e+'-loader"></div>        </div>        <div class="osmplayer-'+e+'-playlist-scroll ui-widget-content">          <div class="osmplayer-'+e+'-playlist-list"></div>      </div>      </div>');return jQuery(".osmplayer-"+e+"-playlist",this.context)};t.playlist[e].prototype.getElements=function(){var n=t.playlist.prototype.getElements.call(this),r=this.options.vertical?"playlist-vertical":"playlist-horizontal",r=r+(this.options.playlistOnly?" playlist-only":""),i=this.options.showPlaylist,i=this.options.vertical?i?"e":"w":i?"s":"n",s=this.options.vertical?"ui-corner-left":"ui-corner-top";(this.options.disablePlaylist||!this.options.playlist)&&this.display.remove();this.display.addClass(r);r=jQuery(".osmplayer-"+e+"-hide-show-playlist",this.display);r.addClass(s);this.options.playlistOnly&&(r.hide(),r=null);jQuery("span",r).addClass("ui-icon-triangle-1-"+i);return jQuery.extend(n,{playlist_busy:jQuery(".minplayer-"+e+"-loader-wrapper",this.display),list:jQuery(".osmplayer-"+e+"-playlist-list",this.display),scroll:jQuery(".osmplayer-"+e+"-playlist-scroll",this.display),hideShow:r})}})("default",osmplayer);(function(e,t){t=t||{};t.teaser=t.teaser||{};t.teaser[e]=function(e,n){t.teaser.call(this,e,n)};t.teaser[e].prototype=new t.teaser;t.teaser[e].prototype.constructor=t.teaser[e];t.teaser[e].prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.display.bind("mouseenter",function(e){return function(){e.addClass("ui-state-hover")}}(this.elements.info)).bind("mouseleave",function(e){return function(){e.removeClass("ui-state-hover")}}(this.elements.info))};t.teaser[e].prototype.getDisplay=function(){this.context.append('    <div class="osmplayer-'+e+'-teaser ui-widget-content">      <div class="osmplayer-'+e+'-teaser-image"></div>      <div class="osmplayer-'+e+'-teaser-info ui-state-default">        <div class="osmplayer-'+e+'-teaser-title">Sample Title</div>      </div>    </div>');var t=jQuery(".osmplayer-"+e+"-teaser",this.context);return t.eq(t.length-1)};t.teaser[e].prototype.select=function(e){e?this.elements.info.addClass("ui-state-active"):this.elements.info.removeClass("ui-state-active")};t.teaser[e].prototype.getElements=function(){var n=t.teaser.prototype.getElements.call(this);return jQuery.extend(n,{info:jQuery(".osmplayer-"+e+"-teaser-info",this.display),title:jQuery(".osmplayer-"+e+"-teaser-title",this.display),image:jQuery(".osmplayer-"+e+"-teaser-image",this.display)})}})("default",osmplayer);(function(e,t){t=t||{};t.pager=t.pager||{};t.pager[e]=function(e,n){t.pager.call(this,e,n)};t.pager[e].prototype=new t.pager;t.pager[e].prototype.constructor=t.pager[e];t.pager[e].prototype.getDisplay=function(){this.options.build&&this.context.append('      <div class="osmplayer-'+e+'-playlist-pager ui-widget-header">        <div class="osmplayer-'+e+'-playlist-pager-left">          <a href="#" class="osmplayer-'+e+"-playlist-pager-link osmplayer-"+e+"-playlist-pager-prevpage minplayer-"+e+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-w"></span>          </a>        </div>        <div class="osmplayer-'+e+'-playlist-pager-right">          <a href="#" class="osmplayer-'+e+"-playlist-pager-link osmplayer-"+e+"-playlist-pager-nextpage minplayer-"+e+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-e"></span>          </a>        </div>      </div>');return jQuery(".osmplayer-"+e+"-playlist-pager",this.context)};t.pager[e].prototype.getElements=function(){var n=t.pager.prototype.getElements.call(this);return jQuery.extend(n,{prevPage:jQuery(".osmplayer-"+e+"-playlist-pager-prevpage",this.display),nextPage:jQuery(".osmplayer-"+e+"-playlist-pager-nextpage",this.display)})}})("default",osmplayer);(function(e,t){t=t||{};t[e]=function(e,n){this.options=jQuery.extend({controllerOnly:!1},this.options);t.call(this,e,n)};t[e].prototype=new t;t[e].prototype.constructor=t[e];t[e].prototype.construct=function(){t.prototype.construct.call(this);this.options.controllerOnly&&this.display.addClass("controller-only")};t[e].prototype.getDisplay=function(){0==this.context.children().length&&(this.context=this.context.attr({id:this.options.id+"-player","class":"minplayer-"+e+"-media"}).wrap(jQuery(document.createElement("div")).attr({"class":"minplayer-"+e+"-display ui-widget-content"})).parent(".minplayer-"+e+"-display").wrap(jQuery(document.createElement("div")).attr({"class":"minplayer-"+e})).parent(".minplayer-"+e).prepend('        <div class="minplayer-'+e+'-logo"></div>        <div class="minplayer-'+e+'-error"></div>').wrap(jQuery(document.createElement("div")).attr({id:this.options.id,"class":"osmplayer-"+e+" player-ui"})).parent(".osmplayer-"+e),this.options.build=!0);return this.context};t[e].prototype.getElements=function(){var n=t.prototype.getElements.call(this);this.display.width(this.options.width);this.display.height(this.options.height);var r=jQuery(".minplayer-"+e,this.display);this.options.playlistOnly&&(r.remove(),r=null);return jQuery.extend(n,{player:this.display,minplayer:r,display:jQuery(".minplayer-"+e+"-display",this.display),media:jQuery(".minplayer-"+e+"-media",this.display),error:jQuery(".minplayer-"+e+"-error",this.display),logo:jQuery(".minplayer-"+e+"-logo",this.display)})}})("default",osmplayer);