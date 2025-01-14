StyleFix.register(function(css, raw) {
	if (PrefixFree.functions.indexOf('radial-gradient') > -1) {
		css = css.replace(/radial-gradient\(([a-z-\s]+\s+)?at ([^,]+)(?=,)/g, function($0, shape, center){
			return 'radial-gradient(' + center + (shape? ', ' + shape : '');
		});
	}

	return css;
});