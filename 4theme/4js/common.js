$(document).ready(function() {
    $("ul#primary-nav li").hover(
           function(){
                var t = $(this);
                var ul = t.find('ul:first');
                var o = t.offset();
                var po = t.offsetParent().offset();
                var lo = 0;
                var to = 0;
                if (t.css('float') == 'left') {
                    lo =  o.left - po.left;
                    to =  o.top  - po.top +  t.height() - 8;
                }
                else {
                    lo = o.left - po.left  +  t.width() - 8;
                    to =  o.top  - po.top;
                }
                ul.css({ left: lo, top: to });
                ul.css({display: "none"}).show(400);
            }
        ,
            function(){
                var ul = $(this).find('ul:first');
                ul.css({display: "none"});
            }
        );

	    var as = $("a");
		for (var i = 0; i < as.length; i++) {
		var a = as[i];
		var re = new RegExp("\\.(jpg|jpeg|png|gif)$");
			if (a.href && a.href.toLowerCase().match(re)) {
				$(a).fancybox({
					'overlayShow'	: true,
					'transitionIn'	: 'elastic',
					'transitionOut'	: 'elastic'
				});
			}
		}
	});

