# createElement.js

![Bower version](https://img.shields.io/bower/v/createElement.svg)

> Create HTML elements using JavaScript

![](https://raw.githubusercontent.com/juanbrujo/createElement/master/demo/images/createElement.png)

### Install

`$ bower install createElement`

### Use

**Basic Demo:**
```
var basicDemo = createElement("div", "[class:newDiv]", "I'm a new &lt;div&gt;");
document.querySelector(".basic-demo").appendChild( basicDemo );
```

**Advanced Demo:**
```
var advancedDemo = createElement("a","[href:http://www.csslab.cl][style:background:#f00;]","CSSLab");
document.querySelector(".advanced-demo").appendChild( advancedDemo );
```

**Nesting Demo**
```
var firstItem = createElement("li","","List item 1"),
    secondItem = createElement("li","","List item 2"),
    thirdItem = createElement("li","","<b>List item 3</b>"),
    unorderedList = createElement("ul","[id:links]",[firstItem,secondItem,thirdItem]);
document.querySelector(".nesting-demo").appendChild( unorderedList );
```

### Demo

[juanbrujo.github.io/createElement/](http://juanbrujo.github.io/createElement/)
