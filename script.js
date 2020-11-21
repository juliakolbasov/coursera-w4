(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i=0; i< names.length; i++) {
    var name = names[i];
    if (name.charAt(0).toUpperCase()!=='J')
       helloSpeaker.speak(name)
    else
       byeSpeaker.speak(name);
  }
})();

