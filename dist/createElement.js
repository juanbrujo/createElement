/*
 *  createElement - v0.0.1
 *  Create HTML elements using JavaScript
 *
 *  https://github.com/juanbrujo/createElement
 *  Demo: http://juanbrujo.github.io/createElement/
 *
 *  Author: Jorge Epuñan H. |  @csslab
 *  License: MIT
 *  ©2015
 */
var createElement = function() {
    "use strict";
    function InitCreateElement(name, val, result) {
        if ("undefined" == typeof name) return !1;
        "undefined" == typeof val && (val = ""), "undefined" == typeof result && (result = "");
        var i, ret = document.createElement(name);
        if (val.length > 1 && "[" === val[0] && "]" === val[val.length - 1]) {
            var values = val.split("][");
            values[0] = values[0].substr(1), values[values.length - 1] = values[values.length - 1].substr(0, values[values.length - 1].length - 1), 
            i = 0;
            var valuesLen = values.length;
            for (i; valuesLen > i; i++) {
                var key, width = "", colonIndex = values[i].indexOf(":");
                colonIndex > 0 ? (key = values[i].substr(0, colonIndex), width = values[i].substr(colonIndex + 1)) : key = values[i].substr(0), 
                ret.setAttribute(key, width);
            }
        }
        if (Array.isArray(result)) for (i = 0; i < result.length; i++) result[i].tagName ? ret.appendChild(result[i]) : ret.appendChild(document.createTextNode(result[i])); else result.tagName ? ret.appendChild(result) : ret.innerHTML = result;
        return ret;
    }
    return InitCreateElement;
}(this);