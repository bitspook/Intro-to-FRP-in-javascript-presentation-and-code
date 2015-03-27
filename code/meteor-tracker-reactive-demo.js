var firstName = new ReactiveVar('anon');  //a well, reactive variable
var lastName = new ReactiveVar('anon');

var fullName = new ReactiveVar();

Tracker.autorun(function(){
  //reaction (aka reactive computation) that must execute
  // whenever its dependent variables change
  fullName.set(firstName.get() + ' ' + lastName.get());
});
