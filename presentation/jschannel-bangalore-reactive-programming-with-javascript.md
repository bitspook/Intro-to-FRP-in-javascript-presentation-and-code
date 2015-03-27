title: Functional Reactive Programming with Javascript
output: dist/jschannel-bangalore-introduction-to-reactive-programming-with-javascript.html
<!-- theme: sudodoki/reveal-cleaver-theme -->
theme: ~/Documents/Work/reference/Design/Cleaver-Themes/reveal-cleaver-theme
style: custom-styles.css
author:
  name: Thanks
  twitter: channikhabra

--
<script src="../../code/lib/tracker.js"></script>
<script src="../../code/lib/reactive-var.js"></script>
<script src="../../code/meteor-tracker-reactive-demo.js"></script>
<script src="../../code/lib/bower_components/rxjs/dist/rx.all.js"></script>

<div class="title-slide">
  <div class="title-1">
    <h1 class="title-fn">Functional</h1>
    <h1 class="title-rx">Reactive </h1>
  </div>
  <h1 class="title-js">JS</h1>
</div>

--

## What is Reactive Programming?

...
> Programming paradigm oriented around data flows and the propagation of change

--

## What is Reactivity?

### <small>in literal sense</small>

> Something happening in "reaction" to some action

--

### <small>in the context of</small> programming
...
> When some data changes `over time`, everything dependent on the changed data shall `react`

--

### <small>Forgotten Dimension of async code</small>
# Time

--
### <small>A simple</small> example

```javascript
var firstName = new ReactiveVar('anon');  //a well, reactive variable
var lastName = new ReactiveVar('anon');

var fullName = new ReactiveVar();

Tracker.autorun(function(){
  //reaction (aka reactive computation) that must execute
  // whenever its dependent variables change
  fullName.set(firstName.get() + ' ' + lastName.get());
});
```

```bash
> firstName.set('First');
> console.log(fullName.get());
> First anon

> lastName.set('Last');
> console.log(fullName.get());
> First Last

```

--

## <small>another example</small> Promise

> A time dependent (`temporal`) construct which informs us when it gets its value some time in future

--

## Reactive Programming
#### Programming Oriented around

* **data flows**               :  data asynchronously flowing through the app over time
* **propagation of change**    :  change in the data cause any dependencies to react

--

## Functional Reactive Programming
...
> A programming paradigm for reactive programming using the building blocks of functional programming

--

## <small>very basic</small> building blocks <small>of</small> FP

* map
  `<iterable> -> (value) -> <iterable>`
* reduce
  `<iterable> -> (value, acc) -> <iterable>`
* filter
  `<iterable> -> (value) -> <iterable>`
* ...

--

```
                        |   Imperative | Temporal   |
                        |--------------+------------|
                        |   Value      | Promise    |
                        |              |            |
                        |   Iterable   | Observable |
```

--

<div class="s" style="text-align:left">
<h3>Iterable / Array</h3>
<ul>
  <li>A snapshot of data</li>
</ul>

<br/>
<br/>

<h3>Observable</h3>
<ul>
  <li>Data set that updates and reacts as system changes over time</li>
</ul>
</div>
--

### Observable <small>is an asynchronous stream of data which emits </small>
  * new data
  * error
  * completed signal

> --a---b-c---d---X---|->

...

We listen to the stream by `subscribing` to emitted events

--

### Observer pattern <small>on</small>
# steroids

--

### <small>Any value which changes over time can be converted to an</small> Observable
* Variable
* User Input
* Ajax calls
* Events

--

## RXjs

* Reactive extensions for JavaScript
* Developed and maintained by Microsoft
* Has alternatives in many languages
  * Java, C++, C# and many more

--

## <small>example</small>

```javascript
 var countButtonClicks = Rx.Observable.fromEvent(countButton, 'click'),
     stopButtonClicks = Rx.Observable.fromEvent(stopButton, 'click');

 countButtonClicks
 .takeUntil(stopButtonClicks)  //keep taking input from clicks on countButton
 .forEach(function(e) {       // until stopButtonClicks recieves a value
   state.count += 1;
   countNode.innerHTML = state.count;
 });
```
<span id="count">0</span>
<button id="count-btn">Count</button>
<button id="stop-btn">Stop Counting</button>


<script src="../../code/rx-simple-count-stop-count-example.js"></script>

--

## <small>another example</small>

```javascript
var sprite = document.getElementById("sprite"),
    container = document.getElementById("sprite-container");

var spriteMouseDowns = Rx.Observable.fromEvent(sprite, "mousedown"),
    spriteContainerMouseMoves = Rx.Observable.fromEvent(container, "mousemove"),
    spriteContainerMouseUps = Rx.Observable.fromEvent(container, "mouseup"),
    spriteMouseDrags =
      // For every mouse down event on the sprite...
      spriteMouseDowns.
      concatMap(function(contactPoint) {
        // ...retrieve all the mouse move events on the sprite container...
        return spriteContainerMouseMoves.
          // ...until a mouse up event occurs.
          takeUntil(spriteContainerMouseUps).
          map(function(movePoint) {
            return {
              pageX: movePoint.pageX - contactPoint.offsetX,
              pageY: movePoint.pageY - contactPoint.offsetY
            };
          });
      });

// For each mouse drag event, move the sprite to the absolute page position.
spriteMouseDrags.forEach(function(dragPoint) {
  sprite.style.left = dragPoint.pageX + "px";
  sprite.style.top = dragPoint.pageY + "px";
});

```

#### [Demo](../../code/rx-drag-image.html)

--

## Resources
* http://scott.sauyet.com/Javascript/Talk/FunctionalProgramming/
* http://jhusain.github.io/learnrx/index.html
