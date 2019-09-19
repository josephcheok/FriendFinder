(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var questionArray = [
  " ",
  "Your mind is always buzzing with unexplored ideas and plans.",
  "Generally speaking, you rely more on your experience than your imagination.",
  "You find it easy to stay relaxed and focused even when there is some pressure.",
  "You rarely do something just out of sheer curiosity.",
  "People can rarely upset you.",
  "It is often difficult for you to relate to other people’s feelings.",
  "In a discussion, truth should be more important than people’s sensitivities.",
  "You save old greeting cards and letters.",
  "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
  " You feel more energetic after spending time with a group of people."
];

module.exports = questionArray;

},{}],2:[function(require,module,exports){
var question = require("../../../data/questions.js");

for (i = 1; i < question.length; i++) {
  $(".survey").append(`
    <h3><strong>Question ${i}</strong></h3>
          <h4>${question[i]}</h4>
          <select class="chosen-select" id="q${i}" style="display: visible;">
            <option value=""></option>
            <option value="1">1 (Strongly Disagree)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Strongly Agree)</option>
          </select>`);
}

console.log(question[10]);

},{"../../../data/questions.js":1}]},{},[2]);
