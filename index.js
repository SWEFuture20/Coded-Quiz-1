$(document).ready(function() {
    var sec = 60;
    var seconds = document.querySelector(".seconds");
    var currentQuestion = {};
    var Answers = true;
    var score = 0;
    var questionCounter = 1;
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
    buttonTwo.id = "correct";
    let buttonThree = document.createElement('button');
    button.append(questChoiceOne);
    buttonTwo.append(questChoiceTwo);
    buttonThree.append(questChoiceThree);
    document.body.appendChild(button);
    document.body.appendChild(buttonTwo);
    document.body.appendChild(buttonThree);

    let questTwo = "Who is the 20th President?";
    let questChoiceFour = "Andrew Jackson";
    let questChoiceFive = "Herbert Hoover";
    let questChoiceSix = "James Garfield";

    let div = document.createElement('div')
    let h2 = document.createElement('h1');
    div.append(h2);
    h1.append(questTwo);
    document.body.appendChild(h1);
    let buttonFour = document.createElement('button');
    let buttonFive = document.createElement('button');
    buttonFive.id = "correct";
    let buttonSix = document.createElement('button');
    buttonFour.append(questChoiceFour);
    buttonFive.append(questChoiceFive);
    buttonSix.append(questChoiceSix);
    document.body.appendChild(button);
    document.body.appendChild(buttonTwo);
    document.body.appendChild(buttonThree);
    
    
    var person = prompt("Please enter your name", "");

if (person == null || person == "") {
  txt = "Try again.";
} else {
  txt = "Hello " + person + "your score is " + score;
}
    // correctOne();
    
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
        
      }, 1000);
      
    }

    $('#button1').on("click", timer);
    $("#correct").on("click", function(event){
      event.preventDefault();
      // correctOne();
   

    
    // function correctOne(){
    let questOneResults = "Woodrow Wilson"
      var buttonAns = 0;
      if (questOneResults == "Woodrow Wilson") {
        alert("You are correct")
        var choice = buttonAns + questionCounter;
        console.log(choice)
      } else if (!questOneResults == "Woodrow Wilson") 
      sec - 2;
      alert("You are wrong")
        var choiceTwo = buttonAns - questionCounter;
        console.log(choiceTwo)
      
    // }
  })
    // correctOne();





  });


