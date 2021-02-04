$(document).ready(function() {
    var sec = 60;
    var questionOne = document.getElementById("questionS")
    var choice = Array.from(document.getElementsByClassName("btn"));
    var seconds = document.querySelector(".seconds");
    var currentQuestion = {};
    var Answers = true;
    var score = 0;
    var questionCounter = 0;
    var availableQuestion = [];

  
    let questOne = "Who is the 28th president?";
    let questChoiceOne = "James Buchanan";
    let questChoiceTwo = "Woodrow Wilson";
    let questChoiceThree = "Rutherford Hayes";

    let h1 = document.createElement('h1');
    h1.append(questOne);
    document.body.appendChild(h1);
    let button = document.createElement('button');
    let buttonTwo = document.createElement('button');
    let buttonThree = document.createElement('button');
    button.append(questChoiceOne);
    buttonTwo.append(questChoiceTwo);
    buttonThree.append(questChoiceThree);
    document.body.appendChild(button);
    document.body.appendChild(buttonTwo);
    document.body.appendChild(buttonThree);
    
    function correctOne(){
      if (button == "Woodrow Wilson")
    }
    correctOne();


    // let questions = [
    //   {
    //     "question": "Inside which HTML element do we put the JavaScript??",
    //     "choice1": "<script>",
    //     "choice2": "<javascript>",
    //     "choice3": "<js>",
    //     "answer": 3
    //   },
    //   {
    //     "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
    //     "choice1": "<script href='xxx.js'>",
    //     "choice2": "<script src='xxx.js'>",
    //     "choice3": "<script file='xxx.js'>",
    //     "answer": 1
    //   },

    // ]
    // // $(<h1>Question 1</h1>).createElement
    
    // const CORRECT_BONUS = 2;
    // const MAX_QUESTIONS = 2;

    // startGame = () => {
    //   questionCounter = 0;
    //   score = 0;
    //   availableQuestions = [ ... questions];
    //   getNewQuestion();
    // }
    // getNewQuestion = () => {
    //   questionCounter++;
    //   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //   currentQuestion = availableQuestion[questionIndex];
    //   question.innerText = currentQuestion.question;

    //   choices.forEach( choice => {
    //     const number = choice.dataset["number"];
    //     choice.innerText = currentQuestion["choice" + number];
        
    //   });
    // };
    function downTime() {
      seconds.textContent = sec;  
      sec--;
      
      $("#countdown").append(seconds)
    }

    
    function timer() {
      let goOne = setInterval(function(){downTime()
          if (sec == -1) {
            clearInterval(goOne);
            alert("Time out!! :(");
    
        }
        startGame();
      }, 1000);
      
    }

    $('#button1').on("click", timer);

    





  });


