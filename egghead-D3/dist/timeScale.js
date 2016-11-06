(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var timeScale = d3.scaleTime()
    .domain([new Date(2016, 0, 1), new Date(2016, 11, 31)])
    .range([0,365]);
    // .clamp(true);
// domamin === input
// range === output

// month 0-11 === 01-12
// day 1-30/31
// new Date() === today

let x = timeScale(new Date(2016, 7, 1));
console.log(parseInt(x));
console.log(x);

let y =timeScale(new Date(2016, 11, 6));
console.log(parseInt(y));
console.log(y);

let z = timeScale(new Date());
console.log(parseInt(z));
console.log(z);
// clamp === cut
// console.log(timeScale(50));
// invert === 颠倒过来
console.log(timeScale.invert(310));
},{}]},{},[1])