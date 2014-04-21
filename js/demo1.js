(function() {
	var triggerBttns = document.getElementsByClassName( 'trigger-overlay' ),
		closeBttns = document.getElementsByClassName( 'overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		var overlay; 
		var clickedObject = document.getElementById(this.id);
		if (classie.has(this,'overlay-close')) {
			overlay = jQuery(this).closest('.overlay').get(0);
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else{
			overlay = document.getElementsByClassName(this.id)[0];	
			classie.add( overlay, 'open' );
		} 
		/*if( classie.has( overlay, 'open' ) ) {
			
		}
		else if( !classie.has( overlay, 'close' ) ) {
			
		}*/
	}
	for (i = 0; i < triggerBttns.length; i++) {
  		jQuery(triggerBttns[i]).click(toggleOverlay);
}
	for (i = 0; i < closeBttns.length; i++) {
  		jQuery(closeBttns[i]).click(toggleOverlay);
}
	
	
})();
