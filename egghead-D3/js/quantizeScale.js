// quantizeScale.js
// 量化

var quantizeScale = d3.scaleQuantize()
    .domain([0,100])
    .range(["red", "green", "blue"]);
// domamin === input
// range === output

console.log(quantizeScale(00));
console.log(quantizeScale(50));
console.log(quantizeScale(100));

// invert === 颠倒过来
console.log(quantizeScale.invertExtent("green"));
