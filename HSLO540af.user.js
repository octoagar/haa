// ==UserScript==
// @name         HSLO v5 Yue Edition | AFTERGLOW 24/7
// @description  HSLO multibox edition
// @version      5.4.0
// @author       2coolife, YueAgar_c, Mike
// @match        http://agar.io/*
// @match        https://agar.io/*
// @updateURL    https://imissyuesomuch.glitch.me/HSLO540af.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      yueagar.ml
// ==/UserScript==

if (location.host === "agar.io" && location.href !== "https://agar.io/hslo") {
    location.href = "https://agar.io/hslo";
    return;
};

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://imissyuesomuch.glitch.me/HSLO540af.html?' + Math.random(),
    onload: function(data) {
        document.open();
        document.write(data.responseText);
        document.close();
    }
});
