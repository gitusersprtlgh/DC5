(function(e,t){var t=t||{};t.pager=t.pager||{};t.pager[e]=function(e,n){t.pager.call(this,e,n)};t.pager[e].prototype=new t.pager;t.pager[e].prototype.constructor=t.pager[e];t.pager[e].prototype.getDisplay=function(){this.options.build&&this.context.append('      <div class="osmplayer-'+e+'-playlist-pager ui-widget-header">        <div class="osmplayer-'+e+'-playlist-pager-left">          <a href="#" class="osmplayer-'+e+"-playlist-pager-link osmplayer-"+e+"-playlist-pager-prevpage minplayer-"+e+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-w"></span>          </a>        </div>        <div class="osmplayer-'+e+'-playlist-pager-right">          <a href="#" class="osmplayer-'+e+"-playlist-pager-link osmplayer-"+e+"-playlist-pager-nextpage minplayer-"+e+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-e"></span>          </a>        </div>      </div>');return jQuery(".osmplayer-"+e+"-playlist-pager",this.context)};t.pager[e].prototype.getElements=function(){var n=t.pager.prototype.getElements.call(this);return jQuery.extend(n,{prevPage:jQuery(".osmplayer-"+e+"-playlist-pager-prevpage",this.display),nextPage:jQuery(".osmplayer-"+e+"-playlist-pager-nextpage",this.display)})}})("default",osmplayer);