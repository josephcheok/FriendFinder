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
