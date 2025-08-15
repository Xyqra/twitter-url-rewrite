// ==UserScript==
// @name         Twitter URL Rewrite to Nitter
// @namespace    https://xyqra.com/twitter-url-rewrite.user.js
// @version      1.0
// @description  Redirects Twitter URLs to Nitter.
// @match        https://x.com/*
// @match        https://www.x.com/*
// @match        https://nitter.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const nitterDomain = 'nitter.net';
    const currentUrl = window.location;

    // Only rewrite if not already on nitter
    if (currentUrl.hostname === 'x.com' || currentUrl.hostname === 'www.x.com') {
        const newUrl = currentUrl.protocol + '//' + nitterDomain + currentUrl.pathname + currentUrl.search + currentUrl.hash;
        window.location.replace(newUrl);
    }
})();