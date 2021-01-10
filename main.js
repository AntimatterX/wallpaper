(function() {
    'use strict';
    //--------------------------------------------------
    $.get("https://antimatterx.github.io/wallpaper/src/wallpapers.txt").done(function(d) {
        var urls = d.split("\n").filter(function(v){
        	return v.length > 0;
        }),
        h = $("<div>").appendTo("body");
        urls.forEach(function(v){
        	$("<img>", {
        		src: v,
        		 crossorigin:"anonymous"
        	}).appendTo(h)
        });
        /*amx.addInputRange(h[0], {
        	title: "壁紙のインデックス",
        	value: 0,
        	min: 0,
        	max: urls.length - 1,
        	change: function(idx){
        		amx.setWallpaper(urls[idx]);
        		alert($("body").css("background-image"));
        	}
        });*/
    });
    //--------------------------------------------------
})();
