# 模板字面量(Template Literals)

[es6-in-depth](http://kamranahmed.info/blog/2016/04/04/es6-in-depth/)

> 注意事项: 必须使用 两个 `${?}` 英文的反斜线符号(ESC 键下面)

> 如果使用逗号'', ""会导致无法识别!

```js
# old 

var name = 'John';
console.log('Hello ' + name);

# new

var name = 'John';
console.log(`Hello ${name}`);

# 注意事项: 必须使用 两个 `${?}` 英文的反斜线符号(ESC 下面)
``` 
