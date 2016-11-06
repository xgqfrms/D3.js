// load-data.js


d3.json("../data/db.json", function(data){
    console.log(data);
    let min = d3.min(data, function(d){
        return d.age;
    });
    console.log(min);
    let max = d3.max(data, function(d){
        return d.age;
    });
    console.log(max);
    let extent = d3.extent(data, function(d){
        return d.age;
    });
    console.log(extent);
    // [17, 38]
    //ES6 
    let x = d3.extent(data, (d) => d.age);
    console.log(`x = ${x}`);
    let y = d3.extent(data, d => d.age);
    console.log(`x = ${y}`);

    let ages = d3.set(data, d => d.age);
    console.log("ages = " + `${ages}`);
    console.log(ages);
    console.log(ages.values());
    //f {$23: "23", $38: "38", $17: "17", $37: "37", $18: "18"}
    var scale = d3.scaleLinear()
        .domain(extent)
        .range([0,300]);
    console.log(scale(17));
    console.log(scale(23));
    console.log(scale(28));
    console.log(scale(38));
});
/**/

/*
d3.csv("../data/db.csv", data => {
    console.log(data);
    let min = d3.min(data, d => d.age);
    console.log(min);
    let max = d3.max(data, d => d.age);
    console.log(max);
    // ES6
    let extent = d3.extent(data, d => d.age);
    console.log(`x = ${extent}`);
});
*/

/*
d3.tsv("../data/db.tsv", (data) => {
    console.log(data);
    let min = d3.min(data, (d) => d.age);
    console.log(min);
    let max = d3.max(data, (d) => d.age);
    console.log(max);
    // ES6
    let extent = d3.extent(data, (d) => d.age);
    console.log(`x = ${extent}`);
});
*/

