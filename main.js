(function() {
    'use strict';
    //--------------------------------------------------
    var si,
        h = $("<div>").css("background-color", "rgba(255, 255, 255, 0.5)").appendTo("body"),
        urls = [
            "YXxxhlg.jpg",
            "WjedZgv.jpg",
            "FHzxqVM.jpg",
            "TN8nKSw.jpg",
            "WdTfgQT.jpg",
            "nlVt8Ri.jpg",
            "edmfO7E.jpg",
            "YeQz0DW.jpg"
        ],
        inputIndex = $(amx.addInputRange(h[0], {
            title: "壁紙のインデックス",
            value: 0,
            min: 0,
            max: urls.length - 1,
            change: function(idx) {
                amx.setWallpaper("https://i.imgur.com/" + urls[idx]);
            }
        })),
        inputInterval = $(amx.addInputRange(h[0], {
            title: "切り替え秒数",
            value: 2.5,
            min: 1,
            max: 10,
            step: 0.5
        }));
    amx.addInputBool(h[0], {
        title: "自動切り替え",
        change: function(flag) {
            if (flag) si = setInterval(function() {
                var nextIdx = Number(inputIndex.val()) + 1;
                amx.triggerEvent(inputIndex.val(nextIdx >= urls.length ? 0 : nextIdx)[0], "change");
            }, inputInterval.val() * 1000);
            else clearInterval(si);
        }
    });
    //--------------------------------------------------
})();
