$(document).ready(function() {
    var sec = 60;
    var questionOne = document.getElementById("questionS")
    var choice = Array.from(document.getElementsByClassName("btn"));
    var questOne = $("#correct1");
    var questTwo = $("#correct2");
    var seconds = document.querySelector(".seconds");
    var currentQuestion = {};
    var Answers = true;
    var score = 0;
    var questionCounter = 0;
    var availableQuestion = [];
    
    let questions = [
      {
        "question": "Inside which HTML element do we put the JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "answer": 3
      },
      {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script src='xxx.js'>",
        "choice3": "<script file='xxx.js'>",
        "answer": 1
      },
      
    ]

    
    const CORRECT_BONUS = 2;
    const MAX_QUESTIONS = 2;

    startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [ ... questions];
      getNewQuestion();
    }
    getNewQuestion = () => {
      questionCounter++;
      const questionIndex = Math.floor(Math.random() * availableQuestions.length);
      currentQuestion = availableQuestion[questionIndex];
      question.innerText = currentQuestion.question;

      choices.foreach( choice => {
        // const number = choice.dataset[]
      })
    };
    function downTime() {
      seconds.textContent = sec;  
      sec--;
      
      $("#countdown").append(seconds)
    }

    function questionOne(){

    }
    function timer() {
      let goOne = setInterval(function(){downTime()
          if (sec == -1) {
            clearInterval(goOne);
            alert("Time out!! :(");
        }
        
      }, 1000);
      
    }

    $('#button1').on("click", timer);

    





  });


