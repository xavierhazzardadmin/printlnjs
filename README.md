# What is this?

This is a small, lightweight function that allows you to run console.log by using println.
It has the option to also choose spacing between lines for simplicity in reading.

# Installation

`npm i printnln --save`

Then...

```js
const println = require("printnln");
```

# How to use it?

All you do it run the function like this, with the arguments you want:

```js
println("text", "text");
///output
text;
text;
```

You can also add a number as the beginning argument to choose the line spacing:

```js
println(2, "text", "text");
//output
text;

text;
```
