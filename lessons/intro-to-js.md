---
path: "/intro-to-js"
title: "Modern Javascript"
section: "Introduction to JS and React"
description: "The second page"
order: "1A"
icon: "book"
---

Lets get started with understading modern JS concepts. Aim of this module to provide basic understanding of new ES6 concepts which are frequently used across React. So when you come across any new ES6 syntax you will have some idea about those concepts.

## Understanding "let" and "const"

Generally we use `var` keyword to define variables in javascript. But with ES6 they have introduced two new keywords `let` and `const`.

In many ways `let` is like a cousin of `var`. It has a lot of similarities but differentiates in ways that makes ES6 a more modern-feeling language. Using `let` you can reassign variables, but its syntax is more strict than `var`.

```js
let myName = "Ujval";
console.log(myName);

myName = "Joshi";
console.log(myName);
```

The keyword `const` is an abbreviation for `constant`. Similar to `let`, it’s block-scoped, however, you can’t reassigned it.

```js
const myName = "Ujval";
console.log(myName);

myName = "Joshi"; // It will throw error
```

| Keyword | Function vs Block-scope | Redefinable |
| ------- | ----------------------- | ----------- |
| var     | function-scop           | ✅          |
| let     | block-scope             | ✅          |
| const   | block-scope             | 🚫          |

<br >

## Arrow Functions

New with JavaScript since ES6, arrow functions, also known as fat arrow functions, are a concise way to write function expressions.

### Normal Function

```js
function multiplyBy2(num) {
  return num * 2;
}
multiplyBy2(5);
```

---

### Arrow Function

```js
const multiplyBy2 = num => num * 2;
multiplyBy2(5);
```

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the `this` keyword always represents the object that defined the arrow function.

## Exports & Imports

With ES6, with get built-in support for modules in JavaScript. Like with CommonJS, each file is its own module. To make objects, functions, classes or variables available to the outside world it’s as simple as exporting them and then importing them where needed in other files.

#### Default Export

```js
// person.js
const person = {
  name: "Ujval"
};
export default person;

// Another file
import person from "person.js";
```

#### Named Export

```js
// person.js
export const name = "Ujval"
export const job "Software Developer"

// Another file
import {name, job} from "person.js"
```

## Classes

It seems like “composition over inheritance” is the new motto. Everyone’s talking about it, and that’s not strange since composition gives you more flexibility by composing functionality to create a new object, while inheritance forces you to extend entities in an inheritance tree.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

Lets create a class called `Person` and add a constructor and printMyName method to it.

```js
class Person {
  constructor() {
    this.name = "Ujval";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
```

Now lets create `Human` class. And extend `Person` class to inherit `Human` Class.

```js
class Human {
  constructor() {
    this.gender = "male";
  }

  printMyGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "Ujval";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();
```

## Spread Operator

When you want to extend object or array you can use spread operator. Spread operator is just `...`.

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
```

## Destructuring

Destructuring allows array elements or object properties to store into variables.

### Array destructuring

```js
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);
```

### Ojbect destructuring

```js
const { firstName } = { firstName: "Ujval", lastName: "Joshi" };
console.log(firstName);
```
