(function() {
    'use strict';
    //--------------------------------------------------
    $.get("https://antimatterx.github.io/wallpaper/src/wallpapers.txt").done(function(d) {
        var urls = d.split("\n"),
        h = $("<div>").appendTo("body");
        amx.addInputRange(h[0], {
        	title: "壁紙のインデックス",
        	min: 0,
        	max: urls.length - 1,
        	change: function(idx){
        		amx.setWallpaper(urls[idx]);
        	}
        });
    });
    //--------------------------------------------------
})();
