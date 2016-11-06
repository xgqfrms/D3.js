//chart.js

var scores =[
    {name: 'Alice', score: 91},
    {name: 'Billy', score: 73},
    {name: 'Cindy', score: 97},
    {name: 'Divid', score: 77},
    {name: 'Emily', score: 89}
];

/*let data = d3.select('.chart')
    .selectAll('div')
    .data(scores);

data.enter()
    .append('div')
    .text(function(d){
        return d.name
    });*/

/*
注意事项： 
1. 如果 .chart 中本身没有div 元素，将不会显示，使用update，enter 交集的方式，创建div
2. 如果 .chart 中本身有div 元素，将会显示, 使用update 更新！
*/

var update = d3.select('.chart')
    .selectAll('div')
    .data(scores, function(d){
        return d ? d.name : this.innerText;
    })
    .style('color', function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });

update.enter()
    .append('div')
    .text((d) => d.name)
    .style('color', () => "hsl(" + Math.random() * 360 + ",100%,50%)")
    .style('background', (d, i) => i % 2 ? "#fff" : "#eee");

