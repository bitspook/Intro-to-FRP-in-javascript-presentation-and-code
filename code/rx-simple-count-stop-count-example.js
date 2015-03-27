var countButton = document.getElementById("count-btn"),
    stopButton = document.getElementById("stop-btn"),
    countNode = document.getElementById("count");

var state = {count: 0};

var countButtonClicks = Rx.Observable.fromEvent(countButton, 'click'),
    stopButtonClicks = Rx.Observable.fromEvent(stopButton, 'click');

countButtonClicks
  .takeUntil(stopButtonClicks)
  .forEach(function(e) {
    state.count += 1;
    countNode.innerHTML = state.count;
  });
