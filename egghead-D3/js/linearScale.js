var linearScale = d3.scaleLinear()
    .domain([0,100])
    .range([0,600])
    .clamp(true);
// domamin === input
// range === output

console.log(linearScale(-100));
console.log(linearScale(100));
console.log(linearScale(50));
// clamp === cut
console.log(linearScale(50));
// invert === 颠倒过来
console.log(linearScale.invert(300));