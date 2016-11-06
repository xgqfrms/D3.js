(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// create-elements.js

let b = d3.select('.div')
    .insert('button', 'a:first-child')
        .html("<i>this is new button</i>");

console.log(b);
console.log(b.size());

let button = d3.select('.div')
    .append('button')
        .html("<i>this is button</i>");

console.log(button);
console.log(button.size());

let remove = d3.select('.div')
    .append('a')
        .attr('href', 'http://xgqfrms.xyz')
        .attr('title', 'xgqfrms.xyz')
        .attr('target', '_blank')
        .attr('class', 'link')
        .html("<i>this is link</i>");

console.log(remove.attr());
console.log(remove.size());

let r = d3.select('.div>a:nth-child(4)')
    .remove();

console.log(r.size());

// a:nth-child(4) === 4 下标从1开始

let div = d3.select('.div')
    .append('div')
        .html("<div>div</div>")
    .append('button')
        .text("submit");

console.log(div.size());
},{}]},{},[1])