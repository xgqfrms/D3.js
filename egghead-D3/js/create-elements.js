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