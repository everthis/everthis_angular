'use strict';

/* Directives */

/**
 *
 *
 * var arrs = [],
per_item,
srcc,
prev_src;
function ge() {
 per_item = $("#bigImg").trigger('click');
srcc = $(per_item).attr('src');
prev_src = srcc;
if(prev_src !== srcc) {
	  arrs.push(srcc);
	prev_src = srcc;
}

}
var timer = setInterval(ge, 1000);
 */