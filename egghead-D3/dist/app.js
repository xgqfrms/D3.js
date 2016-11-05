(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// d3 version 4.3.0
/*
模板字面量(Template Literals)
注意事项: 必须使用 两个 `${?}` 英文的反斜线符号(ESC 键下面)
*/
let box = document.getElementById('box');
// var box = document.getElementById('box');
box.innerHTML = `<h3><mark> ${d3.version} </mark></h3>`;

document.write("hello, D3!");

/*
var v = d3.version;
document.body.innerHTML = '<mark>'+v+'</mark>';
*/

},{}]},{},[1])