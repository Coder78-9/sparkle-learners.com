// script.js - reusable quiz logic for all lessons

function setupQuiz(quizQuestions) {
  var quizButton = document.getElementById("startquiz");
  var quizArea = document.getElementById("quiz-area");
  var feedback = document.getElementById("feedback");
  var currentQuestionIndex = 0;

  function showQuestion(index) {
    feedback.textContent = "";
    var question = quizQuestions[index];
    quizArea.innerHTML = "<p>" + question.question + "</p>";

    question.choices.forEach(function(choice, i) {
      var btn = document.createElement("button");
      btn.textContent = choice;
      btn.addEventListener("click", function() {
        checkAnswer(i);
      });
      quizArea.appendChild(btn);
      quizArea.appendChild(document.createElement("br"));
    });
  }

  function checkAnswer(choiceIndex) {
    var question = quizQuestions[currentQuestionIndex];
    if (choiceIndex === question.correct) {
      feedback.textContent = "✅ Correct!";
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(function() {
          showQuestion(currentQuestionIndex);
        }, 1000);
      } else {
        quizArea.innerHTML = "<p>🎉 Quiz Finished!</p>";
        feedback.textContent = "";
      }
    } else {
      feedback.textContent = "❌ Try again!";
    }
  }

  quizButton.addEventListener("click", function() {
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
  });
}
