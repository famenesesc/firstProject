"use strict";
var t, r = document.getElementById("image"), a = e(r, "max-width"), n = e(r, "display"); o.assert.notStrictEqual(a, "none", 'Try using the "max-width" style property '), o.assert.equal(n, "block", 'Use the "display" style property with a value of "block" for responsive images.'); var s = r.style.getPropertyValue("display"), i = r.style.getPropertyPriority("display"); r.style.setProperty("display", "none", "important"), t = e(r, "height"), r.style.setProperty("display", s, i), o.assert.equal(t, "auto", 'Use the "height" style property with a value of "auto" for responsive images.')
