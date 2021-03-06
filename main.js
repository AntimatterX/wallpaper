(function() {
    'use strict';
    //--------------------------------------------------
    var si,
        h = $("<div>").css({
            display: "inline-block",
            position: "absolute",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "1em",
            borderRadius: "25px"
        }).appendTo("body"),
        urls = [
            "YXxxhlg.jpg",
            "WjedZgv.jpg",
            "FHzxqVM.jpg",
            "TN8nKSw.jpg",
            "WdTfgQT.jpg",
            "nlVt8Ri.jpg",
            "edmfO7E.jpg",
            "YeQz0DW.jpg"
        ];
    amx.addInputRange(h[0], {
        title: "UIの透明度",
        value: 25,
        min: 0,
        max: 100,
        change: function(v) {
            h.css("backgroundColor", "rgba(" + amx.getRGB(amx.getCSS(h)).join(", ") + ", " + (1 - (v / 100)) + ")");
        }
    });
    var inputIndex = $(amx.addInputRange(h[0], {
            title: "壁紙のインデックス",
            value: amx.randInt(0, urls.length - 1),
            min: 0,
            max: urls.length - 1,
            change: function(idx) {
                amx.setWallpaper("https://i.imgur.com/" + urls[idx]);
            }
        })),
        inputInterval = $(amx.addInputRange(h[0], {
            title: "切り替え秒数",
            value: 5,
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
    (function() {
        // https://9cubed.info/article/jquery/0037
        $("body").css("overflow", "hidden").add("html").css("height", "100%");
        var isMoving = false, // 移動中かどうか
            clickPos, // クリックされた位置
            pos; // クリックされた時の要素の位置
        h.on("mousedown", function(e) {
            if (isMoving) return;
            isMoving = true;
            clickPos = [e.screenX, e.screenY];
            pos = h.position();
        });
        h.parent().on("mousemove", function(e) {
            if (!isMoving) return;
            h.css("left", (pos.left + e.screenX - clickPos[0]) + "px");
            h.css("top", (pos.top + e.screenY - clickPos[1]) + "px");
        });
        h.on("mouseup", function() {
            if (!isMoving) return;
            isMoving = false;
        }).children().on("mousedown", function(e) {
            e.stopPropagation();
        });
    })();
    //--------------------------------------------------
})();
