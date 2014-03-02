var svgIconConfig = {
	plus : {
		url : 'svg/plus.svg',
		animation : [
			{
				el : 'path:nth-child(1)',
				animProperties : {
					from : { val : '{"transform" : "r0 32 32", "opacity" : 1}' },
					to : { val : '{"transform" : "r180 32 32", "opacity" : 0}' }
				}
			},
			{
				el : 'path:nth-child(2)',
				animProperties : {
					from : { val : '{"transform" : "r0 32 32"}' },
					to : { val : '{"transform" : "r180 32 32"}' }
				}
			}
		]
	}
};