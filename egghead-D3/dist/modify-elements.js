(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//modify-elements.js

let a_link = d3.selectAll("a:nth-child(1)");

console.log(a_link.nodes());
console.log(a_link.attr('href'));

let link = d3.selectAll("a:nth-child(2)")
    .attr('href', 'http://xgqfrms.xyz')
    .attr('target', '_blank');

console.log(link.attr('href'));
console.log(link.attr('target'));
console.log(link.size());


let css = d3.selectAll("a:nth-child(3)")
    .attr('href', 'http://xgqfrms.xyz')
    .attr('target', '_blank')
    .style('color', 'red')
    .style('background', 'rgba(0,255,0,0.7)');

console.log(css.style('color'));
console.log(css.size());


let color = d3.selectAll("a:last-child")
    .classed('color-red', true);

console.log(color.style('color-red'));
console.log(color.size());


let text = d3.selectAll("a:first-child")
    .text('new text');

console.log(text.text());
console.log(text.size());


let html = d3.selectAll(".div a:nth-child(2)")
    .html('<mark>html text</mark>');

console.log(html.html());
console.log(html.size());
},{}]},{},[1])