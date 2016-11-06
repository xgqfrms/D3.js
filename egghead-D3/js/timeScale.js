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