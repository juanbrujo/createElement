#createElement.js

> Create HTML elements using JavaScript

###Use

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
    container = createElement("div","[id:links]",[firstItem,secondItem,thirdItem]);
document.querySelector(".nesting-demo").appendChild( container );
```

###Demo

[juanbrujo.github.io/createElement/](http://juanbrujo.github.io/createElement/)