// select-elements.js

let link = d3.select('a');
console.log(link);
console.log(link.nodes());

let links = d3.selectAll('a');
console.log(links.nodes());

let divs = d3.selectAll('div');
console.log(divs.nodes());

let div = d3.select('div');
console.log(div.nodes());

let c_div = d3.select('.div');
console.log(c_div.nodes());

let diva = d3.selectAll('div a');
console.log(diva.nodes());

let div_a = d3.selectAll('.div a');
console.log(div_a.nodes());


let link_N = d3.selectAll('a:nth-child(1)');
console.log(link_N.nodes());

let link_NCO= d3.selectAll('a:nth-child(odd)');
console.log(link_NCO.nodes());

let link_NCE= d3.selectAll('a:nth-child(even)');
console.log(link_NCE.nodes());


let link_NF = d3.selectAll('a:first-child');
console.log(link_NF.nodes());

let link_NL = d3.selectAll('a:last-child');
console.log(link_NL.nodes());


let link_NLO = d3.selectAll('a:nth-last-child(odd)');
console.log(link_NLO.nodes());

let link_NLE = d3.selectAll('a:nth-last-child(even)');
console.log(link_NLE.nodes());

let all_links = d3.selectAll(document.links);
console.log(all_links.nodes());
console.log(all_links.size());