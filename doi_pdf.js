// ==UserScript==
// @name        Download DOI pdf
// @namespace   ieee2scihub
// @description Redirect IEEE to sci-hub.io
// @include     http://ieeexplore.ieee.org/*
// @include     https://link.springer.com/*
// @include     https://*.*
// @include     http://*.*
// @version     1.1
// @grant       none
// ==/UserScript==

// This is a slightly brute force solution, but there is no other way to do it using only a userscript.

// Release Notes

// version 1.1
// Redirect IEEE to sci-hub.io
// for example redirect https://doi.org/10.1109/BMSB.2017.7986133 to http://sci-hub.io/10.1109/BMSB.2017.7986133
document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/doi.org/) ) {
        targ.href = targ.href.replace(/https?:\/\/doi\.org/, 'http://sci-hub.io');
    }
});
