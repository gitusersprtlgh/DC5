(function(e,t){var t=t||{};t[e]=function(e,n){this.options=jQuery.extend({controllerOnly:!1},this.options);t.call(this,e,n)};t[e].prototype=new t;t[e].prototype.constructor=t[e];t[e].prototype.construct=function(){t.prototype.construct.call(this);this.options.controllerOnly&&this.display.addClass("controller-only")};t[e].prototype.getDisplay=function(){if(this.context.children().length==0){this.context=this.context.attr({id:this.options.id+"-player","class":"mediaplayer-"+e+"-media"}).wrap(jQuery(document.createElement("div")).attr({id:"mediaplayer_display"})).parent("#mediaplayer_display").wrap(jQuery(document.createElement("div")).attr({id:"mediaplayer_minplayer"})).parent("#mediaplayer_minplayer").prepend('        <div id="mediaplayer_busy"></div>        <div id="mediaplayer_bigPlay"></div>        <div id="mediaplayer_preview"></div>      ').wrap(jQuery(document.createElement("div")).attr({id:"mediaplayer_node"})).parent("#mediaplayer_node").wrap(jQuery(document.createElement("div")).attr({id:"mediaplayer"})).parent("#mediaplayer").wrap(jQuery(document.createElement("div")).attr({id:this.options.id,"class":"osmplayer-"+e+" player-ui"})).parent(".osmplayer-"+e);this.options.build=!0}return this.context};t[e].prototype.getElements=function(){var n=t.prototype.getElements.call(this);this.display.width(this.options.width);this.display.height(this.options.height);return jQuery.extend(n,{player:this.display,minplayer:jQuery("#mediaplayer_minplayer",this.display),display:jQuery("#mediaplayer_display",this.display),media:jQuery(".minplayer-"+e+"-media",this.display)})}})("simpleblack",osmplayer);