# Flash talk on Function Reactive Programming in Javascript

This presentation is for a small 20-30 min talk on FRP in Js. So I've tried to break the `scary` concepts to simpler, easy to understand parts and not include too much code. Presentation has just 3 code examples and 2 of the work right inside the presentation, for 3rd example (image drag with RxJs) a link is given to navigate to the demo page. All the code for the examples is included in the presentation itself.

## Examples
1. Reactive Programming with Meteor's Tracker system
   *  Uses extracted out Tracker and reactive-var meteor packages for creating a simple `a, b, c -> a + b` reactive dependency 
2. Creating, using and disposing event reactive streams with RxJs
   * A counter example with two buttons
   * Demonstrates
       * creating reactive event streams and using them instead of event handlers
       * decalaratively disposing event streams (without calling observable.dispose)
3. Little complex play with reactive event streams with RxJs
    * Create a dragable UI 
    * Demonstrates
        * Creating new reactive streams using existing event streams
        * Applying functional constructs like `map`, `concatMap` etc on asynchronous reactive streams
