! function(t) {
    "use strict";
    var r = ["#4f98cd", "#e480b2"];
    t(".progress").each(function(e) {
        t(this).progress({
            color: r[e],
            value: parseInt(this.getAttribute("data-level"))
        })
    }), t("#print").click(function() {
        try {
            print()
        } catch (t) {
            alert("Your browser does not support `print()` method.")
        }
    })
}(window.jQuery);

! function(r) {
    var o = function(r, o) {
        var s = parseInt(r.slice(1), 16),
            e = 0 > o ? 0 : 255,
            l = 0 > o ? -1 * o : o,
            t = s >> 16,
            a = s >> 8 & 255,
            c = 255 & s;
        return "#" + (16777216 + 65536 * (Math.round((e - t) * l) + t) + 256 * (Math.round((e - a) * l) + a) + (Math.round((e - c) * l) + c)).toString(16).slice(1)
    };
    r.fn.progress = function(s) {
        var e = {
                color: "#6ec84e",
                value: 75
            },
            l = ['<div class="progress-ring">', '    <div class="progress-track" style="border-color: ${tailColor}"></div>', '    <div class="progress-cover" style="border-color: ${tailColor}"></div>', '    <div class="progress-left" style="border-color: ${color}"></div>', '    <div class="progress-right" style="border-color: ${color}"></div>', '    <span class="progress-value" style="color: ${color}">${value}</span>', "</div>"].join(""),
            t = r(this);
        s = r.extend(e, s), s.tailColor = o(s.color, .8), t.append(l.replace(/\$\{([^\}]+)\}/g, function(r, o) {
            return s[o]
        })), t.find(".progress-left").css("transform", "rotate(" + 3.6 * s.value + "deg)"), s.value > 50 && t.find(".progress-right, .progress-cover").toggle()
    }
}(jQuery);