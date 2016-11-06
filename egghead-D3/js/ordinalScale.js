// ordinalScale.js

// ordinal 序数

var ordinalScale = d3.scaleOrdinal()
    .domain(["poor", "good", "great"])
    .range(["C-", "B+", "A++"]);
// domamin === input
// range === output

console.log(ordinalScale("poor"));
console.log(ordinalScale("good"));
console.log(ordinalScale("great"));

// invert === 颠倒过来
// console.log(ordinalScale.invert("poor"));