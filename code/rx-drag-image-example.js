var sprite = document.getElementById("sprite"),
    container = document.getElementById("sprite-container");

var spriteMouseDowns = Rx.Observable.fromEvent(sprite, "mousedown"),
    containerMouseMoves = Rx.Observable.fromEvent(container, "mousemove"),
    containerMouseUps = Rx.Observable.fromEvent(container, "mouseup"),
    spriteMouseDrags =
      // For every mouse down event on the sprite...
      spriteMouseDowns.
      concatMap(function(contactPoint) {
        // ...retrieve all the mouse move events on the sprite container...
        return containerMouseMoves.
          // ...until a mouse up event occurs.
          takeUntil(containerMouseUps).
          map(function(movePoint) {
            // ...adjust the position for initial mouse down
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
