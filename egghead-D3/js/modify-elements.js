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