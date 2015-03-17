title: Functional Reactive Programming with Javascript
output: dist/jschannel-bangalore-introduction-to-reactive-programming-with-javascript.html
<!-- theme: sudodoki/reveal-cleaver-theme -->
theme: ~/Documents/Work/reference/Design/Cleaver-Themes/reveal-cleaver-theme
style: custom-styles.css
author:
  name: Thanks
  twitter: channikhabra

--
<div class="title-slide">
  <div class="title-1">
    <h1 class="title-fn">Functional</h1>
    <h1 class="title-rx">Reactive </h1>
  </div>
  <h1 class="title-js">JS</h1>
</div>

--

## Functional

- Stateless Functions
- Lazy Evaluations
- Immutable Data Structures
- Higher Order Functions

--

### FP is too deep for a 20 minute FRP talk

For the curious

http://scott.sauyet.com/Javascript/Talk/FunctionalProgramming/

--

### We won't go in details of FP today

#### Here are some functions we need today

--

### map
```javascript
//we have an array
var users = ['Obama', 'Modi', 'Putin', 'Eleven Jinping'];

//create new array without modifying original array
var sillyUsers = map(users, function(user) {
  //work with a single item at a time
  return 'Silly' + user;
});

console.log(sillyUsers);
//["Silly Obama", "Silly Modi", "Silly Putin", "Silly Eleven Jinping"]

```

--

### filter

```javascript
//we have an array
var users = ['Silly Obama', 'Modi', 'Putin', 'Silly Eleven Jinping'];

//create new array with certain items filtered out, without modifying original array
var sillyUsers = filter(users, function(user) {
  //if this function returns true, the item is filtered out
  return user.indexOf('Silly') >= 0; //user is Silly
});

console.log(sillyUsers);
//["Silly Obama", "Silly Eleven Jinping"]

```

--

# Reactive

--

#### A Hypothetical Example

```javascript
/**
 * HYPOTHETICAL Future form of Reactive Javascript
 */

// a and b are two brothers
var a, b;

a = 10,     // a is 10 years old
b <= a + 5;  // b is 5 years older than a

//So we created a reactive dependency for b with `<=`
//Now b updates whenever a updates
```

---
#### Same thing in present day javascript

```javascript
var _a, _b;

function a() {
  return _a;
}
function b() {
  return _b;
}

function setA(val) {
  _a = 10;
  _b = _a + 5;
}
function setB(val) {
  _b = val;
  _a = _b - 5;
}

```
