(function(e,t){var t=t||{};t.playLoader=t.playLoader||{};t.playLoader[e]=function(e,t){minplayer.playLoader.call(this,e,t)};t.playLoader[e].prototype=new minplayer.playLoader;t.playLoader[e].prototype.constructor=t.playLoader[e];t.playLoader[e].prototype.getDisplay=function(){this.options.build&&jQuery("#mediaplayer_minplayer",this.context).prepend('      <div id="mediaplayer_play_loader">        <div id="mediaplayer_busy"></div>        <div id="mediaplayer_bigPlay"></div>        <div id="mediaplayer_preview"></div>      </div>');return jQuery("#mediaplayer_play_loader",this.context)};t.playLoader[e].prototype.getElements=function(){var e=minplayer.playLoader.prototype.getElements.call(this);return jQuery.extend(e,{busy:jQuery("#mediaplayer_busy",this.display),bigPlay:jQuery("#mediaplayer_bigPlay",this.display),preview:jQuery("#mediaplayer_preview",this.display)})}})("simpleblack",osmplayer);