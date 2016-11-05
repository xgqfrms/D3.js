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
