/*
Plugin: jQuery Parallax
Version 1.1
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*///function that places the navigation in the center of the window
function RepositionNav(){var e=$(window).height(),t=$("#nav").height()/2,n=e/2,r=n-t;$("#nav").css({top:r})}(function(e){e.fn.parallax=function(t,n,r,i){function s(t,n){n.each(function(){var n=e(this),r=n.offset().top;if(i==1)var s=n.outerHeight(!0);else var s=n.height();r+s>=t&&r+s-u<t&&c(t,s);r<=t&&r+s>=t&&r-u<t&&r+s-u>t&&c(t,s);r+s>t&&r-u<t&&r>t&&c(t,s)})}function l(e,t,n,r,i){return e+" "+Math.round(-(t+n-r)*i)+"px"}function c(e,i){f.css({backgroundPosition:l(t,i,e,n,r)})}var o=e(window),u=e(window).height(),a=o.scrollTop(),f=e(this);t==null&&(t="50%");n==null&&(n=0);r==null&&(r=.1);i==null&&(i=!0);height=f.height();f.css({backgroundPosition:l(t,i,n,r)});o.bind("scroll",function(){var t=o.scrollTop();s(t,f);e("#pixels").html(t)})}})(jQuery);